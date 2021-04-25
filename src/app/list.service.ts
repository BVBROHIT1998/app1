export class SeriveComponent{
    list:any[] | undefined;
  constructor()
  {
      this.list=[{
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