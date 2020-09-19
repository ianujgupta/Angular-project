import { Component, OnInit } from '@angular/core';
import {Customer} from '../model class/customer';
import { CustomerService } from '../service/customerservice';


@Component({
  selector: 'customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css']
})
export class CustomerDetailsComponent {
  customerService: CustomerService;
  
  constructor(customerService:CustomerService) { 
    this.customerService=customerService;
  }
customer :Customer;

findCustomer(form:any){
  let data = form.value;
  let id = data.customerId;
  this.customer= this.customerService.findCustomerById(id);
  console.log("inside findCustomer")
}


}
