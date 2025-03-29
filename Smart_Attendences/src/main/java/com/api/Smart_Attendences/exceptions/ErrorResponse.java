package com.api.Smart_Attendences.exceptions;

public class ErrorResponse {
    private String message;
    private int statusCode;
    private String path;

    // Constructor
    public ErrorResponse(String message, int statusCode, String path) {
        this.message = message;
        this.statusCode = statusCode;
        this.path = path;
    }

    // Getters and Setters
    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public int getStatusCode() {
        return statusCode;
    }

    public void setStatusCode(int statusCode) {
        this.statusCode = statusCode;
    }

    public String getPath() {
        return path;
    }

    public void setPath(String path) {
        this.path = path;
    }
}
