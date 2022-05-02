import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router'
import { AuthenticationService } from '../service/authentication/authentication.service';
import { NgModule } from '@angular/core';


import { Status } from './status';
import { StatusService } from './status.service'

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.css']
})
export class StatusComponent implements OnInit {
}
