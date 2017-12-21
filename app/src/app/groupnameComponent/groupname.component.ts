/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE SELECTOR TEMPLATE_URL AND CLASS NAME*/
import { Component, OnInit, Input } from '@angular/core'
import { filter } from 'rxjs/operator/filter';
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
    selector: 'bh-groupname',
    templateUrl: './groupname.template.html'
})

export class groupnameComponent implements OnInit {
    @Input('caseArr') caseArr;
    @Input('switchValue') switchValue;
    agent;
    keys;
    constructor(private pubsub:PubSubService) {

    }

    ngOnInit() {
        this.pubsub.$sub('filterBy').subscribe(fl=>{
            let filterBy;
            if (fl != 'SLA') {
                filterBy = "agentName";
            }
            else {
                filterBy = "priority";
            }
            // console.log(this.switchValue);
            this.agent = this.caseArr.reduce((acc, val, c) => {
                if (c == 1) {
                    let temp = acc;
                    acc = {};
                    acc[temp.case[filterBy]] = [];
                    acc[temp.case[filterBy]].push(temp);
                }
                acc[val.case[filterBy]] = acc[val.case[filterBy]] || [];
                acc[val.case[filterBy]].push(val);
                return acc;
            });
            console.log(this.agent);
            this.keys = Object.keys(this.agent);
            console.log(this.agent);
        });
       
    }

}
