import { Component, Inject, OnInit} from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface DialogData {
  animal: string;
  name: string;
}


@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit{
  animal: string;
  name: string;

  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {
      
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(FormsComponentDialog, {
      width: '250px',
      data: {name: this.name, animal: this.animal},
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }
}

@Component({
  selector: 'forms-dialog',
  templateUrl: 'forms-dialog.html',
})
export class FormsComponentDialog {
  constructor(
    public dialogRef: MatDialogRef<FormsComponentDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
