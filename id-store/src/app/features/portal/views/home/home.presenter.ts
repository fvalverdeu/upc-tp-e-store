import { Injectable } from '@angular/core';
import { ProductsHttp } from 'src/app/shared/http/products/products.http';
import { IProduct } from 'src/app/shared/interfaces/product.interface';

@Injectable()
export class HomePresenter {

  products: IProduct[];

  constructor(private productHttp: ProductsHttp) {}

  getProducts(): void {
    this.productHttp.getAll().subscribe(res => {
      this.products = res;
      console.log(this.products);
    });
  }
}
