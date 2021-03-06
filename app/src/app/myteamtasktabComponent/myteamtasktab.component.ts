import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core'
import { MatTableDataSource } from '@angular/material';
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
  selector: 'bh-myteamtasktab',
  templateUrl: './myteamtasktab.template.html'
})

export class myteamtasktabComponent implements OnInit, OnChanges {
  displayedColumnsAs;
  dataSourceAsig;
  @Input('data') data;
  @Input('fl') fl;
  constructor(private pubsub: PubSubService) { }
  ngOnInit() {
	this.displayedColumnsAs = ['select', 'agentName', 'assignedUser', 'policyNumber', 'caseId', 'services', 'status'];
	this.dataSourceAsig = new MatTableDataSource(this.data);
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['fl']) {
      let fl = changes['fl'].currentValue;
      // this.pubsub.$sub('filterBy').subscribe(fl => {
      console.log("subscribe in task table");
      if (fl == 'SLA') {
        this.displayedColumnsAs = ['select', 'agentName', 'assignedUser', 'policyNumber', 'caseId', 'services', 'status'];
      } else {
        this.displayedColumnsAs = ['select', 'assignedUser', 'policyNumber', 'caseId', 'services', 'status'];
      }
      console.log(fl);
      this.dataSourceAsig = new MatTableDataSource(this.data);
    }
  }

  asigned(val) {
    
    this.pubsub.$pub('asignedClick', val);
  }
  displayService(val) {
    this.pubsub.$pub('serviceCall', val);
  }
}
