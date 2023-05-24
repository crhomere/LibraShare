package com.librashare.app.dtos;

import com.librashare.app.entities.Book;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


import java.io.Serializable;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class BookDto implements Serializable {
    private Long bookId;
    private String title;
    private String description;
    private String image;
    private String author;

    private String isbn;
    private String[] genre;


    public BookDto(Book book) {
        if (book.getBookId() != null) {
            this.bookId = book.getBookId();
        }
        if (book.getTitle() != null) {
            this.title = book.getTitle();
        }
        if (book.getDescription() != null) {
            this.description = book.getDescription();
        }
        if (book.getImage() != null) {
            this.image = book.getImage();
        }
        if (book.getAuthor() != null) {
            this.author = book.getAuthor();
        }
        if (book.getIsbn() != null) {
            this.isbn = book.getIsbn();
        }
        if (book.getGenre() != null) {
            this.genre = book.getGenre();
        }

    }
}
