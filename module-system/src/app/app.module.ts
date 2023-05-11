import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CollectionsModule } from './collections/collections.module';
import { ModsModule } from './mods/mods.module';
import { ViewsModule } from './views/views.module';
import { NavbarComponent } from './navbar/navbar.component';
import { NotFoundComponent } from './not-found-component/not-found.component';
import { HomeComponent } from './home/home.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    NotFoundComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    CollectionsModule,
    ModsModule,
    ViewsModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
