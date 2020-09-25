import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { CategoryHttpModule } from './category.module';
import { ICategory } from '../../interfaces/category.interface';

@Injectable({
  providedIn: CategoryHttpModule
})
export class CategoryHttp {
  api = `${environment.api}/categoria`;

  constructor(private http: HttpClient) { }

  getAll(): Observable<ICategory> {
    return this.http.get<ICategory>(this.api);
  }
}
