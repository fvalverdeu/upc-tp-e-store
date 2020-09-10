import { NgModule } from '@angular/core';

import { ComponentsModule } from '../commons/components/components.module';
import { HttpModule } from '../commons/http/http.module';
import { MaterialModule } from '../commons/material/material.module';

@NgModule({
  exports: [
    ComponentsModule,
    HttpModule,
    MaterialModule,
  ]
})
export class CommonsModule { }
