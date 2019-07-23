import { Injectable } from '@angular/core';
import { Http, Response} from '@angular/http' ;





@Injectable()
export class ConfigService {

  constructor(private http: Http) { }

  getData(){
   return this.http.get('https://swapi.co/api/people/1/');
  }

}
