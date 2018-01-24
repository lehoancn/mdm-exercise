import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { UserModel } from './model/user';

@Injectable()
export class AccessService {
  baseUrl = 'http://localhost:3000';

  constructor(private http: Http) { }

  getUsers(){
    return this.http.get(this.baseUrl +'/users')
    .toPromise()
    .then(res => {
      //console.log(res.json());
      return res.json();
    })
    .catch(err => console.log(err));
  }

  getGroups(){
    return this.http.get(this.baseUrl +'/groups')
    .toPromise()
    .then(res => {
      //console.log(res.json());
      return res.json();
    })
    .catch(err => console.log(err));
  }

  deleteUser(id){
    console.log('Delete user from access: ' + id);
    const body = { id: id };
    const url = 'http://localhost:3000/api/user/delete';
    const header = new Headers({'Content-Type': 'application/json'});
    this.http.post(url, JSON.stringify(body), { headers: header} )
    .toPromise()
    .then(res => console.log(res));
  }

  addUser(user: UserModel){
    console.log('Add user from access');
    const body = { email: user.email, rolename: user.rolename }
    const url = 'http://localhost:3000/api/users/add';
    const header = new Headers({'Content-Type': 'application/json'});

    this.http.post(url, JSON.stringify(body), { headers: header} )
    .toPromise()
    .then(res => console.log(res));
  }
}
