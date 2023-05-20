package com.librashare.app.entities;

import com.librashare.app.dtos.RatingDto;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.Date;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class Rating {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long ratingId;
    private String username;
    private String comment;
    private Integer rating;
    private Date lastModified;

    @ManyToOne()
    @JoinColumn(name = "book_id", referencedColumnName = "bookId")
    private Book ratingBook;
    @ManyToOne()
    @JoinColumn(name = "user_id", referencedColumnName = "userId")
    private User ratingUser;

    public Rating(RatingDto ratingDto) {
        if (ratingDto.getUsername() != null) {
            this.username = ratingDto.getUsername();
        }
        if (ratingDto.getComment() != null) {
            this.comment = ratingDto.getComment();
        }
        if (ratingDto.getRating() != null) {
            this.rating = ratingDto.getRating();
        }
        if (ratingDto.getLastModified() != null) {
            this.lastModified = ratingDto.getLastModified();
        }
    }
}
