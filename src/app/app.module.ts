import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms'
import { AppRoutingModule,routingcomponent } from './app-routing.module';
import { AppComponent } from './app.component';
import {RecordService} from './record.service';



@NgModule({
  declarations: [
    AppComponent,
    routingcomponent,
   
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [RecordService],
  bootstrap: [AppComponent]
})
export class AppModule { }
