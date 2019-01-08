import { Component, OnInit } from '@angular/core';
import { Inject, Injectable } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material';
import { Router } from '@angular/router';
import { IndexeddbService } from '../indexeddb.service';

@Component({
  selector: 'app-dialog-pass',
  templateUrl: './dialog-pass.component.html',
  styleUrls: ['./dialog-pass.component.scss']
})
export class DialogPassComponent implements OnInit {
  hide = true;
  msg: string;
  constructor(public router: Router, private indexeddbService: IndexeddbService,
    public dialogRef: MatDialogRef<DialogPassComponent>,
    @Inject(MAT_DIALOG_DATA) public data) {}

  cancel(): void {
    this.dialogRef.close();
    this.router.navigate(['/my-reports']);
  }
  ngOnInit() {

  }

  onKeydown(event, pass: string, report_id: string) {
    if (event.key === 'Enter') {
      console.log(event);
      this.decrypt(pass, report_id);
    }
  }

  decrypt(pass: string, report_id: string) {

    this.indexeddbService.decrypt(pass, report_id).then(returned => {

      console.log(`Returned: ${returned}`);
      if (returned) {
        this.dialogRef.close();
      } else {
        this.msg = 'Wrong password :(';
      }

  });



  }


}
