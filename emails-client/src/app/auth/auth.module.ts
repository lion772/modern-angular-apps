import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { SignoutComponent } from './signout/signout.component';

@NgModule({
  declarations: [SignupComponent, SigninComponent, SignoutComponent],
  imports: [CommonModule, AuthRoutingModule, SharedModule, ReactiveFormsModule],
  exports: []
})
export class AuthModule {}
