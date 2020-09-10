import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { ISignInFormData } from '../../../interfaces/sign-in.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  @Output() signIn: EventEmitter<ISignInFormData> = new EventEmitter<ISignInFormData>();
  formGroup: FormGroup;
  show: boolean;

  constructor(private formBuilder: FormBuilder, private router: Router) {
    this.formGroup = this.formBuilder.group({
      email: [ null, [Validators.required, Validators.email] ],
      password: [ null, Validators.required ]
    });
    this.show = false;
  }

  ngOnInit(): void {
  }

  send(): void {
    if (this.formGroup.valid) {
      this.signIn.emit(this.formGroup.value);
    }
  }

  mostrar_ocultar(): void {
    this.show = !this.show;
    console.log(this.show);
  }

  redirect(): void {
    sessionStorage.setItem('login', 'true');
    this.router.navigateByUrl('');
  }

}
