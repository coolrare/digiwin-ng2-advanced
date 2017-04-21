import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";

@Component({
  selector: 'app-classic',
  templateUrl: './classic.component.html',
  styleUrls: ['./classic.component.css']
})
export class ClassicComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  data: any = {};

  doSubmit(form: NgForm) {
    console.log(form);
  }

}
