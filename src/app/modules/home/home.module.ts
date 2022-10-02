import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { homeRoutingModule } from './home-routing.module';
import { MapComponent } from './map/map.component';

import { MatSidenavModule } from '@angular/material/sidenav';

@NgModule({
  declarations: [HomeComponent, MapComponent],
  imports: [CommonModule, homeRoutingModule, MatSidenavModule],
})
export class HomeModule {}
