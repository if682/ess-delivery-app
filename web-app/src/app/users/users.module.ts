import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users.component';
import { UserService } from './user.service';
import { UserRoutingModule } from './user-routing.module';

@NgModule({
  declarations: [UsersComponent],
  imports: [CommonModule, UserRoutingModule],
  providers: [UserService],
  exports: [UsersComponent],
})
export class UsersModule {}
