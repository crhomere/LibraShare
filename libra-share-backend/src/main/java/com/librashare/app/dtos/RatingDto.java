package com.librashare.app.dtos;

import com.librashare.app.entities.Rating;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;
import java.util.Date;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class RatingDto implements Serializable {
    private Long ratingId;
    private String username;
    private String comment;
    private Integer rating;
    private Date lastModified;

    public RatingDto(Rating rating) {
        if (rating.getRatingId() != null) {
            this.ratingId = rating.getRatingId();
        }
        if (rating.getUsername() != null) {
            this.username = rating.getUsername();
        }
        if (rating.getComment() != null) {
            this.comment = rating.getComment();
        }
        if (rating.getRating() != null) {
            this.rating = rating.getRating();
        }
        if (rating.getLastModified() != null) {
            this.lastModified = rating.getLastModified();
        }
    }
}
