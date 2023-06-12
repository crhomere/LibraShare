package com.librashare.app.dtos;


import java.time.LocalDateTime;

public class UserBookDto {
    private UserDto userDto;
    private BookDto bookDto;
    private Boolean exchangeReady;
    private LocalDateTime lastExchangedDate;

    public UserBookDto(UserDto userDto, BookDto bookDto, Boolean exchangeReady, LocalDateTime lastExchangedDate) {
        this.userDto = userDto;
        this.bookDto = bookDto;
        this.exchangeReady = exchangeReady;
        this.lastExchangedDate = lastExchangedDate;
    }

    public UserDto getUserDto() {
        return userDto;
    }

    public void setUserDto(UserDto userDto) {
        this.userDto = userDto;
    }

    public BookDto getBookDto() {
        return bookDto;
    }

    public void setBookDto(BookDto bookDto) {
        this.bookDto = bookDto;
    }

    public boolean isExchangeReady() {
        return exchangeReady;
    }

    public void setExchangeReady(boolean exchangeReady) {
        this.exchangeReady = exchangeReady;
    }
}