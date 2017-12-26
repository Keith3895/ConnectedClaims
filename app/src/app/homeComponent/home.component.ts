/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE SELECTOR TEMPLATE_URL AND CLASS NAME*/
import { Component, OnInit } from '@angular/core'
import { roleService } from 'app/services/Role/role.service';
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
    selector: 'bh-home',
    templateUrl: './home.template.html'
})

export class homeComponent implements OnInit {
    role = '';
  	searchTrigger=false;
  	
    constructor(private rs: roleService,private pubsub:PubSubService) {}
    ngOnInit() {
        this.role = this.rs.getUserRole();
        console.log('current role', this.role);
      this.pubsub.$sub('clickEvent').subscribe(el=>{
      	this.searchTrigger=false;
      });
    }
  
  refresh()
  {
    window.location.reload();
  }

}
