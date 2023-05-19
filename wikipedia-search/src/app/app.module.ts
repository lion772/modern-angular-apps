import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SearchBarModule } from './search-bar/search-bar-module/search-bar.module';
import { PageListModule } from './page-list/page-list-module/page-list.module';

@NgModule({
  declarations: [AppComponent, HomeComponent],
  imports: [BrowserModule, SearchBarModule, PageListModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
