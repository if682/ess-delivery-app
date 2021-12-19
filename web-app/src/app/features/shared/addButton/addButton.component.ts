import { FormPaymentsComponent } from './../form-payments/form-payments.component';
import { FormTableComponent } from './../form-table/form-table.component';
import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-addButton',
  templateUrl: './addButton.component.html',
  styleUrls: ['./addButton.component.scss'],
})
export class addButtonComponent implements OnInit {
  @Input() environment?: boolean;

  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {
    console.log(this.environment);
  }

  openDialog() {
    if (this.environment == false) {
      const dialogRef = this.dialog.open(FormTableComponent);
      dialogRef.afterClosed().subscribe((result) => {});
    } else {
      const dialogRef = this.dialog.open(FormPaymentsComponent);
      dialogRef.afterClosed().subscribe((result) => {});
    }
  }
}
