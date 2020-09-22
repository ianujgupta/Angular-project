package com.dxctraining.customer_management.exceptions;

public class InvalidArgumentException extends RuntimeException{

    public InvalidArgumentException(String msg){
        super(msg);
    }
}
