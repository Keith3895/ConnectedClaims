import { PubSubService } from './../service/pubSub.service';
/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE SELECTOR TEMPLATE_URL AND CLASS NAME*/
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { SystemService } from 'app/service/system.service';
import { roleService } from 'app/services/Role/role.service';


/**
* Model import Example :
* import { HERO } from '../models/hero.model';
*/

/**
 * Service import Example :
 * import { HeroService } from '../services/hero/hero.service';
 */

@Component({
  selector: 'bh-casescard',
  templateUrl: './casescard.template.html'
})

export class casescardComponent implements OnInit {
  @Input('caseInfo') caseInfo;
  @Output('info') info: EventEmitter<any> = new EventEmitter<any>();
  @Input('selectedCard') selectedCard = false;
  @Input('index') index;


  roleS;
  userRole = '';
  adminRole = '';
  systemS: SystemService;
  constructor(private rs: roleService, private pubsub: PubSubService) {
    this.systemS = SystemService.getInstance();
  }
  ngOnInit() {
    console.log(this.caseInfo);
    this.roleS = this.rs.getUserRole();
    this.userRole = this.systemS.getVal('user_role');
    this.adminRole = this.systemS.getVal('admin_role');
  }

  sendInfo($event, infoType, info) {

    const i = {
      'infoType': infoType,
      'info': info
    }
    this.pubsub.$pub('displayInfo', i);
    $event.stopPropagation();
  }

  expandSelected(index) {
    this.pubsub.$pub('cardListIndex', index);
  }

}
