package com.dxctraining.customer_management.service;

import java.util.List;

import com.dxctraining.customer_management.entities.Customer;

public interface ICustomerService {

	Customer findById(int id);

	Customer save(Customer customer);

	void remove(int id);

	List<Customer> allCustomers();

}
