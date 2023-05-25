package com.librashare.app.controllers;
import com.librashare.app.dtos.BookDto;
import com.librashare.app.services.BookServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;
import java.util.Optional;


@RestController
@RequestMapping("/books")
public class BookController {

    @Autowired
    private BookServiceImpl bookServiceImpl;

    @GetMapping("/{bookId}")
    public Optional<BookDto> getBookById(@PathVariable Long bookId) {
        return bookServiceImpl.getBookById(bookId);
    }

    @GetMapping("/all")
    public List<BookDto> getAllBooks() {
        return bookServiceImpl.getAllBooks();
    }

    @PostMapping("/{userId}/add")
    public String addBook(@PathVariable Long userId, @RequestBody BookDto bookDto) {
        return bookServiceImpl.addBook(bookDto, userId);
    }

    @DeleteMapping("/{userId}/{bookId}")
    public String deleteBook(@PathVariable Long userId, @PathVariable Long bookId) {
        return bookServiceImpl.deleteBookById(userId, bookId);
    }

    @PutMapping("/{bookId}")
    public void updateBook(@PathVariable Long bookId, @RequestBody BookDto bookDto) {
        bookDto.setBookId(bookId);
        bookServiceImpl.updateBookById(bookDto);
    }
}
