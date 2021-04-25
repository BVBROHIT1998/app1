import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RecordService {

  constructor() { }
  getdata(){
    return[{
      name:"paracetamol",
      price:10,
      quant:10
  },
  {
  name:"dolo650",
  price:12,
  quant:20
  },
  {
  name:"streptomycin",
  price:20,
  quant:15
  }]
  }
  

}
