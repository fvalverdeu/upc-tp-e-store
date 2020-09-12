import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material/material.module';
import { ComponentsModule } from './components/components.module';
import { HttpModule } from './http/http.module';



@NgModule({
  exports: [
    MaterialModule,
    ComponentsModule,
    HttpModule
  ]
})
export class AdminCommonsModule { }
