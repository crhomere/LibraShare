package com.librashare.app.services;
import com.librashare.app.dtos.BookDto;
import java.util.List;
import java.util.Optional;

public interface BookService {

    Optional<BookDto> getBookById(Long bookId);

    List<BookDto> getAllBooks();

    String addBook(BookDto bookDto);

    void deleteBookById(Long bookId);

    String updateBookById(BookDto bookDto);

//    void checkoutBook(Long bookId);
//
//    void returnBook(Long bookId);


}