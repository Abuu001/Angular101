import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'; //to deal with rest calls
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TruncatePipe } from './pipes/truncate.pipe';


@NgModule({
  declarations: [
    AppComponent,
    TruncatePipe
  ],
  imports: [ 
    BrowserModule,
    AppRoutingModule,
    FormsModule,    //when dealing with input / output
    HttpClientModule   //to deal with rest calls
  ],
  providers: [ //where all services go
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
