import { Component, OnInit } from '@angular/core';
import { throwMatDialogContentAlreadyAttachedError } from '@angular/material';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { User } from 'src/app/admin/user';
import { LocalStorageService } from 'src/app/local-storage.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user: User;
  id: string;
  localStorage = new LocalStorageService();
  
  profileSrc: string = "/assets/images/user-profile.png";

  constructor(private acRoute: ActivatedRoute, private route: Router) {}

  ngOnInit(): void {
    this.user = this.localStorage.get('user');
    alert(JSON.stringify(this.user));
    // alert(userid);
    //this.user = window.history.state.data;
    //this.acRoute.params.subscribe((params: Params) => this.id = params['id']);
  }

  toOrders(){
    this.route.navigate(["user", this.user.id, "orders"]);
  }

  toPayment(){
    this.route.navigate(["user", this.user.id, "payment"]);
  }

  toCurrentOrder(){
    this.route.navigate(["user", this.user.id, "current-order"]);
  }


}
