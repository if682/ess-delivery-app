import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { User } from 'src/app/admin/user';
import { LocalStorageService } from 'src/app/local-storage.service';

@Component({
  selector: 'app-bar',
  templateUrl: './bar.component.html',
  styleUrls: ['./bar.component.css']
})
export class BarComponent implements OnInit {

  data: User;
  localStorage = new LocalStorageService();
  type: string;

  constructor(private acRoute: ActivatedRoute) { }

  ngOnInit() {
    this.data = this.localStorage.get('user');
  }

}
