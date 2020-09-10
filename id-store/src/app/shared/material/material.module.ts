import { NgModule } from '@angular/core';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  exports: [ MatToolbarModule, MatMenuModule, MatButtonModule ]
})
export class ShMaterialModule { }
