import { Component, OnInit } from '@angular/core';
import { AccessService } from '../access.service';
import { UserModel } from '../model/user';

@Component({
  selector: 'app-user-main',
  templateUrl: './user-main.component.html',
  styleUrls: ['./user-main.component.css'],
  providers: [AccessService]
})
export class UserMainComponent implements OnInit {
  users = [];
  email = "";
  rolename = "";

  constructor(private access: AccessService) {
    this.loadUsers();
  }

  ngOnInit() {
  }

  loadUsers(){
    this.access.getUsers()
    .then(resJson => this.users = resJson)
    .catch(err => console.log(err));
  }

  deleteUser(id){
    //console.log(id);
    this.access.deleteUser(id);
    this.loadUsers();
  }

  addUser(){
    //console.log(this.email + ' ' + this.rolename);
    var user = new UserModel();
    user.email = this.email;
    user.rolename = this.rolename;
    this.access.addUser(user);
    this.loadUsers();
  }

}
