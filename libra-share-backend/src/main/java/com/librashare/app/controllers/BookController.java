package com.librashare.app.controllers;

import com.librashare.app.dtos.BookDto;
import com.librashare.app.services.BookService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/books")
public class BookController {
    @Autowired
    private BookService bookService;

    // CRUD endpoints
    @GetMapping("/{bookId}")
    public Optional<BookDto> getBookById(@PathVariable Long bookId) {
        return bookService.getBookById(bookId);
    }

    @GetMapping("/all")
    public List<BookDto> getAllBooks() {
        return bookService.getAllBooks();
    }

    @PostMapping("/add")
    public String addBook(@RequestBody BookDto bookDto) {
        return bookService.addBook(bookDto);
    }

    @DeleteMapping("/{bookId}")
    public void deleteBook(@PathVariable Long bookId) {
        bookService.deleteBookById(bookId);
    }

    @PutMapping("/{bookId}")
    public void updateBook(@PathVariable Long bookId, @RequestBody BookDto bookDto) {
        bookDto.setBookId(bookId);
        bookService.updateBookById(bookDto);
    }
}
