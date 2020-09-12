import { Component } from '@angular/core';
import {User} from './model/user';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'firstapp';
  description='my new angular app';

  links=["https://www.w3schools.com/html",
         "https://www.w3schools.com/css",
         "https://www.w3schools.com/js" 
         ]
  imgPath=[ "https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Flag_of_India.svg/255px-Flag_of_India.svg.png"];
  
   users:User[] = [new User("Anuj",21,2222),
                    new User("Ankit",22,4444)];

 counter:number=0;
  increment(){
    this.counter++;
  }

  username:string="";

}



