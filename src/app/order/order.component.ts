import { Component,OnInit} from '@angular/core';
import { RecordService } from '../record.service';

@Component({
  selector: 'app-order',
  template: `
  <div class="med">
  <h1>Search Medicine</h1>
  <input type="NAME" placeholder="NAME"[(ngModel)]='a'><br><br>
  <input type="QUANTITY" placeholder="QUANTITY"[(ngModel)]='b'><br><br>
  <input type="button" value="check" (click)="check()" >
  <h2>{{msg}}</h2>
  <h2>{{msg1}}</h2>
  </div>
  `,
  styles: [`.med{
    padding:2px;
    background-color: bisque;
    color:black;
    text-align: center;
    font-size: large;
    width:100%;
    
    height:100%;
  }
  `
  ]
})
export class OrderComponent {

  list!:any[];
  msg!:string;
  msg1!:string;
  a!:string;
  b!:number;
  i!:number;
  dis!:string;
  amt!:number;
  quant!:number;
  constructor(private recordlist:RecordService) 
  {
      
  }
  ngOnInit(){
    this.list=this.recordlist.getdata();
  }
  check(){
      
    for(this.i=0;this.i<3;this.i++)
    {
        if(this.list[this.i].name == this.a && this.list[this.i].quant >= this.b)
        {
             this.msg="Available!";
             this.amt=this.list[this.i].price * this.b;
             this.msg1="total amount is: "+this.amt;
             break;
        }  
        else
        { 
          if(this.list[this.i].name != this.a)
          {
            this.msg="Unavailable";
          }
          else if(this.list[this.i].quant < this.b)
          {
            this.msg="Quantity exceeds!";
            this.msg1="Available quantity is: "+this.list[this.i].quant;
          }
           
        }
             

    }
}
  

  
}
