import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductComponent } from './product/product.component';
import { BannerComponent } from './banner/banner.component';
import { MaterialModule } from '../material/material.module';
import { ImgPreviewModule } from 'src/app/shared/components/img-preview/img-preview.module';

const COMPONENTS = [
  ProductComponent, BannerComponent
]

@NgModule({
  declarations: [...COMPONENTS],
  exports: [...COMPONENTS],
  imports: [
    CommonModule,
    MaterialModule,
    ImgPreviewModule
  ]
})
export class ComponentsModule { }
