import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { ShMaterialModule } from '../material/material.module';
import { InputFileComponent } from './input-file/input-file.component';
import { ImgPreviewComponent } from './img-preview/img-preview.component';


@NgModule({
  declarations: [],
  imports: [
    ShMaterialModule
  ],
  exports: [ ShMaterialModule ]
})
export class ShComponentsModule { }
