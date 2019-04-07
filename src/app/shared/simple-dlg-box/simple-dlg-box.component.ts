import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-simple-dlg-box',
  templateUrl: './simple-dlg-box.component.html',
  styleUrls: ['./simple-dlg-box.component.css']
})
export class SimpleDlgBoxComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<any>,
    @Inject(MAT_DIALOG_DATA) public data: any) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit() {
  }

  closeDialog()
  {
    this.dialogRef.close();
  }
}
