import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users.component';
import { UserService } from './user.service';
import { UserRoutingModule } from './user-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [UsersComponent],
  imports: [CommonModule, UserRoutingModule, ReactiveFormsModule],
  providers: [UserService],
  exports: [UsersComponent],
})
export class UsersModule {}
