import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bar',
  templateUrl: './bar.component.html',
  styleUrls: ['./bar.component.css']
})
export class BarComponent implements OnInit {

  public name: string;
  public id: string;

  constructor() { }

  ngOnInit() {
    this.name = window.history.state.data.name;
    this.id = window.history.state.data.id;
  }

}
