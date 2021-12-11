import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.scss']
})
export class StartComponent implements OnInit {

  constructor(private router: Router) {

  }

  ngOnInit(): void {
  }

  onEnter(): void {
    this.router.navigate(["home"])
  }

}
