import { Component } from '@angular/core';
import {Customer} from '../model class/customer';
@Component({
  selector: 'customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent  {

  constructor() { }
  customers :Customer[] = [new Customer("Mohan",2000),
  new Customer("Sohan",3000),
  new Customer("Rohan",4000)]
 

}
