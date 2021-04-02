import {Component, OnChanges, OnInit} from '@angular/core';
import {ConfigurationModel} from '../../models/configuration-model';
import {ConfigurationDataService} from '../../services/configuration-data/configuration-data.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-main-configuration-view',
  templateUrl: './main-configuration-view.component.html',
  styleUrls: ['./main-configuration-view.component.scss']
})
export class MainConfigurationViewComponent implements OnInit {

  configuration: ConfigurationModel;
  password: string;
  repeatPassword: string;

  encodeFrase: string;
  repeateEncodeFrase: string;

  constructor(
    private configurationDataService: ConfigurationDataService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.initFormValues();
  }

  initFormValues(): void {
    this.configuration = {
      securityLoginType: 'notPassword',
      securityCodedType: 'notEncoding',
      avatarImage: '',
      username: ''
    };
  }

  onSaveClick(): void {
    if (this.password === this.repeatPassword) {
      this.configuration.password = this.password;
      if (this.encodeFrase === this.repeateEncodeFrase) {
        this.configuration.encodingFrase = this.encodeFrase;
        this.configurationDataService.createConfiguration(this.configuration).then(
          key => {
            if (key) {
              localStorage.setItem('configuration', key.toString());
              this.router.navigate(['/notes/dashboard']);
            }
          });
      } else {
        console.log('Encoded frases dont match');
      }
    } else {
      console.log('Passwords dont match');
    }


  }

  highlight(event): void {
    const element = event.target.parentElement;
    const parentChilds = element.parentElement.children;
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < parentChilds.length; i++) {
      // tslint:disable-next-line:prefer-for-of
      for (let j = 0; j < parentChilds[i].classList.length; j++) {
        if (parentChilds[i].classList[j] === 'light-blue') {
          parentChilds[i].classList.remove('light-blue');
        }
      }
    }
    this.configuration.avatarImage = element.children[0].children[0].attributes[1].value;
    element.classList.add('light-blue');
  }

}
