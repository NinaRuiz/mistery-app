import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NotesRoutingModule } from './notes-routing.module';
import { MainConfigurationViewComponent } from './views/main-configuration-view/main-configuration-view.component';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatButtonModule} from '@angular/material/button';
import {FormsModule} from '@angular/forms';
import { DashboardViewComponent } from './views/dashboard-view/dashboard-view.component';
import { NotesNavbarLayoutComponent } from './layouts/notes-navbar-layout/notes-navbar-layout.component';
import {MatToolbarModule} from '@angular/material/toolbar';


@NgModule({
  declarations: [MainConfigurationViewComponent, DashboardViewComponent, NotesNavbarLayoutComponent],
  imports: [
    CommonModule,
    NotesRoutingModule,
    MatCardModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatGridListModule,
    MatButtonModule,
    FormsModule,
    MatToolbarModule
  ]
})
export class NotesModule { }
