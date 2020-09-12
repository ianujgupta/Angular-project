
export class Customer{
    name:string;
    balance:number;
  
    constructor(name : string,balance:number){
      this.name=name;
      this.balance=balance;
    }
  
    getName():string{
      return this.name;
    }

    getBalance():number{
      return this.balance;
    }
  }