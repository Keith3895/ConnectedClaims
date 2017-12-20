import { PubSubService } from './../service/pubSub.service';
/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE SELECTOR TEMPLATE_URL AND CLASS NAME*/
import { Component, OnInit, Input } from '@angular/core'

/**
* Model import Example :
* import { HERO } from '../models/hero.model';
*/

/**
 * Service import Example :
 * import { HeroService } from '../services/hero/hero.service';
 */

@Component({
  selector: 'bh-caseslist',
  templateUrl: './caseslist.template.html'
})

export class caseslistComponent implements OnInit {
  @Input('tabName') tabName;
  @Input('casesList') casesList = [];
  selectedIndex = -1;

  constructor(private pubsusb: PubSubService) { }
  ngOnInit() {
    this.pubsusb.$sub('cardListIndex').subscribe(selectedIndex => {
      // console.log('selected index from casesList', selectedIndex)
      if (this.selectedIndex === selectedIndex) {
        this.selectedIndex = -1;
      } else {
        this.selectedIndex = selectedIndex;
      }
    })
  }

  selected(event, index) {
    console.log('selected call');
    console.log(index);
    console.log(this.casesList[index]);
  }

  getCaseListByTabName() {

  }

  clicked() {
    console.log('This is your life and it is ending one minute at a time');
  }

}
