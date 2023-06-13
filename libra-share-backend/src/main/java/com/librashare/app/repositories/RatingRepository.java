package com.librashare.app.repositories;

import com.librashare.app.entities.Rating;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface RatingRepository extends JpaRepository<Rating, Long> {

    List<Rating> findByRatingBook_BookId(Long bookId);

    List<Rating> findByRatingUser_UserId(Long userId);

    Optional<Rating> findByRatingUser_UserIdAndRatingBook_BookId(Long userId, Long bookId);

    @Query("SELECT AVG(e.rating) FROM Rating e WHERE e.ratingBook.bookId = ?1")
    Float getAvgRatingByBook(Long bookId);
}
