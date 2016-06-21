import { Component, OnInit } from '@angular/core';
import { AppService } from '../../app.service';



@Component({
  moduleId: module.id,
  selector: 'app-home',
  templateUrl: 'home.component.html'
})
export class HomeComponent {
  name:String;
  designations: String[];
  aboutMe: String;
  profileImg: String;



  constructor(public appService: AppService) {
  	this.name = "Manish";
  	this.designations = ["Developer","Designer"];
  	this.aboutMe = "Lorem ipsum dolor sit amet, consectetur adipiscing elit Etiam eu cursus lectus. In ultrice s leo sed leo bibendum eu interdum urna luctus.";
  	this.profileImg = "http://placehold.it/200x200";
    this.appService = appService;

  }


  sayHello(){
    this.appService.sayHello();
  }


}
