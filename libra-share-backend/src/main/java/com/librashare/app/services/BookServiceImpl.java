package com.librashare.app.services;

import com.librashare.app.dtos.BookDto;
import com.librashare.app.dtos.UserBookDto;
import com.librashare.app.dtos.UserCopyDto;
import com.librashare.app.dtos.UserDto;
import com.librashare.app.entities.Book;
import com.librashare.app.entities.User;
import com.librashare.app.entities.UserCopy;
import com.librashare.app.repositories.BookRepository;
import com.librashare.app.repositories.UserCopyRepository;
import com.librashare.app.repositories.UserRepository;
import org.json.JSONArray;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;
import java.time.LocalDate;
import java.util.*;
import java.util.stream.Collectors;


@Service
public class BookServiceImpl {
    @Autowired
    private BookRepository bookRepository;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private UserCopyRepository userCopyRepository;

    @Autowired
    private RatingService ratingService;

    @Transactional
    public Optional<BookDto> getBookById(Long bookId) {
        Optional<Book> bookOptional = bookRepository.findById(bookId);
        if (bookOptional.isPresent()) {
            Book book = bookOptional.get();
            BookDto bookDto = new BookDto(book);
            bookDto.setRating(ratingService.getAllRatingValueByBook(bookId));
            return Optional.of(bookDto);
        } else {
            return Optional.empty();
        }
    }


    @Transactional
    public List<BookDto> getAllBooks() {
        List<Book> books = bookRepository.findAll();
        List<BookDto> bookDtos = new ArrayList<>();
        for (Book book : books) {
            BookDto bookDto = new BookDto(book);
            bookDto.setRating(ratingService.getAllRatingValueByBook(bookDto.getBookId()));
            bookDtos.add(bookDto);
        }
        return bookDtos;
    }


    @Transactional
    public String addBook(BookDto bookDto, Long userId) {

        Optional<Book> bookOptional = bookRepository.findByIsbn(bookDto.getIsbn());
        Optional<User> userOptional = userRepository.findById(userId);
        Long savedBookId = bookOptional.map(book1 -> book1.getBookId()).orElse(0L);
        Optional<UserCopy> userCopyOptional = userCopyRepository.findByUserIdAndBookId(userId, savedBookId);

        if (userCopyOptional.isPresent()) {
            return "This book is already present. Please create a new book ";

        } else {
            HttpClient httpClient = HttpClient.newHttpClient();
            HttpRequest request = HttpRequest.newBuilder()
                    .uri(URI.create("https://openlibrary.org/api/volumes/brief/isbn/" + bookDto.getIsbn() + ".json"))
                    .build();
            try {

                HttpResponse<String> response = httpClient.send(request, HttpResponse.BodyHandlers.ofString());
                String responseBody = response.body();
                JSONObject jsonObject = new JSONObject(responseBody);
                JSONObject recordsObject = jsonObject.getJSONObject("records");
                Iterator<String> keys = recordsObject.keys();
                while (keys.hasNext()) {
                    String key = keys.next();
                    JSONObject bookObject = recordsObject.getJSONObject(key);
                    JSONObject bookDataObject = bookObject.getJSONObject("data");
                    JSONObject coverObject = bookDataObject.getJSONObject("cover");
                    String image = coverObject.optString("large", "data:image/png;base64,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");
                    JSONObject bookDetailsObject = bookObject.getJSONObject("details");
                    JSONObject detailsObject = bookDetailsObject.getJSONObject("details");
                    String description = detailsObject.optString("description", "N/A");
                    String[] subjects;
                    try {
                        JSONArray subjectsArray = detailsObject.getJSONArray("subjects");
                        subjects = new String[subjectsArray.length()];

                        for (int i = 0; i < subjectsArray.length(); i++) {
                            subjects[i] = subjectsArray.getString(i);
                        }
                    } catch (Exception e) {
                        System.out.println(e.getMessage());
                        subjects = new String[]{"No object"};
                    }

                    JSONArray authorsArray = detailsObject.getJSONArray("authors");
                    JSONObject authorObject = authorsArray.getJSONObject(0);
                    String authorName = authorObject.optString("name", "N/A");
                    String title = detailsObject.optString("title", "N/A");
                    bookDto.setTitle(title);
                    bookDto.setDescription(description);
                    bookDto.setImage(image);
                    bookDto.setAuthor(authorName);
                    bookDto.setGenre(subjects);
                    break;
                }
                Book book = new Book(bookDto);
                Book savedBook = bookRepository.saveAndFlush(book);
                Long bookId = savedBook.getBookId();
                createUserCopy(userId, bookId);
                return "Successfully added book";
            } catch (Exception e) {
                return "Error while saving book. Please enter valid ISBN";
            }
        }
    }


    @Transactional
    public String deleteBookById(Long userId, Long bookId) {
        Optional<Book> bookOptional = bookRepository.findById(bookId);
        if (bookOptional.isPresent()) {
            Book book = bookOptional.get();
//            bookRepository.delete(book);
            deleteUserCopy(userId, bookId);
            return "Successfully deleted book";
        } else {
            return "Book not found";
        }
    }


    @Transactional
    public String updateBookById(BookDto bookDto) {
        Optional<Book> bookOptional = bookRepository.findById(bookDto.getBookId());
        if (bookOptional.isPresent()) {
            Book book = bookOptional.get();
//            if (bookDto.getTitle() != null) {
//                book.setTitle(bookDto.getTitle());
//            }
            if (bookDto.getDescription() != null) {
                book.setDescription(bookDto.getDescription());
            }
//            if (bookDto.getImage() != null) {
//                book.setImage(bookDto.getImage());
//            }
            if (bookDto.getAuthor() != null) {
                book.setAuthor(bookDto.getAuthor());
            }
//            if (bookDto.getIsbn() != null) {
//                book.setIsbn(bookDto.getIsbn());
//            }
            if (bookDto.getGenre() != null) {
                book.setGenre(bookDto.getGenre());
            }
            bookRepository.saveAndFlush(book);
            return "Successfully Updated Book";
        } else {
            return "Book not found with id: " + bookDto.getBookId();
        }
    }


    @Transactional
    public void createUserCopy(Long userId, Long bookId) {
        User user = userRepository.findById(userId).orElse(null);
        Book book = bookRepository.findById(bookId).orElse(null);
        LocalDate lastExchangedDate = LocalDate.of(1900, 1, 1);
        Boolean exchangeReady = true;

        if (user != null && book != null) {
            UserCopyDto userCopyDto = new UserCopyDto();
            userCopyDto.setExchangeReady(exchangeReady);
            userCopyDto.setLastExchangedDate(lastExchangedDate);
            UserCopy userCopy = new UserCopy(userCopyDto);
            userCopy.setUserCopyUser(user);
            userCopy.setUserCopyBook(book);

            userCopyRepository.saveAndFlush(userCopy);
        } else {
            throw new RuntimeException("Error creating user copy");
        }
    }

    @Transactional
    public void deleteUserCopy(Long userId, Long bookId) {
        Optional<UserCopy> userCopyOptional = userCopyRepository.findByUserIdAndBookId(userId, bookId);
        if (userCopyOptional.isPresent()) {
            UserCopy userCopy = userCopyOptional.get();
            userCopyRepository.delete(userCopy);
        } else {
            throw new RuntimeException("user copy not found");
        }

    }

//    public List<UserBookDto> getAllBookByName(BookDto bookDto) {
//        if (bookDto.getTitle() != null && !bookDto.getTitle().isEmpty()) {
//            List<UserCopy> userCopies = userCopyRepository.findAllByUserCopyBookTitle(bookDto.getTitle());
//            return userCopies.stream()
//                    .map(userCopy -> new UserBookDto(
//                            new UserDto(userCopy.getUserCopyUser()),
//                            new BookDto(userCopy.getUserCopyBook()),
//                            userCopy.getExchangeReady(),
//                            userCopy.getLastExchangedDate()
//                    ))
//                    .collect(Collectors.toList());
//        }
//        return Collections.emptyList();
//
//    }

    public List<UserBookDto> getAllBookByName(BookDto bookDto) {
        if (bookDto.getTitle() != null && !bookDto.getTitle().isEmpty()) {
            List<UserCopy> userCopies = userCopyRepository.findAllByUserCopyBookTitle(bookDto.getTitle());
            return userCopies.stream()
                    .map(userCopy -> {
                        BookDto book = new BookDto(userCopy.getUserCopyBook());
                        book.setRating(ratingService.getAllRatingValueByBook(book.getBookId()));
                        return new UserBookDto(
                                new UserDto(userCopy.getUserCopyUser()),
                                book,
                                userCopy.getExchangeReady(),
                                userCopy.getLastExchangedDate()
                        );
                    })
                    .collect(Collectors.toList());
        }
        return Collections.emptyList();
    }


    public List<UserBookDto> getAllBookByIsbn(BookDto bookDto) {
        if (bookDto.getIsbn() != null && !bookDto.getIsbn().isEmpty()) {
            List<UserCopy> userCopies = userCopyRepository.findAllByUserCopyBookIsbn(bookDto.getIsbn());
            return userCopies.stream()
                    .map(userCopy -> new UserBookDto(
                            new UserDto(userCopy.getUserCopyUser()),
                            new BookDto(userCopy.getUserCopyBook()),
                            userCopy.getExchangeReady(),
                            userCopy.getLastExchangedDate()
                    ))
                    .collect(Collectors.toList());
        }
        return Collections.emptyList();
    }

    public List<UserBookDto> getAllBookByZipcode(String zipcode) {
        if (zipcode != null && !zipcode.isEmpty()) {
            List<UserCopy> userCopies = userCopyRepository.findAllByUserCopyUserZipcode(zipcode);
            return userCopies.stream()
                    .map(userCopy -> new UserBookDto(
                            new UserDto(userCopy.getUserCopyUser()),
                            new BookDto(userCopy.getUserCopyBook()),
                            userCopy.getExchangeReady(),
                            userCopy.getLastExchangedDate()
                    ))
                    .collect(Collectors.toList());
        }
        return Collections.emptyList();
    }

    public List<UserBookDto> getAllBookByUser(Long userId) {
        if (userId != null && userId > 0) {
            List<UserCopy> userCopies = userCopyRepository.findAllByUserCopyUserUserId(userId);
            List<UserBookDto> userBookDtos = new ArrayList<>();
            for (UserCopy userCopy : userCopies) {
                User user = userCopy.getUserCopyUser();
                Book book = userCopy.getUserCopyBook();
                UserDto userDto = new UserDto(user);
                BookDto bookDto = new BookDto(book);
                bookDto.setRating(ratingService.getAllRatingValueByBook(book.getBookId()));
                userBookDtos.add(new UserBookDto(userDto, bookDto, userCopy.getExchangeReady(), userCopy.getLastExchangedDate()));
            }
            return userBookDtos;
        } else {
            return Collections.emptyList();
        }
    }
}