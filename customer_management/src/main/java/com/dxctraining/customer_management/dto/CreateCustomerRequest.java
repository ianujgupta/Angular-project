package com.dxctraining.customer_management.dto;

public class CreateCustomerRequest {

    private String name;

    private double balance;


    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public double getBalance() {
        return balance;
    }

    public void setBalance(double balance) {
        this.balance = balance;
    }

}
