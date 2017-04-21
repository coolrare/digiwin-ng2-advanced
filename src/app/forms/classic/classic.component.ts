import { Component, OnInit } from '@angular/core';
import { NgForm, FormBuilder, FormGroup } from "@angular/forms";

@Component({
  selector: 'app-classic',
  templateUrl: './classic.component.html',
  styleUrls: ['./classic.component.css']
})
export class ClassicComponent implements OnInit {

  constructor(private fb: FormBuilder) {}

  form: FormGroup;

  ngOnInit() {
    this.form = this.fb.group({
      'title': 'Default Title',
      'summary': 'My Summary'
    });
  }

  data: any = {};

  doSubmit(form: NgForm) {
    console.log(form);
  }

}
