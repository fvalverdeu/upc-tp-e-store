import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material/material.module';
import { HttpModule } from './http/http.module';
import { ComponentsModule } from './components/components.module';

@NgModule({
  exports: [
    MaterialModule,
    HttpModule,
    ComponentsModule
  ]
})
export class CommonsModule { }
