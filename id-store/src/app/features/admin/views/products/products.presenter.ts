import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsHttp } from '../../../../shared/http/products/products.http';
import { Product } from '../../../../shared/models/product.model';
import { MatDialog } from '@angular/material/dialog';
import { LoadingComponent } from '../../../../shared/components/loading/loading.component';
import { finalize } from 'rxjs/operators';


@Injectable()
export class ProductsPresenter {
  products: Product[] = [];

  constructor(
    private productsHttp: ProductsHttp,
    private router: Router,
    private dialog: MatDialog
  ) {}

  load(): void {
    const loading = this.dialog.open(LoadingComponent, { disableClose: true, closeOnNavigation: false });
    this.productsHttp.getAll()
    .pipe(
      finalize(() => loading.close())
    )
    .subscribe(products => {
      this.products = products.map(item => new Product(item));
      console.log(this.products);
    });
  }

  remove(productId: string): void {
    console.log(productId);
  }

  goEditPage(productId: string): void {
    this.router.navigate([ '/admin/products/update', productId ]);
  }

}
