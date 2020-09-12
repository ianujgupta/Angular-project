import { Component } from '@angular/core';
import { Customer } from '../model class/customer';

@Component({
  selector: 'add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})
export class AddCustomerComponent  {

  constructor() { }

customer:Customer=undefined;
 
addCustomer(form:any){
  let data=form.value;
  let name = data.name;
  let balance = data.balance;
  this.customer= new Customer(name,balance);
  console.log("customer added")
}
}