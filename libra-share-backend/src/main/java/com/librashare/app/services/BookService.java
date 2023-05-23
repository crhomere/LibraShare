package com.librashare.app.services;

import java.util.List;
import java.util.Optional;
import com.librashare.app.dtos.BookDto;

public interface BookService {

    Optional<BookDto> getBookById(Long bookId);

    List<BookDto> getAllBooks();

    void addBook(BookDto bookDto);

    void deleteBookById(Long bookId);

    void updateBookById(BookDto bookDto);

    void checkoutBook(Long bookId);

    void returnBook(Long bookId);

}