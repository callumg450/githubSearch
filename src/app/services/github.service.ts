import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
// import 'rxjs/map/operator/map';


@Injectable()
export class GithubService {

private username = "callumg450";
private client_id = '8e2fd144a27e75dcb3ca';
private client_secret = '4d6e052669e6b7eca615b0eba679df8c4bb91247';

  constructor(private _http: HttpClient) { 
  }

  getUser(){
    return this._http.get('https://api.github.com/users/' + this.username);
  }

  getRepos(){
    return this._http.get('https://api.github.com/users/' + this.username+'/repos');
  }

  updateUsername(username: string){
    this.username = username;
  }

}
