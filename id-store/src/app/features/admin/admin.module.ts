import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { DashboardView } from './views/dashboard/dashboard.view';
import { ProductCreateView } from './views/product-create/product-create.view';
import { ProductUpdateView } from './views/product-update/product-update.view';
import { ProductsView } from './views/products/products.view';
import { AdminComponent } from './admin.component';
import { AdminCommonsModule } from './commons/commons.module';

@NgModule({
  declarations: [
    DashboardView,
    ProductCreateView,
    ProductUpdateView,
    ProductsView,
    AdminComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    AdminCommonsModule
  ]
})
export class AdminModule { }
