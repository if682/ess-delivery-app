import { Component } from '@angular/core';
import { UserModel } from '../models/user.model';
import { Response } from '../services/http.service';
import { UserService } from './user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent {
  users: UserModel[] = [];

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.userService.getUsers().subscribe((users: UserModel[]) => {
      this.users = users;
    });
  }
}
