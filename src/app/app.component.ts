import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@ng-stack/forms';
// import { FormGroup, FormBuilder } from '@angular/forms';

interface Model {
  id: number;
  name: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  form: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.form = this.fb.group({
      id: {value: 1, disabled: false},
      name: [{value: 'Kostia', disabled: false}],
    });
  }
}
