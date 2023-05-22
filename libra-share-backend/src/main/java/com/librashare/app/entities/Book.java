package com.librashare.app.entities;

import com.librashare.app.dtos.BookDto;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.Type;

import javax.persistence.*;
import java.math.BigInteger;
import java.util.List;


@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class Book {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long bookId;
    private String title;
    @Column(columnDefinition = "TEXT")
    private String description;
    private String image;
    private String author;
    private Long isbn;
    @Type(type = "com.librashare.app.entities.CustomStringArrayType")
    @Column(columnDefinition = "text[]")
    private List<String> genre;


    public Book(BookDto bookDto) {

        if (bookDto.getTitle() != null) {
            this.title = bookDto.getTitle();
        }
        if (bookDto.getDescription() != null) {
            this.description = bookDto.getDescription();
        }
        if (bookDto.getImage() != null) {
            this.image = bookDto.getImage();
        }
        if (bookDto.getAuthor() != null) {
            this.author = bookDto.getAuthor();
        }
        if (bookDto.getIsbn() != null) {
            this.isbn = bookDto.getIsbn();
        }
        if (bookDto.getGenre() != null) {
            this.genre = bookDto.getGenre();
        }

    }
}
