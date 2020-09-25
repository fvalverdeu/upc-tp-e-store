import { NgModule } from '@angular/core';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  exports: [ MatToolbarModule, MatMenuModule, MatButtonModule, MatIconModule, MatButtonModule ]
})
export class ShMaterialModule { }
