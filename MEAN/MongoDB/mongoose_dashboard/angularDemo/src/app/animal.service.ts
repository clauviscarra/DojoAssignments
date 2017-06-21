import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs'

@Injectable()
export class AnimalService {

  constructor(private _http:Http) {

   }

   get(){
     console.log("inside my get method on service")
     return this._http.get('/animals').map(res => res.json()).toPromise();
   }

}
