import { Component} from '@angular/core';

@Component({
  selector: 'app-register',
  template: `
  <div class="stud">
  <form>
      <h1 font-size="large">REGISTER</h1>
      <h2>Enter your details</h2>
      Name:<input type="text" placeholder="NAME" value=""><br><br>
      Mobile: <input type="mobile" placeholder="mobile" value=""><br><br>
      E-mail:<input type="email" placeholder="email"><br><br>
      Username:<input type="USERNAME" placeholder="USERNAME"><br><br>
      Password:<input type="PASSWORD" placeholder="PASSWORD"><br><br>
      <input type="button" value="register" (click)="check()" ><br><br>
  <h2>{{msg}}</h2>
  </form>
</div>
  `,
  styles: [`.stud{
    background-color: bisque;
    color:black;
    text-align: center;
    font-size: large;
    width:100%;
    float:left;
    height:100%;
}`
  ]
})
export class RegisterComponent{

  constructor() { }
  msg!:string;
  check(){
this.msg="Registration successful!"
  }
}
