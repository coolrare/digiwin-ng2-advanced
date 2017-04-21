import { Component, OnInit } from '@angular/core';
import { AbstractControl, NgForm, FormBuilder, FormGroup, FormArray, Validators } from "@angular/forms";
import { mustHaveWillValidator } from "app/shared/must-have-will.validator";

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
      'title': ['', [Validators.required,
                     Validators.minLength(3),
                     mustHaveWillValidator]],
      'summary': ['', Validators.required],
      'metadata': this.fb.array([
        this.fb.control('Temp 1'),
        this.fb.control('Temp 2')
      ])
    });
  }

  addNewControl() {
    let arr = this.form.get('metadata') as FormArray;
    arr.push(this.fb.control('TEST'));
  }

  data: any = {};

  doSubmit(form: NgForm) {
    console.log(form);
  }

}
