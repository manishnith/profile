import { Component, OnInit } from '@angular/core';
import { AppService } from '../../app.service';

@Component({
  moduleId: module.id,
  selector: 'app-resume',
  templateUrl: 'resume.component.html'
})

export class ResumeComponent implements OnInit {

	educationalDetails: any;
	professionalInfo: any;
	awards: any;

	constructor(public appService: AppService) {
		this.appService = appService;
		this.educationalDetails = this.appService.getEducationalDetails();
		this.awards = this.appService.getAwards();
		this.professionalInfo = this.appService.getProfessionalInformation();
	}

	ngOnInit() {

	}

}
