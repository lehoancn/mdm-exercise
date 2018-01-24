import { Component, OnInit } from '@angular/core';
import { AccessService } from '../access.service';

@Component({
  selector: 'app-group-main',
  templateUrl: './group-main.component.html',
  styleUrls: ['./group-main.component.css'],
  providers: [AccessService]
})
export class GroupMainComponent implements OnInit {
  groups = [];

  constructor(private access: AccessService) { 
    this.access.getGroups()
    .then(resJson => {
      this.groups = resJson;
    }).catch(err => console.log(err));
  }

  ngOnInit() {
  }

}
