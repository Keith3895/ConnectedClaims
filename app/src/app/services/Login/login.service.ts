import { Observable } from 'rxjs/Observable';
/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
import { Injectable } from '@angular/core';

@Injectable()
export class loginService {
  login(username, password): Observable<any> {
    if (username === 'agent' && password === 'agent') {
      return Observable.of({
        username: 'agent',
        role: 'agent'
      });
    } else if (username === 'admin' && password === 'admin') {
      return Observable.of({
        username: 'admin',
        role: 'admin'
      });
    }
    return Observable.of({});
  }
}
