import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { MainViewComponent } from './main-view/main-view.component';
import {MatCardModule} from '@angular/material/card';
import {MatListModule} from '@angular/material/list';


@NgModule({
  declarations: [MainViewComponent],
  imports: [
    CommonModule,
    MainRoutingModule,
    MatCardModule,
    MatListModule
  ]
})
export class MainModule { }
