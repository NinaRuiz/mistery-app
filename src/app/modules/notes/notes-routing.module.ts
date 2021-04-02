import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FullLayoutComponent} from '../../shared/layouts/full-layout/full-layout.component';
import {MainConfigurationViewComponent} from './views/main-configuration-view/main-configuration-view.component';
import {DashboardViewComponent} from './views/dashboard-view/dashboard-view.component';
import {NotesNavbarLayoutComponent} from './layouts/notes-navbar-layout/notes-navbar-layout.component';
import {ConfigurationGuardService} from './authGuard/configuration-guard.service';

const routes: Routes = [
  {
    path: '',
    component: FullLayoutComponent,
    children: [
      {
        path: '',
        component: MainConfigurationViewComponent
      }
    ]
  },
  {
    path: '',
    component: NotesNavbarLayoutComponent,
    children: [
      {
        path: 'dashboard',
        canActivate: [ConfigurationGuardService],
        component: DashboardViewComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NotesRoutingModule { }
