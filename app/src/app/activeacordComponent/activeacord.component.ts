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
 *
 * */

@Component({
    selector: 'bh-activeacord',
    templateUrl: './activeacord.template.html'
})

export class activeacordComponent implements OnInit {
    @Input('caseArr') caseArr;
    displayedColumnsUn = ['agentName', 'assignedUser', 'policyNumber', 'caseId'];
    displayedColumnsAs = ['select','agentName', 'assignedUser', 'policyNumber', 'caseId','services'];
    dataSourceUnas;
  	dataSourceAsig;
  	iconFlag = false;
    constructor(private pubsub: PubSubService){}
    ngOnInit() {
        let unassign = this.caseArr.filter(el=>{
            // if()
            return !el.case.agentName;
        });
        let assign = this.caseArr.filter(el=>{
            // if()
            return el.case.agentName;
        });
       
        this.dataSourceUnas = new MatTableDataSource(unassign);
        this.dataSourceAsig = new MatTableDataSource(assign);
        this.pubsub.$sub('checkevent').subscribe(data =>{ if(data)
          													this.iconFlag = data;
                                                          else
                                                            this.iconFlag = data;
                                                        });
    }
    unasigned(val){
        
        this.pubsub.$pub('unasignedClick',val);
    }
	asigned(val){
      this.pubsub.$pub('asignedClick',val);
    }
    displayService(val){
        this.pubsub.$pub('serviceCall',val);
    }
  	
  	
}
