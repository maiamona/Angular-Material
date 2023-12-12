import {Component, Inject, OnInit} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DialogData } from "./dialogo";

@Component({
  selector: 'app-chips2',
  templateUrl: './chips2.component.html',
  styleUrls: ['./chips2.component.css']
})
export class Chips2Component implements OnInit {

  animal: string;
  name: string;
hide:boolean;
panelOpenState = false;
  constructor(public dialog: MatDialog, public dialogRef: MatDialogRef<Chips2Component>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

    ngOnInit() {
this.hide = false;
    }

  openDialog(): void {
    this.hide = true;
    const dialogRef = this.dialog.open(Chips2Component, {
      width: '250px',
      data: {name: this.name, animal: this.animal}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
