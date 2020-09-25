import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin.component';
import { ProductCreateView } from './views/product-create/product-create.view';
import { ProductUpdateView } from './views/product-update/product-update.view';
import { ProductsView } from './views/products/products.view';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      { path: 'products', component: ProductsView },
      { path: 'products/create', component: ProductCreateView },
      { path: 'products/update/:productId', component: ProductUpdateView }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
