import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { SignInView } from './views/sign-in/sign-in.view';
import { RegisterView } from './views/register/register.view';


@NgModule({
  declarations: [SignInView, RegisterView],
  imports: [
    CommonModule,
    AuthRoutingModule
  ]
})
export class AuthModule { }
