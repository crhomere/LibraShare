package com.librashare.app.services;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import com.librashare.app.dtos.BookDto;
import com.librashare.app.entities.Book;
import com.librashare.app.repositories.BookRepository;

@Service
public class BookServiceImpl implements BookService {
    @Autowired
    private BookRepository bookRepository;

    @Override
    @Transactional
    public Optional<BookDto> getBookById(Long bookId) {
        Optional<Book> bookOptional = bookRepository.findById(bookId);
        if (bookOptional.isPresent()) {
            Book book = bookOptional.get();
            BookDto bookDto = new BookDto(book);
            return Optional.of(bookDto);
        } else {
            return Optional.empty();
        }
    }

    @Override
    @Transactional
    public List<BookDto> getAllBooks() {
        List<Book> books = bookRepository.findAll();
        List<BookDto> bookDtos = new ArrayList<>();
        for (Book book : books) {
            BookDto bookDto = new BookDto(book);
            bookDtos.add(bookDto);
        }
        return bookDtos;
    }

    @Override
    @Transactional
    public void addBook(BookDto bookDto) {
        Book book = new Book();
        book.setTitle(bookDto.getTitle());
        book.setDescription(bookDto.getDescription());
        book.setImage(bookDto.getImage());
        book.setAuthor(bookDto.getAuthor());
        book.setIsbn(bookDto.getIsbn());
        book.setGenre(bookDto.getGenre());
        bookRepository.saveAndFlush(book);
    }

    @Override
    @Transactional
    public void deleteBookById(Long bookId) {
        Optional<Book> bookOptional = bookRepository.findById(bookId);
        if (bookOptional.isPresent()) {
            Book book = bookOptional.get();
            bookRepository.delete(book);
        } else {
            throw new RuntimeException("Book not found with id: " + bookId);
        }
    }

    @Override
    @Transactional
    public void updateBookById(BookDto bookDto) {
        Optional<Book> bookOptional = bookRepository.findById(bookDto.getBookId());
        if (bookOptional.isPresent()) {
            Book book = bookOptional.get();
            book.setTitle(bookDto.getTitle());
            book.setDescription(bookDto.getDescription());
            book.setImage(bookDto.getImage());
            book.setAuthor(bookDto.getAuthor());
            book.setIsbn(bookDto.getIsbn());
            book.setGenre(bookDto.getGenre());
            bookRepository.saveAndFlush(book);
        } else {
            throw new RuntimeException("Book not found with id: " + bookDto.getBookId());
        }
    }

    @Override
    @Transactional
    public void checkoutBook(Long bookId) {
        Optional<Book> bookOptional = bookRepository.findById(bookId);
        if (bookOptional.isPresent()) {
            Book book = bookOptional.get();
            bookRepository.saveAndFlush(book);
        } else {
            throw new RuntimeException("Book not found with id: " + bookId);
        }
    }

    @Override
    @Transactional
    public void returnBook(Long bookId) {
        Optional<Book> bookOptional = bookRepository.findById(bookId);
        if (bookOptional.isPresent()) {
            Book book = bookOptional.get();
            bookRepository.saveAndFlush(book);
        } else {
            throw new RuntimeException("Book not found with id: " + bookId);
        }
    }
}
