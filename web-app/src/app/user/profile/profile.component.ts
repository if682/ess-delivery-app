import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { User } from 'src/app/admin/user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  public data: User;
  public profileSrc: string = "/assets/images/user-profile.png";

  constructor() { }

  ngOnInit() {
    this.data = window.history.state.data;
  }

}
