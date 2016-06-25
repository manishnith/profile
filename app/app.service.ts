import { Injectable } from '@angular/core';

@Injectable()
export class AppService {

  constructor() {}


  getPersonalDetail(){
  	return userDetails.personalDetails;
  }

  getProfessionalInformation(){
  	return userDetails.professionalInformation;
  }

  getEducationalDetails(){
  	return userDetails.educationalDetails;
  }

  getAwards(){
  	return userDetails.awards;
  }

  getPortfolios(){
    return userDetails.portFolios;
  }
}


var userDetails = {"personalDetails":{"name":"Rahul","phoneNumber":9474848425,"DOB":"01/11/1989","website":"www.mysite.com","shortDescription":"Lorem ipsum dolor sit amet, consectetur ","aboutME":"My money’s in that office, right? If she start giving me some bullshit about it ain’t there, and we got to go someplace else and get it, I’m gonna shoot you in the head then and there. Then I’m gonna shoot that bitch in the kneecaps, find out where my goddamn money is. She gonna tell me too.Quickly pursue revolutionary relationships before scalable technologies. Proactively pontificate out-of-the-box alignments with equity invested results.","designation":"Developer","email":"bindhyachaltiwari@gmail.com","address":"Sector 21, Gurgaon","socialInfo":[{"facebook":"www.facebbok.com"},{"twitter":"www.twitter.com"},{"linkedin":"www.linkedin.com"}]},"professionalInformation":{"experience":[{"technology":"Anroid","duration":"2008-2010","company":"Sapient","about_ur_role":"Lorem ipsum dolor sit amet, consectetur adipiscing Vivamus sit amet ligula non lectus cursus egestas. Cras erat lorem, fringilla quis sagittis in, sagittis inNam leo tortor Nam leo tortor Vivamus."},{"technology":"Java","duration":"2010-2012","company":"Sapient","about_ur_role":"Lorem ipsum dolor sit amet, consectetur adipiscing Vivamus sit amet ligula non lectus cursus egestas. Cras erat lorem, fringilla quis sagittis in, sagittis inNam leo tortor Nam leo tortor Vivamus."},{"technology":"Web Developer","duration":"2012-2016","company":"Sapient","about_ur_role":"Lorem ipsum dolor sit amet, consectetur adipiscing Vivamus sit amet ligula non lectus cursus egestas. Cras erat lorem, fringilla quis sagittis in, sagittis inNam leo tortor Nam leo tortor Vivamus."}],"technicalSkills":[{"name":"Java","proficiency":65},{"name":"HTML","proficiency":85},{"name":"JavaScript","proficiency":85},{"name":"CSS","proficiency":78},{"name":"Angular","proficiency":80},{"name":"photoshop","proficiency":60}],"languages":[{"name":"English","proficiency":80},{"name":"French","proficiency":40}],"resumeLink":"www.resume.com"},"portFolios":[{"title":"facebook","link":"http://www.facebook.com/X999/posts/Y999","category":["photography","webdesign"]},{"title":"facebook","link":"http://www.facebook.com/X999/posts/Y999","category":["webdesign","logo"]},{"title":"facebook","link":"http://www.facebook.com/X999/posts/Y999","category":["video","image"]}],"educationalDetails":[{"college":"Belmont","duration":"2003-2007","achievements":"Lorem ipsum dolor sit amet, consectetur adipiscing Vivamus sit amet ligula non lectus cursus egestas. Cras erat lorem, fringilla quis sagittis in, sagittis inNam leo tortor Nam leo tortor Vivamus.","degree":"Bachelor of Technology"},{"college":"St edmunds","duration":"2007-2008","achievements":"Lorem ipsum dolor sit amet, consectetur adipiscing Vivamus sit amet ligula non lectus cursus egestas. Cras erat lorem, fringilla quis sagittis in, sagittis inNam leo tortor Nam leo tortor Vivamus.","degree":"Master of Technology"}],"awards":[{"name":"Belmont","organization":"Madli","description":"Lorem ipsum dolor sit amet, consectetur "},{"name":"Belmont","organization":"Madli","description":"Lorem ipsum dolor sit amet, consectetur "}]};