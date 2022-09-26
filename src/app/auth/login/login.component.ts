import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from '@angular/forms';
import {BgValidators} from '../../bg-validators';

@Component({
  selector: 'bg-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  logInForm: FormGroup;
  constructor() { }

  ngOnInit(): void {
    this.logInForm = new FormGroup({
      userName: new FormControl(undefined, BgValidators.required),
      passWord: new FormControl(undefined, BgValidators.required)
    });
  }

  get(controlName): AbstractControl{
    return this.logInForm.get(controlName);
  }

  errors(controlName){
    if (this.get(controlName).errors){
      return Object.values(this.get(controlName).errors);
    }
  }

}
