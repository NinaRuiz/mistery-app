import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NotesRoutingModule } from './notes-routing.module';
import { MainConfigurationViewComponent } from './main-configuration-view/main-configuration-view.component';


@NgModule({
  declarations: [MainConfigurationViewComponent],
  imports: [
    CommonModule,
    NotesRoutingModule
  ]
})
export class NotesModule { }
