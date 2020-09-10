import { Injectable } from "@angular/core";
import { AuthHttp } from "../../commons/http/auth.http";
import { Router } from "@angular/router";
import { ISignInFormData } from "../../interfaces/sign-in.interface";

@Injectable()
export class AuthPresenter {
  constructor(private authHttp: AuthHttp, private router: Router) {}

  signIn(request: ISignInFormData) {
    this.authHttp.signIn(request).subscribe(res => {
      if (res) {
        this.router.navigateByUrl('portal')
      }
    })
  }
}
