import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  public form!: FormGroup;

  constructor() {
    this.initForm();
  }

  ngOnInit(): void {
  }

  private initForm(): void {
    this.form = new FormGroup({
      email: new FormControl(''),
      password: new FormControl(''),
      terms: new FormControl(false)
    })
  }

}
