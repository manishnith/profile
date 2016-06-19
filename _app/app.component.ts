import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from './shared/';
import { HomeComponent, ContactComponent, PortfolioComponent, ProfileComponent, ResumeComponent } from './views/';

declare var initOnBootstrapped: any;

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  directives: [HeaderComponent, HomeComponent, ContactComponent, PortfolioComponent, ProfileComponent, ResumeComponent],
})
export class AppComponent  implements OnInit {


  constructor() {
  
  }

  ngOnInit() {
	new initOnBootstrapped();
  }

}
