import {AbstractControl, FormControl, ValidationErrors, ValidatorFn, Validators} from '@angular/forms';


export class BgValidators extends Validators {
  static required(control) {
    return super.required(control) ? {required: 'აუცილებელი ველი'} : undefined;
  }

  static minLength(length) {
    return (control) =>
      super.minLength(length)(control)
        ? {minLength: 'გთხოვთ შეიყვანოთ მინიმუმ ' + length + ' სიმბოლო'} : undefined;
  }

  static maxLength(length) {
    return (control) =>
      super.maxLength(length)(control)
        ? {maxLength: 'ველის სიგრძე არ შეიძლება იყოს ' + length + '-ზე მეტი'} : undefined;
  }

  static noSpaces(control: AbstractControl): ValidationErrors {
     if (control.value != null) {
      for (let i = 0; i < 30; i++) {
        if (control.value[i] === ' ') {
          return  { space: 'space-ების გამოყენება დაუშვებელია'};
        }
      }
     }
  }
}
