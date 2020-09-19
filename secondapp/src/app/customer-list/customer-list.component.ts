import { Component } from '@angular/core';
import {Customer} from '../model class/customer';
import { CustomerService } from '../service/customerservice';
@Component({
  selector: 'customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent  {

  customerService : CustomerService;
  customers: Customer[];
  constructor(customerService:CustomerService) {
    this.customerService=customerService;
    this.customers = customerService.allCustomers();
   }
   removeCustomer(id:number){
    this.customerService.removeCustomer(id);
     }
  
 

}
