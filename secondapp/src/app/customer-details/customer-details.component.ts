import { Component, OnInit } from '@angular/core';
import {Customer} from '../model class/customer';


@Component({
  selector: 'customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css']
})
export class CustomerDetailsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  customers :Customer[] = [new Customer("Mohan",2000),
  new Customer("Sohan",3000),
  new Customer("Rohan",4000)]


}
