import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from '@angular/forms';
import {BgValidators} from '../../shared/bg-validators';
import {AuthService} from '../../shared/auth/auth.service';
import {Router} from '@angular/router';


@Component({
  selector: 'bg-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  logInForm: FormGroup;
  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.logInForm = new FormGroup({
      username: new FormControl(undefined, [BgValidators.required, BgValidators.minLength(2), BgValidators.maxLength(30), BgValidators.noSpaces]),
      password: new FormControl(undefined, [BgValidators.required, BgValidators.minLength(2), BgValidators.maxLength(30)])
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

  onLogin(){

    if (this.logInForm.invalid){
      return;
    }

    const username = this.get('username').value;
    const password = this.get('password').value;

    this.auth.login(this.get('username').value, this.get('password').value).
    subscribe((userData) => {
      console.log(userData);
      this.router.navigate(['/bpm/bpm000']);
    });
  }

}
