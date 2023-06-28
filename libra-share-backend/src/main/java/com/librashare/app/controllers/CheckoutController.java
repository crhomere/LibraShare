package com.librashare.app.controllers;
import com.librashare.app.dtos.BookDto;
import com.librashare.app.requests.BookCheckoutRequest;
import com.librashare.app.services.BookServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/checkout")
public class CheckoutController {

    @Autowired
    private BookServiceImpl bookServiceImpl;

    @PostMapping("/books/{bookId}")
    public String checkoutBook(@PathVariable Long bookId, @RequestBody BookCheckoutRequest checkoutRequest) {
        // Extract the bookId and userId from the checkoutRequest
        Long userId = checkoutRequest.getUserId();

        // Call the bookServiceImpl to handle the book checkout
        // String result = bookServiceImpl.checkoutBookById(userId, bookId);

        return " ";
    }
}

