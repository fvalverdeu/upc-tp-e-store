import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { MakerHttpModule } from './maker.module';
import { IMaker } from '../../interfaces/maker.interface';

@Injectable({
  providedIn: MakerHttpModule
})
export class MakerHttp {

  api = `${environment.api}/fabricante`;

  constructor(private http: HttpClient) {}

  getAll(): Observable<IMaker> {
    return this.http.get<IMaker>(this.api);
  }

}
