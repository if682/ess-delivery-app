import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UserModel } from '../models/user.model';
import { UserService } from './user.service';

@Component({
  selector: 'app-users',

  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent {
  users: UserModel[] = [];
  userFormGroup = new FormGroup({
    name: new FormControl(),
  });

  constructor(private userService: UserService) {}

  addUser() {
    this.userService
      .createUser(new UserModel({ name: this.userFormGroup.value.name ?? '' }))
      .subscribe((user: UserModel) => {
        this.users.push(user);
        this.userFormGroup.reset();
      });
  }

  ngOnInit() {
    this.userService.getUsers().subscribe((users: UserModel[]) => {
      this.users = users;
    });
  }
}
