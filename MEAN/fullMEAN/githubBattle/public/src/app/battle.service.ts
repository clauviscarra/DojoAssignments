import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs';

@Injectable()
export class BattleService {

  constructor(private _http: Http) { }
  users = [];

  gitData(username) {
    console.log("I'm in my battle service");
    return this._http.get('https://api.github.com/users/' + username).map(data => data.json()).toPromise();
  }

  create(user) {
    console.log('here at service');
    return this._http.post('/users', user)
      .map((data) => {
        console.log(data)
        this.users.push(data.json())
        console.log('popopopo')
        console.log(this.users)
        return data.json()
      })
      .toPromise();
  }

  reset() {
    this.users = []
  }

  battle() {
    console.log('from battle', this.users);

    return this.users;
  }

rankings(){
  return this._http.get('/users').map(data => data.json()).toPromise();
}

}
