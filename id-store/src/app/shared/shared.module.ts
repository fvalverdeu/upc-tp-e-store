import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShComponentsModule } from './components/components.module';



@NgModule({
  imports: [ ShComponentsModule ],
  exports: [ ShComponentsModule ]
})
export class SharedModule { }
