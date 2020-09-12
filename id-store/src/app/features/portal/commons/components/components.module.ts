import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductComponent } from './product/product.component';
import { BannerComponent } from './banner/banner.component';
import { MaterialModule } from '../material/material.module';

const COMPONENTS = [
  ProductComponent, BannerComponent
]

@NgModule({
  declarations: [...COMPONENTS],
  exports: [...COMPONENTS],
  imports: [
    CommonModule,
    MaterialModule
  ]
})
export class ComponentsModule { }
