package com.librashare.app.controllers;

import com.librashare.app.dtos.RatingDto;
import com.librashare.app.services.RatingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/ratings")
public class RatingController {
    @Autowired
    private RatingService ratingService;

    @PostMapping("/{userId}/{bookId}/add")
    public String addRating(@PathVariable Long userId, @PathVariable Long bookId, @RequestBody RatingDto ratingDto) {
        return ratingService.addRating(ratingDto, userId, bookId);
    }

    @GetMapping("/book/{bookId}/all")
    public List<RatingDto> getAllRatingsByBook(@PathVariable Long bookId) {
        return ratingService.getAllRatingsByBook(bookId);
    }

    @GetMapping("/user/{userId}/all")
    public List<RatingDto> getAllRatingsByUser(@PathVariable Long userId) {
        return ratingService.getAllRatingsByUser(userId);
    }

    @GetMapping("/{ratingId}")
    public Optional<RatingDto> getRatingById(@PathVariable Long ratingId) {
        return ratingService.getRatingById(ratingId);
    }

    @PutMapping("/{ratingId}")
    public String updateRating(@PathVariable Long ratingId, @RequestBody RatingDto ratingDto) {
        return ratingService.updateRatingById(ratingDto, ratingId);
    }

    @DeleteMapping("/{ratingId}")
    public String deleteRating(@PathVariable Long ratingId) {
        return ratingService.deleteRatingById(ratingId);
    }
}
