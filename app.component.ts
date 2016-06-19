import { Component } from '@angular/core';
import { HeaderComponent } from './shared/';
import { HomeComponent, ContactComponent, PortfolioComponent, ProfileComponent, ResumeComponent } from './views/';


@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  directives: [HeaderComponent, HomeComponent, ContactComponent, PortfolioComponent, ProfileComponent, ResumeComponent],
})
export class AppComponent {
  title = 'app works!';
}
