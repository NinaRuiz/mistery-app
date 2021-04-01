import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { MainViewComponent } from './main-view/main-view.component';


@NgModule({
  declarations: [MainViewComponent],
  imports: [
    CommonModule,
    MainRoutingModule
  ]
})
export class MainModule { }
