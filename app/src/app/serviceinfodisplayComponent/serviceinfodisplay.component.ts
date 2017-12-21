import { NgForm } from '@angular/forms';
/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE SELECTOR TEMPLATE_URL AND CLASS NAME*/
import { Component, OnInit, Input, SimpleChanges, OnChanges, ViewChild } from '@angular/core';
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
    selector: 'bh-serviceinfodisplay',
    templateUrl: './serviceinfodisplay.template.html'
})

export class serviceinfodisplayComponent implements OnInit, OnChanges {
    @Input('displayInfo') displayInfo;
    @ViewChild('infoForm') infoForm: NgForm;
  
  date: any;
  constructor(private pubsub:PubSubService){
    	
    }
    ngOnInit() {
        // this.infoForm.control.disable()
      this.date = new Date().toLocaleString();
    }

    ngOnChanges(changes: SimpleChanges) {
        if (changes['displayInfo']) {
            console.log('service', changes['displayInfo'].currentValue)
        }
    }
    closeCard(){
  	this.pubsub.$pub("showCard",false);
  }

}
