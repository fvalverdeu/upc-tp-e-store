import { NgModule } from '@angular/core';
import { ShMaterialModule } from '../../material/material.module';
import { ImgPreviewComponent } from './img-preview.component';

@NgModule({
  declarations: [ ImgPreviewComponent ],
  exports: [ ImgPreviewComponent ],
  imports: [ ShMaterialModule ]
})

export class ImgPreviewModule {}
