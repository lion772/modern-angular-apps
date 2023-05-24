import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CardFormComponent } from './card-form/card-form.component';
import { InputComponent } from './shared/input/input.component';
import { NgxMaskDirective, NgxMaskPipe, provideNgxMask } from 'ngx-mask';

@NgModule({
  declarations: [AppComponent, CardFormComponent, InputComponent],
  imports: [BrowserModule, ReactiveFormsModule, NgxMaskDirective, NgxMaskPipe],
  providers: [provideNgxMask()],
  bootstrap: [AppComponent],
})
export class AppModule {}
