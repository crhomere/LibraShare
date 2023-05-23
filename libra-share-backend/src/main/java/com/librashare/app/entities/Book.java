package com.librashare.app.entities;

import com.librashare.app.dtos.BookDto;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import javax.persistence.*;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class Book {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long bookId;
    @Column
    private String title;
    @Column(columnDefinition = "TEXT")
    private String description;
    @Column
    private String image;
    @Column
    private String author;
    @Column
    private Long isbn;
    @Column
    private String genre;


    public Book(BookDto bookDto) {
        if (bookDto.getBookId() != null) {
            this.bookId = bookDto.getBookId();
        }
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
