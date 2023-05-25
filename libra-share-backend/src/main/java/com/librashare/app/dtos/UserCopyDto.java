package com.librashare.app.dtos;

import com.librashare.app.entities.UserCopy;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;
import java.time.LocalDate;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class UserCopyDto implements Serializable {
    private Long userCopyId;
    private LocalDate lastExchangedDate;
    private Boolean exchangeReady;

    public UserCopyDto(UserCopy userCopy) {
        if (userCopy.getUserCopyId() != null) {
            this.userCopyId = userCopy.getUserCopyId();
        }
        if (userCopy.getLastExchangedDate() != null) {
            this.lastExchangedDate = userCopy.getLastExchangedDate();
        }
        if (userCopy.getExchangeReady() != null) {
            this.exchangeReady = userCopy.getExchangeReady();
        }
    }

}
