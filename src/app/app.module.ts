import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { GreetingMessageComponent } from './greeting-message/greeting-message.component';
import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent,
    GreetingMessageComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
