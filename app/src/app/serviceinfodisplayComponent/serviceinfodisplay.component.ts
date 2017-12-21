import { NgForm } from '@angular/forms';
/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE SELECTOR TEMPLATE_URL AND CLASS NAME*/
import { Component, OnInit, Input, SimpleChanges, OnChanges, ViewChild, } from '@angular/core';
import { PubSubService } from './../service/pubSub.service';
import { MatStepper } from '@angular/material';
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

export class serviceinfodisplayComponent implements OnInit, OnChanges  {
    @Input('displayInfo') displayInfo;
    @ViewChild('infoForm') infoForm: NgForm;
  	@ViewChild('stepper') stepper: MatStepper;
  
  date: any;
  constructor(private pubsub:PubSubService){
    	
    }
    ngOnInit() {
     
      
        // this.infoForm.control.disable()
      this.date = this.formattedDate() ;
    }

    ngOnChanges(changes: SimpleChanges) {
        if (changes['displayInfo']) {
            console.log('service', changes['displayInfo'].currentValue);
          
      
    setTimeout(()=>{
      this.stepper.selectedIndex = this.getRandomInt(0, 3); 
    },0);
  
        }
    }
    closeCard(){
  	this.pubsub.$pub("showCard",false);
  }
  
  
 formattedDate() {
var d = new Date(),
    minutes = d.getMinutes().toString().length == 1 ? '0'+d.getMinutes() : d.getMinutes(),
    hours = d.getHours().toString().length == 1 ? '0'+d.getHours() : d.getHours(),
    ampm = d.getHours() >= 12 ? 'pm' : 'am',
    months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],
    days = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
return days[d.getDay()]+' '+months[d.getMonth()]+' '+d.getDate()+' '+d.getFullYear()+' '+hours+':'+minutes+ampm;
}
  getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
  
}
