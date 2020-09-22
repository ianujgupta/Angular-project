package com.dxctraining.customer_management.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.dxctraining.customer_management.entities.Customer;

public interface ICustomerDao extends JpaRepository<Customer, Integer> {

}
