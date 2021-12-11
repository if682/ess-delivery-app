import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
@Component({
  selector: 'app-addButton',
  templateUrl: './addButton.component.html',
  styleUrls: ['./addButton.component.scss']
})
export class addButtonComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDialog() {
    const dialogRef = this.dialog.open(DialogContent);

    dialogRef.afterClosed().subscribe(result => {
      
    });
  }
}
@Component({
    selector: 'dialog-content',
    templateUrl: '../formtable/formtable.component.html'

})
export class DialogContent{}