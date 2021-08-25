import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from './components/loader/loader.component';
import { MapComponent } from './components/map/map.component';



@NgModule({
  declarations: [
    LoaderComponent,
    MapComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    LoaderComponent,
    MapComponent
  ]
})
export class SharedModule { }
