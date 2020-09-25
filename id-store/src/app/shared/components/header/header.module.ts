import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ShMaterialModule } from '../../material/material.module';
import { HeaderComponent } from './header.component';

@NgModule({
  declarations: [ HeaderComponent ],
  exports: [ HeaderComponent ],
  imports: [ ShMaterialModule, CommonModule ]
})
export class HeaderModule {}
