package com.librashare.app.services;

import com.librashare.app.dtos.RatingDto;
import com.librashare.app.entities.Book;
import com.librashare.app.entities.Rating;
import com.librashare.app.entities.User;
import com.librashare.app.repositories.BookRepository;
import com.librashare.app.repositories.RatingRepository;
import com.librashare.app.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class RatingService {
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private BookRepository bookRepository;
    @Autowired
    private RatingRepository ratingRepository;

    @Transactional
    public String addRating(RatingDto ratingDto, Long userId, Long bookId) {
        Optional<Book> bookOptional = bookRepository.findById(bookId);
        Optional<User> userOptional = userRepository.findById(userId);
        Optional<Rating> ratingOptional = ratingRepository.findByRatingUser_UserIdAndRatingBook_BookId(userId, bookId);
        ratingDto.setLastModified(LocalDateTime.now());

        if (ratingOptional.isPresent()) {
            return "Error Book already rated.";
        } else {
            if (bookOptional.isPresent() && userOptional.isPresent()) {
                ratingDto.setUsername(userOptional.get().getUsername());
                Rating rating = new Rating(ratingDto);
                rating.setRatingUser(userRepository.findById(userId).orElse(null));
                rating.setRatingBook(bookRepository.findById(bookId).orElse(null));
                Rating savedRating = ratingRepository.saveAndFlush(rating);
                return "Rating added successfully for book " + bookId + " of user " + userId + " with ID: " + savedRating.getRatingId();
            } else {
                return "Error user or book missing";
            }
        }
    }

    @Transactional
    public List<RatingDto> getAllRatingsByBook(Long bookId) {
        List<Rating> ratings = ratingRepository.findByRatingBook_BookId(bookId);
        return ratings.stream().map(RatingDto::new).collect(Collectors.toList());
    }

    @Transactional
    public List<RatingDto> getAllRatingsByUser(Long userId) {
        List<Rating> ratings = ratingRepository.findByRatingUser_UserId(userId);
        return ratings.stream().map(RatingDto::new).collect(Collectors.toList());
    }

    @Transactional
    public Optional<RatingDto> getRatingById(Long ratingId) {
        Optional<Rating> ratingOptional = ratingRepository.findById(ratingId);
        return ratingOptional.map(RatingDto::new);
    }

    @Transactional
    public String updateRatingById(RatingDto ratingDto, Long ratingId) {
        Optional<Rating> ratingOptional = ratingRepository.findById(ratingId);
        if (ratingOptional.isPresent()) {
            Rating rating = ratingOptional.get();
            if (ratingDto.getComment() != null) {
                rating.setComment(ratingDto.getComment());
            }
            if (ratingDto.getRating() != null) {
                rating.setRating(ratingDto.getRating());
            }
            rating.setLastModified(LocalDateTime.now());
            ratingRepository.save(rating);
            return "Rating updated successfully";
        }
        return "Rating not found";
    }

    @Transactional
    public String deleteRatingById(Long ratingId) {
        if (ratingRepository.existsById(ratingId)) {
            ratingRepository.deleteById(ratingId);
            return "Rating deleted successfully";
        }
        return "Rating not found";
    }

    public Float getAllRatingValueByBook(Long bookId) {
        Float ratingValue = 0f;
        Optional<Book> bookOptional = bookRepository.findById(bookId);
        if (bookOptional.isPresent()){
             ratingValue =  ratingRepository.getAvgRatingByBook(bookId);
        }
        return ratingValue;

    }
}

