import { Injectable } from '@angular/core';

@Injectable()
export class AppService {

  constructor() {}


  getPersonalDetail(){
  	let personalDetails = userDetails.personalDetails;
  	console.log(personalDetails);
 	return personalDetails;
  }

  getProfessionalInformation(){
  	let professionalInformation = userDetails.professionalInformation;
  	console.log(professionalInformation);
  //	return professionalInformation;
  }

  getEducationalDetails(){
  	let educationalDetails = userDetails.educationalDetails;
  	console.log(educationalDetails);
  }

  getAwards(){
  	let awards = userDetails.awards;
  	console.log(awards);
  }
}


var userDetails = {"personalDetails":{"name":"Rahul","phoneNumber":9474848425,"DOB":"01/11/1989","website":"www.mysite.com","shortDescription":"Lorem ipsum dolor sit amet, consectetur ","designation":"Developer","email":"bindhyachaltiwari@gmail.com","hobbies":["listing music","playing football","football"],"socialInfo":[{"facebook":"www.facebbok.com"},{"twitter":"www.twitter.com"},{"linkedin":"www.linkedin.com"}]},"professionalInformation":[{"technology":"Anroid","yearsOfExp":5,"companies":[{"name":"Sapient","numberOfYears":3,"shortDescription":"Lorem ipsum dolor sit amet,consectetur "},{"name":"Infosys","numberOfYears":2,"shortDescription":"Lorem ipsum dolor sit amet, consectetur "}]},{"technology":"Web developer","yearsOfExp":5,"companies":[{"name":"Sapient","numberOfYears":3,"shortDescription":"Lorem ipsum dolor sit amet,consectetur "},{"name":"Infosys","numberOfYears":2,"shortDescription":"Lorem ipsum dolor sit amet, consectetur "}]}],"portFolios":[{"title":"facebook","link":"http://www.facebook.com/X999/posts/Y999","category":["video","image"]},{"title":"facebook","link":"http://www.facebook.com/X999/posts/Y999","category":["video","image"]},{"title":"facebook","link":"http://www.facebook.com/X999/posts/Y999","category":["video","image"]}],"educationalDetails":[{"schoolName":"Belmont","numberOfYears":3,"shortDescription":"Lorem ipsum dolor sit amet, consectetur ","degreeName":"General"},{"schoolName":"St edmunds","numberOfYears":2,"shortDescription":"Lorem ipsum dolor sit amet, consectetur ","degreeName":"B.Tech"}],"awards":[{"name":"Belmont","organisation":"Madli","detail":"Lorem ipsum dolor sit amet, consectetur "},{"name":"Belmont","organisation":"Madli","detail":"Lorem ipsum dolor sit amet, consectetur "}]};