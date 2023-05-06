import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CardsComponent } from './components/cards/cards.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent, CardsComponent],
  imports: [BrowserModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
