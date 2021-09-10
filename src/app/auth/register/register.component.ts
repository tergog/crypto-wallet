import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { UtilsService } from 'src/app/shared/services/utils.service';

const cErrors = {
  required: 'This field is required',
  emailInvalid: 'Please enter a correct email address.',
  passwordCombination: 'At least 8 characters, must include UPPER CASE letters and numbers'
};

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  public form!: FormGroup;
  public cErrors = cErrors;
  public showPassword: boolean = false;

  constructor(private utilsService: UtilsService) {
    this.initForm();
  }

  ngOnInit(): void {
  }

  private initForm(): void {
    this.form = new FormGroup({
      email: new FormControl('', [
        Validators.required,
        Validators.maxLength(50),
        this.utilsService.emailValidator(),
        this.utilsService.specialCharacterValidator()
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(50),
        this.utilsService.passwordCombinationValidator()
      ]),
      terms: new FormControl(false)
    })
  }

  public get email(): AbstractControl {
    return this.form.get('email')!;
  }

  public get password(): AbstractControl {
    return this.form.get('password')!;
  }

  public onEyeIconClick(): void {
    this.showPassword = !this.showPassword;
  }
}
