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
    selector: 'bh-myteamtask',
    templateUrl: './myteamtask.template.html'
})

export class myteamtaskComponent implements OnInit {
  displayedColumnsAs = ['select','agentName', 'assignedUser', 'policyNumber', 'caseId','services','status'];
  	dataSourceAsig;
  @Input('data') data;
  constructor(private pubsub: PubSubService){}
    ngOnInit() {
      console.log(this.data);
      let assign = this.data.filter(el=>{
            // if()
            return el.case.agentName;
        });
        this.dataSourceAsig = new MatTableDataSource(assign);
		
    }
  asigned(val){
      this.pubsub.$pub('asignedClick',val);
    }
  displayService(val){
        this.pubsub.$pub('serviceCall',val);
    }
		checkevent(event){
      console.log(event);
      this.pubsub.$pub('teamEvent',event.checked)
      
    }
}
