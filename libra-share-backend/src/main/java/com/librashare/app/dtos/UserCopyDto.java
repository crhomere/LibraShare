package com.librashare.app.dtos;

import com.librashare.app.entities.UserCopy;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;
import java.time.LocalDateTime;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class UserCopyDto implements Serializable {
    private Long userCopyId;
    private LocalDateTime lastExchangedDate;
    private LocalDateTime expiresAt;
    private Boolean exchangeReady;

    public UserCopyDto(UserCopy userCopy) {
        if (userCopy.getUserCopyId() != null) {
            this.userCopyId = userCopy.getUserCopyId();
        }
        if (userCopy.getLastExchangedDate() != null) {
            this.lastExchangedDate = userCopy.getLastExchangedDate();
        }
        if (userCopy.getExpiresAt() != null) {
            this.expiresAt = userCopy.getExpiresAt();
        }
    }

}
