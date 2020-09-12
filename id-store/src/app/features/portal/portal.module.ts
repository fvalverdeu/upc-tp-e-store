import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PortalRoutingModule } from './portal-routing.module';
import { PortalComponent } from './portal.component';
import { HomeView } from './views/home/home.view';

import { SharedModule } from '../../shared/shared.module';
import { CommonsModule } from './commons/commons.module';
import { SearchView } from './views/search/search.view';
import { DetailView } from './views/detail/detail.view';


@NgModule({
  declarations: [PortalComponent, HomeView, SearchView, DetailView],
  imports: [
    CommonModule,
    PortalRoutingModule,
    SharedModule,
    CommonsModule
  ]
})
export class PortalModule { }
