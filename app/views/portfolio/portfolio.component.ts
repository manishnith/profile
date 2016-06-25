import { Component, OnInit } from '@angular/core';
import { AppService } from '../../app.service';

@Component({
  moduleId: module.id,
  selector: 'app-portfolio',
  templateUrl: 'portfolio.component.html'
})

//declare var initOnBootstrapped: any;

export class PortfolioComponent implements OnInit{


  profileImg200x200: String;
  profileImg349x232: String;

  portfolios:any;


  constructor(public appService: AppService) {

    this.appService = appService;
    this.portfolios = this.appService.getPortfolios();
    this.profileImg200x200 = "http://placehold.it/200x200";
    this.profileImg349x232 = "http://placehold.it/349x232/000000";

  }

  ngOnInit(){
	//new initOnBootstrapped();
  }


}
