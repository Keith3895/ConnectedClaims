import { NgForm } from '@angular/forms';
/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE SELECTOR TEMPLATE_URL AND CLASS NAME*/
import { Component, OnInit, Input, ViewChild } from '@angular/core';
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
    selector: 'bh-caseinfodisplay',
    templateUrl: './caseinfodisplay.template.html'
})

export class caseinfodisplayComponent implements OnInit {
    @Input('displayInfo') displayInfo;
    @Input('mode') mode;
    @ViewChild('f') f: NgForm;
    enableServiceSelection = false;
	constructor(private pubsub:PubSubService){
    	
    }
    ngOnInit() {
      console.log(this.displayInfo);
    }

    clicked(logthis) {

    }

    selectedServiceOption(service, option) {
        if (service === 'ambulance') {
            this.enableServiceSelection = true;
        }
    }
  closeCard(){
  	this.pubsub.$pub("showCard",false);
  }

}
