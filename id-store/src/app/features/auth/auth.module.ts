import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { SignInView } from './views/sign-in/sign-in.view';
import { RegisterView } from './views/register/register.view';
import { CommonsModule } from './commons/commons.module';
import { AuthComponent } from './auth.component';


@NgModule({
  declarations: [SignInView, RegisterView, AuthComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    CommonsModule
  ]
})
export class AuthModule { }
