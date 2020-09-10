import { Injectable } from '@angular/core';
import { HttpModule } from '../../../portal/commons/http/http.module';

import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../../environments/environment';
import { ISignInFormData, ISignInResponse } from '../../interfaces/sign-in.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: HttpModule
})
export class AuthHttp {
  api: string;
  constructor(private http: HttpClient) {
    this.api = environment.api;
  }

  signIn(body: ISignInFormData): Observable<ISignInResponse> {
    return this.http.post<ISignInResponse>(`${this.api}/auth/sign-in`, body);
  }

}
