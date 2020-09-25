import { NgModule } from '@angular/core';
import { InputFileComponent } from './input-file.component';
import { ShMaterialModule } from '../../material/material.module';

@NgModule({
  declarations: [ InputFileComponent ],
  exports: [ InputFileComponent ],
  imports: [ ShMaterialModule ]
})
export class InputFileModule {}

