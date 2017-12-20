import { roleService } from './../services/Role/role.service';
import { loginService } from './../services/Login/login.service';
/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE SELECTOR TEMPLATE_URL AND CLASS NAME*/
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

/**
* Model import Example :
* import { HERO } from '../models/hero.model';
*/

/**
 * Service import Example :
 * import { HeroService } from '../services/hero/hero.service';
 */

@Component({
    selector: 'bh-login',
    templateUrl: './login.template.html'
})

export class loginComponent implements OnInit {
    user = {};
    constructor(private ls: loginService, private router: Router, private rs: roleService) { }
    ngOnInit() {

    }

    login() {
        console.log(this.user);
        if (this.user['username'] && this.user['password']) {
            this.ls.login(this.user['username'], this.user['password']).subscribe(result => {
                this.rs.setUserRole(result['role']);
                this.router.navigate(['home']);
            })
        }
    }

}
