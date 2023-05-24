package com.librashare.app.entities;

import com.librashare.app.dtos.UserCopyDto;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.Date;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class UserCopy {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long userCopyId;

    private Date lastExchangedDate;
    private Boolean exchangeReady;

    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id", referencedColumnName = "userId")
    private User userCopyUser;
    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "book_id", referencedColumnName = "bookId")
    private Book userCopyBook;

    public UserCopy(UserCopyDto userCopyDto) {
        if (userCopyDto.getLastExchangedDate() != null) {
            this.lastExchangedDate = userCopyDto.getLastExchangedDate();
        }
        if (userCopyDto.getExchangeReady() != null) {
            this.exchangeReady = userCopyDto.getExchangeReady();
        }
    }
}
