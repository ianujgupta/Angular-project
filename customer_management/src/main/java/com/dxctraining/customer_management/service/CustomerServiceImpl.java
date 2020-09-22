package com.dxctraining.customer_management.service;

import com.dxctraining.customer_management.dao.ICustomerDao;
import com.dxctraining.customer_management.entities.Customer;
import com.dxctraining.customer_management.exceptions.CustomerNotFoundException;
import com.dxctraining.customer_management.exceptions.InvalidArgumentException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

// transactional will inform spring that it has to open transaction at every method in this class
@Transactional
@Service
public class CustomerServiceImpl implements ICustomerService {

	@Autowired
	private ICustomerDao dao;

	@Override
	public Customer findById(int id) {
		Optional<Customer> optional = dao.findById(id);
		if (!optional.isPresent()) {
			throw new CustomerNotFoundException("Customer not found for id=" + id);
		}
		return optional.get();
	}

	@Override
	public Customer save(Customer customer) {
		validate(customer);
		customer = dao.save(customer);
		return customer;
	}

	@Override
	public void remove(int id) {
		dao.deleteById(id);
	}

	public void validate(Object arg) {
		if (arg == null) {
			throw new InvalidArgumentException("argument is null");
		}
	}

	@Override
	public List<Customer> allCustomers() {
		List<Customer> customers = dao.findAll();
		return customers;
	}

}
