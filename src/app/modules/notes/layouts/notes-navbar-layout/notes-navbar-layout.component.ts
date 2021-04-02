import { Component, OnInit } from '@angular/core';
import {ConfigurationModel} from '../../models/configuration-model';
import {ConfigurationDataService} from '../../services/configuration-data/configuration-data.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-notes-navbar-layout',
  templateUrl: './notes-navbar-layout.component.html',
  styleUrls: ['./notes-navbar-layout.component.scss']
})
export class NotesNavbarLayoutComponent implements OnInit {

  configuration: ConfigurationModel;

  constructor(
    private configurationDataService: ConfigurationDataService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  checkConfiguration() {
    const configurationId = parseInt(localStorage.getItem('configuration'));
    this.configurationDataService.getConfiguration(configurationId).then(
      configuration => {
       this.configuration = configuration;
       if (this.configuration.securityLoginType === 'password') {
         this.router.navigate(['/notes/login']);
       }
    });
  }

}
