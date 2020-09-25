import { Injectable } from '@angular/core';
import { ProductsHttpModule } from './products.module';
import { environment } from '../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IProduct } from '../../interfaces/product.interface';

@Injectable({
  providedIn: ProductsHttpModule
})
export class ProductsHttp {
  api = `${environment.api}/producto`;

  constructor(private http: HttpClient) { }

  getAll(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(this.api);
  }
}
