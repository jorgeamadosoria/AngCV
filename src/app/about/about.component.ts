import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<AboutComponent>) {}

  ngOnInit() {
  }


  close() {
    this.dialogRef.close();
  }
}
