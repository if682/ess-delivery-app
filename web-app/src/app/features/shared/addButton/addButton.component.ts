import { FormTableComponent } from './../form-table/form-table.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
@Component({
  selector: 'app-addButton',
  templateUrl: './addButton.component.html',
  styleUrls: ['./addButton.component.scss'],
})
export class addButtonComponent implements OnInit {
  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {}

  openDialog() {
    const dialogRef = this.dialog.open(FormTableComponent);

    dialogRef.afterClosed().subscribe((result) => {});
  }
}
