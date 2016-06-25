import { Component, OnInit } from '@angular/core';
import { AppService } from '../../app.service';

@Component({
  moduleId: module.id,
  selector: 'app-profile',
  templateUrl: 'profile.component.html'
})
export class ProfileComponent implements OnInit {

  profileImg226x226: String;
  personalDetails:any;

  constructor(public appService: AppService) {

    this.appService = appService;
    this.personalDetails = this.appService.getPersonalDetail();
    this.profileImg226x226 = "http://placehold.it/226x226";
    

  }

  ngOnInit() {

  }

}
