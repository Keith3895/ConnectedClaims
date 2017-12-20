/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE SELECTOR TEMPLATE_URL AND CLASS NAME*/
import { Component, OnInit,Input } from '@angular/core'
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
    selector: 'bh-activeacord',
    templateUrl: './activeacord.template.html'
})

export class activeacordComponent implements OnInit {
    @Input('caseArr') caseArr;
    
    
  	iconFlag = false;
    constructor(private pubsub: PubSubService){}
    ngOnInit() {
     
    }
    
	
    
  	checkevent(event) {
      if(event.checked){
        this.iconFlag = true;
      }
      else{
        this.iconFlag = false;
      }
    }
  	
}
