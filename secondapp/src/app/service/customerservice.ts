import { Injectable } from '@angular/core';
import { Customer } from '../model class/customer';

@Injectable()
export class CustomerService{

 customers:Customer[]=[];
 generateId:number=1;
 
 generatedId():number{
    //this.generateId;
   return this.generateId++;
 }
 addCustomer(customer:Customer){
     let id = this.generatedId();
     customer.id = id;
     this.customers.push(customer);
 }

 allCustomers():Customer[]{
     return this.customers;
 }

 findCustomerById(id:number):Customer{
     for(let customer of this.customers){
        if(customer.id==id){
            return customer;
        }
     }
     return null;
 }

    removeCustomer(id:number){
        for(let i=0;i<this.customers.length;i++){
            let customer= this.customers[i];
            if(customer.id==id){
                this.customers.splice(i,1);
            }
    }
}
}
