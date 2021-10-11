import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'; //to deal with rest calls
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TruncatePipe } from './pipes/truncate.pipe';
import { UserComponent } from './components/user/user.component';
import { SecondComponent } from './components/second/second.component';
import { FirstComponent } from './components/first/first.component';
import { ThirdComponent } from './components/third/third.component';
import { FourthComponent } from './components/fourth/fourth.component';


@NgModule({
  declarations: [
    AppComponent,
    TruncatePipe,
    UserComponent,
    SecondComponent,
    FirstComponent,
    ThirdComponent,
    FourthComponent
  ],
  imports: [ 
    BrowserModule,
    AppRoutingModule,
    FormsModule,    //when dealing with input / output  -->[(ngModule)]
    HttpClientModule   //to deal with rest calls,
  ],
  providers: [ //where all services go
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
