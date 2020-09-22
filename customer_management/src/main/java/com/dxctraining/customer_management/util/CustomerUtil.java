package com.dxctraining.customer_management.util;

import org.springframework.stereotype.Component;

import com.dxctraining.customer_management.dto.CustomerDetails;
import com.dxctraining.customer_management.entities.Customer;

@Component
public class CustomerUtil {


    public CustomerDetails customerDto(Customer customer){
        CustomerDetails details=new CustomerDetails(customer.getId(),customer.getName(),customer.getBalance());
        return details;
    }

}
