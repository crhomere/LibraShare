package com.librashare.app.dtos;

import com.librashare.app.entities.Request;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;
import java.util.Date;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class RequestDto implements Serializable {
    private Long requestId;
    private String status;
    private Boolean isSuccess;
    private Date lastModified;

    public RequestDto(Request request) {
        if (request.getRequestId() != null) {
            this.requestId = request.getRequestId();
        }
        if (request.getStatus() != null) {
            this.status = request.getStatus();
        }
        if (request.getIsSuccess() != null) {
            this.isSuccess = request.getIsSuccess();
        }
        if (request.getLastModified() != null) {
            this.lastModified = request.getLastModified();
        }
    }
}
