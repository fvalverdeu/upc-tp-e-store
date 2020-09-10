import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { ShMaterialModule } from '../material/material.module';


@NgModule({
  declarations: [HeaderComponent],
  imports: [
    ShMaterialModule
  ],
  exports: [ HeaderComponent, ShMaterialModule ]
})
export class ShComponentsModule { }
