/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE SELECTOR TEMPLATE_URL AND CLASS NAME*/
import { Component, OnInit, Input } from '@angular/core'
import {MatTableDataSource} from '@angular/material';
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
    selector: 'bh--unassignedtask',
    templateUrl: './-unassignedtask.template.html'
})

export class unassignedtaskComponent implements OnInit {
  	@Input('data') data;
  dataSourceUnas;
  displayedColumnsUn = ['agentName', 'assignedUser', 'policyNumber', 'caseId'];
      constructor(private pubsub: PubSubService){}

    ngOnInit() {
      //console.log(data);
      let unassign = this.data.filter(el=>{
            // if()
            return !el.case.agentName;
        });
      this.dataSourceUnas = new MatTableDataSource(unassign);

    }
  unasigned(val){
        
        this.pubsub.$pub('unasignedClick',val);
    }
  

}
