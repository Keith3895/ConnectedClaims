import { caseserviceService } from './../services/CaseService/caseservice.service';
import { SystemService } from './../service/system.service';
/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE SELECTOR TEMPLATE_URL AND CLASS NAME*/
import { Component, OnInit, Input ,HostListener } from '@angular/core';
import { PubSubService } from './../service/pubSub.service';
/**
* Model import Example :
* import { HERO } from '../models/hero.model';
*/

/**
 * Service import Example :
 * import { HeroService } from '../services/hero/hero.service';
 */

@Component({
  selector: 'bh-homeinbox',
  templateUrl: './homeinbox.template.html'
})

export class homeinboxComponent implements OnInit {
  @Input('role') role; // currently two roles
  userRoleE;
  adminRoleE;
  @HostListener('click') onClick() {
      this.pubsub.$pub('clickEvent',false);
  }
  casesArr = [];
  infoViewDisplay; // information to be displayed on the Info View Section
  infoViewDisplayData; // information to be sent to the InfoDisplay Component
	panelOpenState: boolean = false;
  display:String;
  displayedContent=false;
  displayInfo:any;
  mode:String;
  service;
  constructor(private cs: caseserviceService, private pubsub:PubSubService) {
    this.casesArr = this.cs.getCaseList();
  }


  ngOnInit() {
    this.userRoleE = SystemService.getInstance().getVal('user_role');
    this.adminRoleE = SystemService.getInstance().getVal('admin_role');
    this.pubsub.$sub('showContent').subscribe(showContent => {
      	 console.log(showContent);
    	 this.display= showContent;
    });
    this.pubsub.$sub('showCard').subscribe(showContent => {
    	 this.displayedContent= showContent;
    });
    this.pubsub.$sub('unasignedClick').subscribe(showContent => {
    	 
      	 this.displayInfo={case:showContent};
      		console.log(this.displayInfo);
      this.displayedContent =true;
      delete this.service;
      //this.mode="";
    });
    this.pubsub.$sub('asignedClick').subscribe(showContent => {
    	 
      	 this.displayInfo={case:showContent.case,services:showContent.services};
      		console.log(this.displayInfo);
      this.displayedContent =true;
      this.mode=showContent.mode;
      delete this.service;
    });
    this.pubsub.$sub("serviceCall").subscribe(showContent => {
      this.service=showContent;
      delete this.displayInfo;
      this.displayedContent=true;
    });
  }

  selectedInfo() {
  }

}
