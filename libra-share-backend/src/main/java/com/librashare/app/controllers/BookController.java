package com.librashare.app.controllers;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.librashare.app.dtos.BookDto;
import com.librashare.app.services.BookService;

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
    public void addBook(@RequestBody BookDto bookDto) {
        bookService.addBook(bookDto);
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
