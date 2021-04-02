import { Injectable } from '@angular/core';
import {CanActivate, Router} from '@angular/router';
import {ConfigurationDataService} from '../services/configuration-data/configuration-data.service';
import {ConfigurationModel} from '../models/configuration-model';
import {relativeToRootDirs} from '@angular/compiler-cli/src/transformers/util';

@Injectable({
  providedIn: 'root'
})
export class ConfigurationGuardService implements CanActivate{

  constructor(
    private configurationDataService: ConfigurationDataService,
    private router: Router
  ) { }

  canActivate(): any {
    const configurationId = localStorage.getItem('configuration');
    if (configurationId) {
      return true;
    } else {
      this.router.navigate(['/notes']);
      return false;
    }
  }

}
