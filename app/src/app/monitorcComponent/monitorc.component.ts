import { caseserviceService } from './../services/CaseService/caseservice.service';
import { SystemService } from 'app/service/system.service';
import { roleService } from 'app/services/Role/role.service';
import { PubSubService } from 'app/service/pubSub.service';
/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE SELECTOR TEMPLATE_URL AND CLASS NAME*/
import { Component, OnInit, Input } from '@angular/core';
/**
* Model import Example :
* import { HERO } from '../models/hero.model';
*/

/**
 * Service import Example :
 * import { HeroService } from '../services/hero/hero.service';
 */

@Component({
  selector: 'bh-monitorc',
  templateUrl: './monitorc.template.html'
})

export class monitorcComponent implements OnInit {

  roleS;
  userRole = '';
  adminRole = '';
  systemS: SystemService;
  currentCasesList = [];

  constructor(private rs: roleService, private cs: caseserviceService,private pubsub: PubSubService) {
    this.systemS = SystemService.getInstance();
  }
  ngOnInit() {
    this.roleS = this.rs.getUserRole();
    this.userRole = this.systemS.getVal('user_role');
    this.adminRole = this.systemS.getVal('admin_role');
    this.currentCasesList = this.cs.getCaseList();
  }

  getListFromActiveTab($event) {
    console.log($event.tab.textLabel);
    this.currentCasesList = this.cs.getCaseList();
  }
  //log($event) {
  //	console.log('logging info monitorC', $event);
  //}
  show(tab){
  	this.pubsub.$pub('showContent', tab);
  }
}
