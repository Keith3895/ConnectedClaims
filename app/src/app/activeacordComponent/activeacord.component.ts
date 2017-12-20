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
		teamFlag = false;
    constructor(private pubsub: PubSubService){}
    ngOnInit() {
      	 this.pubsub.$sub('checkevent').subscribe(data =>{ 
           console.log(data);
           this.iconFlag = data
           
                                                     });
       this.pubsub.$sub('teamEvent').subscribe(data =>{ if(data)
       													this.teamFlag = data;
                                                      else
                                                        this.teamFlag = data;
                                                     });
   
    }
    
	
    
  	
  	
}
