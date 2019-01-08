import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { IndexeddbService } from '../indexeddb.service';

@Component({
  selector: 'app-newreport',
  templateUrl: './newreport.component.html',
  styleUrls: ['./newreport.component.scss']
})
export class NewreportComponent implements OnInit {

  hide = true;

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);


  constructor(private indexeddbService: IndexeddbService) {

  }

  ngOnInit() {

  }

  addnewReport(title: string, pass: string) {
    this.indexeddbService.addnewReport(title, pass);
  }



}
