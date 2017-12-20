import { PubSubService } from 'app/service/pubSub.service';
import { roleService } from './../services/Role/role.service';
import { SystemService } from 'app/service/system.service';
/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE SELECTOR TEMPLATE_URL AND CLASS NAME*/
import { Component, OnInit, Input } from '@angular/core'
/**
* Model import Example :
* import { HERO } from '../models/hero.model';
*/

/**
 * Service import Example :
 * import { HeroService } from '../services/hero/hero.service';
 */

@Component({
  selector: 'bh-infodisplay',
  templateUrl: './infodisplay.template.html'
})

export class infodisplayComponent implements OnInit {
  @Input('display') display;
  @Input('displayInfo') displayInfo;
  mode = 'save';


  systemS: SystemService;

  // roles
  userRoleE;
  adminRoleE;
  roleS;

  constructor(private rs: roleService, private pubsub: PubSubService) {
    this.systemS = SystemService.getInstance();
  }
  ngOnInit() {
    this.roleS = this.rs.getUserRole();
    this.userRoleE = this.systemS.getVal('user_role');
    this.adminRoleE = this.systemS.getVal('admin_role');
    this.pubsub.$sub('displayInfo').subscribe(displayInfo => {
      this.display = displayInfo['infoType'];
      this.displayInfo = displayInfo['info'];
      console.log(this.displayInfo)
    })
  }

  changeMode(mode) {
    this.mode = mode;
  }

  save() {

  }

}
