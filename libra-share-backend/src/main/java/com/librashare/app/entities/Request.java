package com.librashare.app.entities;

import com.librashare.app.dtos.RequestDto;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.Date;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class Request {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long requestId;
    private String status;
    private Boolean isSuccess;
    private Date lastModified;

    @OneToOne(fetch = FetchType.LAZY)

    @JoinColumn(name = "userCopyId", referencedColumnName = "userCopyId")

    private UserCopy userCopy;

    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "requesterId", referencedColumnName = "userId")
    private User requesterId;

    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "exchangerId", referencedColumnName = "userId")
    private User exchangerId;

    public Request(RequestDto requestDto) {
        if (requestDto.getStatus() != null) {
            this.status = requestDto.getStatus();
        }
        if (requestDto.getIsSuccess() != null) {
            this.isSuccess = requestDto.getIsSuccess();
        }
        if (requestDto.getLastModified() != null) {
            this.lastModified = requestDto.getLastModified();
        }
    }
}
