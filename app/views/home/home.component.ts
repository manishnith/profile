import { Component, OnInit } from '@angular/core';
import { AppService } from '../../app.service';



@Component({
  moduleId: module.id,
  selector: 'app-home',
  templateUrl: 'home.component.html'
})
export class HomeComponent {

  profileImg: String;

  personalDetail:any;


  constructor(public appService: AppService) {

    this.appService = appService;
    this.personalDetail = this.appService.getPersonalDetail();
/*    this.name = this.personalDetail.name;
    this.designations = this.personalDetail.designations;
    this.aboutMe = this.personalDetail.shortDescription;*/
    this.profileImg = "http://placehold.it/200x200";

  }



 
  
  ngOnInit(){
    
  }

}
