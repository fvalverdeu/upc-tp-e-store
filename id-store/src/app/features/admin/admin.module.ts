import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { DashboardView } from './views/dashboard/dashboard.view';
import { ProductCreateView } from './views/product-create/product-create.view';
import { ProductUpdateView } from './views/product-update/product-update.view';
import { ProductsView } from './views/products/products.view';
import { AdminComponent } from './admin.component';
import { AdminCommonsModule } from './commons/commons.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { LoadingModule } from '../../shared/components/loading/loading.module';
import { ProductsHttpModule } from 'src/app/shared/http/products/products.module';

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
    AdminCommonsModule,
    SharedModule,
    LoadingModule,
    ProductsHttpModule
  ]
})
export class AdminModule { }
