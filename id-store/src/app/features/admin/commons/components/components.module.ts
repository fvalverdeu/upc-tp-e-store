import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductFilterComponent } from './product/product-filter/product-filter.component';
import { ProductTableComponent } from './product/product-table/product-table.component';
import { ProductFormComponent } from './product/product-form/product-form.component';
import { ProductUpdateImgComponent } from './product/product-update-img/product-update-img.component';
import { MenuComponent } from './menu/menu.component';
import { MaterialModule } from '../material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ImgPreviewModule } from 'src/app/shared/components/img-preview/img-preview.module';
import { InputFileModule } from 'src/app/shared/components/input-file/input-file.module';

const COMPONENTS = [
  ProductFilterComponent,
  ProductTableComponent,
  ProductFormComponent,
  ProductUpdateImgComponent,
  MenuComponent
];

@NgModule({
  declarations: [...COMPONENTS],
  exports: [...COMPONENTS],
  imports: [
    MaterialModule,
    CommonModule,
    ReactiveFormsModule,
    ImgPreviewModule,
    InputFileModule
  ]
})
export class ComponentsModule { }
