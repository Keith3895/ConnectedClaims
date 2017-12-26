/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE SELECTOR TEMPLATE_URL AND CLASS NAME*/
import { Component, OnInit, Input } from '@angular/core'
import { MatTableDataSource } from '@angular/material';
import { PubSubService } from './../service/pubSub.service';
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
    selector: 'bh-monitortable',
    templateUrl: './monitortable.template.html'
})

export class monitortableComponent implements OnInit {
    displayedColumnsAs = ['select', 'agentName', 'assignedUser', 'policyNumber', 'caseId', 'services','status'];
    dataSourceAsig;
  	role='';
    @Input('data') data;
    AllChecked = false;
    constructor(private pubsub: PubSubService,private rs: roleService) { }
    ngOnInit() {
      this.role= this.rs.getUserRole();
      if(this.role!='admin')
        this.displayedColumnsAs = ['select', 'assignedUser', 'policyNumber', 'caseId', 'services','status'];
        console.log(this.data);
        let assign = this.data.filter(el => {
            // if()
            return el.case.agentName;
        });
        this.dataSourceAsig = new MatTableDataSource(assign);

    }
    asigned(val) {
        this.pubsub.$pub('asignedClick', val);
    }
    displayService(val) {
        this.pubsub.$pub('serviceCall', val);
    }

}
