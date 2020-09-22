package com.dxctraining.customer_management.controllers;

import com.dxctraining.customer_management.dto.CreateCustomerRequest;
import com.dxctraining.customer_management.dto.CustomerDetails;
import com.dxctraining.customer_management.entities.Customer;
import com.dxctraining.customer_management.service.ICustomerService;
import com.dxctraining.customer_management.util.CustomerUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/customers")
public class UserRestController {

    @Autowired
    private ICustomerService customerService;

    @Autowired
    private CustomerUtil customerUtil;

  

    @PostMapping(value = "/add")
    @ResponseStatus(HttpStatus.CREATED)
    public CustomerDetails create(@RequestBody  CreateCustomerRequest requestData) {
        String name = requestData.getName();
        double balance = requestData.getBalance();
        Customer customer = new Customer(name,balance);
        customer = customerService.save(customer);
        CustomerDetails response = customerUtil.customerDto(customer);
        return response;
    }

    @GetMapping("/get/{id}")
    public CustomerDetails findEmployee(@PathVariable("id") int id) {
        Customer customer = customerService.findById(id);
        CustomerDetails response = customerUtil.customerDto(customer);
        return response;
    }


    @GetMapping
    public List<CustomerDetails> fetchAll() {
        List<Customer> list = customerService.allCustomers();
        List<CustomerDetails>response=new ArrayList<>();
        for (Customer customer:list){
            CustomerDetails dto= customerUtil.customerDto(customer);
            response.add(dto);
        }
        return response;
    }

}




