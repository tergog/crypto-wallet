import { Injectable } from '@angular/core';
import { AbstractControl, ValidatorFn } from '@angular/forms';

@Injectable()
export class UtilsService {
  private passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,50}$/;
  private emailPattern = /(^$|(^([^<>()\[\]\\,;:\s@"]+(\.[^<>()\[\]\\,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$)/;
  private cyrillicPattern = /[а-яА-ЯёЁ]/gi;

  constructor() { }

  public emailValidator(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      const forbidden = new RegExp(this.emailPattern).test(control.value);
      const cyrillicPattern = new RegExp(this.cyrillicPattern).test(control.value);
      return forbidden && !cyrillicPattern ? null : { emailInvalid: true };
    };
  }

  public specialCharacterValidator(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      const forbidden = new RegExp(this.passwordPattern).test(control.value);
      return !forbidden ? null : { specialCharacter: true };
    };
  }

  public passwordCombinationValidator(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      const value = control.value ? control.value.trim() : '';
      const result = new RegExp(this.passwordPattern).test(value);
      const excludeCyrillic = new RegExp(this.cyrillicPattern).test(value);
      return result && !excludeCyrillic ? null : { passwordValidation: true };
    };
  }
}
