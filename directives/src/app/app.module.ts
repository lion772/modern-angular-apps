import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CardsComponent } from './components/cards/cards.component';
import { HttpClientModule } from '@angular/common/http';
import { ClassDirective } from './directives/class.directive';
import { TimesDirective } from './directives/times.directive';

@NgModule({
  declarations: [AppComponent, CardsComponent, ClassDirective, TimesDirective],
  imports: [BrowserModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
