/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE SELECTOR TEMPLATE_URL AND CLASS NAME*/
import { Component, OnInit,Input } from '@angular/core'
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
    selector: 'bh-mytask',
    templateUrl: './mytask.template.html'
})

export class mytaskComponent implements OnInit {
      displayedColumnsAs = [ 'assignedUser', 'policyNumber', 'caseId','services','status'];
  	dataSourceAsig;
  @Input('data') data;
  constructor(private pubsub: PubSubService){}
    ngOnInit() {
      
      let assign = this.data.filter(el=>{
            // if()
            return el.case.agentName;
        });
        this.dataSourceAsig = new MatTableDataSource(assign);
		
    }
  asigned(val){
    val.mode="edit";
      this.pubsub.$pub('asignedClick',val);
    }
  displayService(val){
        this.pubsub.$pub('serviceCall',val);
    }


}
