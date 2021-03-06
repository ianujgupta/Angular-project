import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import {Customer} from '../model class/customer';
import { CustomerService } from '../service/customerservice';
@Component({
  selector: 'customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent  {

  //customerService : CustomerService;

  customers: Customer[];

  constructor(private customerService:CustomerService){
    let observable:Observable<Customer[]>=customerService.getAllCustomers();
    observable.subscribe(
        customerArray=>{
          this.customers=customerArray;
        },
        error=>{
          console.log("inside customer list component"+error.message);
        }
      
    );
  }





/*
  // constructor(customerService:CustomerService) {
  //   this.customerService=customerService;
  //   this.customers = customerService.allCustomers();
  //  }
  constructor(private customerService:CustomerService) {
    this.customers = customerService.allCustomers();
   }
   removeCustomer(id:number){
    this.customerService.removeCustomer(id);
     }
 */ 
 

}
