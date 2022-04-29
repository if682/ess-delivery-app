import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-bar',
  templateUrl: './bar.component.html',
  styleUrls: ['./bar.component.css']
})
export class BarComponent implements OnInit {

  public name: string;
  public id: string;
  type: string;

  constructor(private acRoute: ActivatedRoute) { }

  ngOnInit() {
    this.name = window.history.state.data.name;
    this.id = window.history.state.data.id;
  }

}
