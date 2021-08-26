import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'crypto-wallet';

  public form: FormGroup;

  constructor() {
    this.form = new FormGroup({
      name: new FormControl(''),
      password: new FormControl('')
    });

    this.form.valueChanges.subscribe(v => console.log(v))
  }
}
