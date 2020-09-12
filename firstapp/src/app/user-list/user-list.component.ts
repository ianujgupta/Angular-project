import { Component, OnInit } from '@angular/core';
import {SubString} from '../substring/substring'
import {User} from '../model/user';
  import { from } from 'rxjs';
import { getCurrencySymbol } from '@angular/common';
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  users:User[]=[
    new User("dharma",21,2222),
    new User("anuj",19,33333),
    new User("prakash",21,33333)
  ];
// ngStyle: 
  // eligibleColor:string= "green";
  // notEligibleColor:string= "red";

  isEligible(age:number):boolean{
    return age>=21;
  }
}
