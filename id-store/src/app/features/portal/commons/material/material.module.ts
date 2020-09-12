import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatButtonToggleModule } from '@angular/material/button-toggle';

@NgModule({
  exports: [
    MatCardModule,
    MatButtonModule,
    MatGridListModule,
    MatButtonToggleModule
  ]
})
export class MaterialModule { }
