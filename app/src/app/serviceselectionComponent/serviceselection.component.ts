/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE SELECTOR TEMPLATE_URL AND CLASS NAME*/
import { Component, OnInit, Output, EventEmitter, Input, OnChanges, SimpleChanges } from '@angular/core'

/**
* Model import Example :
* import { HERO } from '../models/hero.model';
*/

/**
 * Service import Example :
 * import { HeroService } from '../services/hero/hero.service';
 */

@Component({
    selector: 'bh-serviceselection',
    templateUrl: './serviceselection.template.html'
})

export class serviceselectionComponent implements OnInit, OnChanges {
    @Input('disableYes') disableYes;
    @Input('disableNo') disableNo;
    @Input('disableAll') disableAll;
    @Output('selectedOption') selectedOption: EventEmitter<any> = new EventEmitter<any>();
    option = '';

    ngOnInit() {

    }

    ngOnChanges(changes: SimpleChanges) {
        if (changes['disableAll']) {
            console.log(changes['disableAll'].currentValue);
            if (changes['disableAll'].currentValue === true) {
                this.disableYes = false;
                this.disableNo = false;
            } if (changes['disableAll'].currentValue === false) {
                this.disableYes = true;
                this.disableNo = true;
            }
        }
    }
    selected(option) {
        this.option = option;
        this.selectedOption.emit(option);
    }
}
