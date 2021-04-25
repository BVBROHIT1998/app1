import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';


@Component({
  selector: 'app-root',
  template: 
  `
  <div class="stud">
  <h1>LOGIN PAGE</h1>
  <input type="USERNAME" placeholder="USERNAME"[(ngModel)]='a'><br><br>
  <input type="PASSWORD" placeholder="PASSWORD"[(ngModel)]='b'><br><br>
  <input type="button" value="CHECK" (click)="check()" ><br><br>
  <h2>  {{msg}} </h2>
  </div>`,
  styles: [`.stud{
    background-color: bisque;
    color:black;
    text-align: center;
    font-size: large;
    width:100%;
    float:left;
    height:100%;;
}`]
})
export class LoginComponent {
  title = 'app';
  list:any[];
  i!:number;
  a!:string;
  b!:string;
  msg!:string;
  //username:string[];
  //password:string[];
  
  constructor(private router:Router)
  {
      this.list=[{
             username:"CSE",
             password:"cse123"
      },
    {
        username:"ECE",
        password:"ece123"
    },
{
    username:"EEE",
    password:"eee123"
}]
     
  }
  check(){
      
    for(this.i=0;this.i<3;this.i++)
    {
        if(this.list[this.i].username == this.a && this.list[this.i].password == this.b )
        {
             alert("Login Successful!");
             this.router.navigateByUrl('/order');
             break;
        }  
        else
             this.msg="Login Unsuccessful!";

    }
}
  
}
