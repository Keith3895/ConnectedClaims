/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
import { Injectable } from '@angular/core';

@Injectable()
export class roleService {
    static userRole = '';
    setUserRole(role) {
        return new Promise((resolve, reject) => {
            if (role) {
                roleService.userRole = role;
                resolve();
            }
            reject();
        });
    }

    getUserRole() {
        if (roleService.userRole) {
            return roleService.userRole;
        } else {
            return null;
        }
    }
}
