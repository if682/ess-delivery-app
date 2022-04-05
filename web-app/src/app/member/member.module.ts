import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material";
import { RouterModule } from "@angular/router";
import { HistoryComponent } from "./history/history.component";
import { HomeComponent } from "./home/home.component";
import { MemberComponent } from "./member.component";
import { ProfileComponent } from "./profile/profile.component";

@NgModule({
  declarations: [
    HomeComponent,
    ProfileComponent,
    HistoryComponent,
    MemberComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatButtonModule,
    RouterModule.forChild([
      {
        path: "",
        component: MemberComponent,
        children: [
          { path: "", component: HomeComponent },
          { path: "profile", component: ProfileComponent },
          { path: "history", component: HistoryComponent },
        ],
      },
    ]),
  ],
})
export class MemberModule {}
