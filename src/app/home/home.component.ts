import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
  
    <img class="med" src="https://entrepreneursbreak.com/wp-content/uploads/2020/08/117996776_2388574928117041_6883767130038039567_n.jpg">
  
  `,
  styles: [`.med{
    
    width:100%;
    
    height:680px;
}`]
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
