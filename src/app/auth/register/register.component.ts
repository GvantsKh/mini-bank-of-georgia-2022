import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormControl, FormGroup} from '@angular/forms';
import {BgValidators} from '../../shared/bg-validators';
import {AuthService} from '../../shared/auth/auth.service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'bg-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.registerForm = new FormGroup({
      name: new FormControl(undefined, [BgValidators.required, BgValidators.minLength(2), BgValidators.maxLength(30)]),
      username: new FormControl(undefined, [BgValidators.required, BgValidators.minLength(2), BgValidators.maxLength(30)]),
      password: new FormControl(undefined, [BgValidators.required, BgValidators.minLength(2), BgValidators.maxLength(30)]),
      repassword: new FormControl(undefined, [BgValidators.required, BgValidators.minLength(2), BgValidators.maxLength(30)])
    });
  }

  get(controlName): AbstractControl{
    return this.registerForm.get(controlName);
  }

  errors(controlName){
    if (this.get(controlName).errors){
      return Object.values(this.get(controlName).errors);
    }
  }

  onRegister(){

    if (this.registerForm.invalid){
      return;
    }

    this.authService.register(this.get('name').value,
                              this.get('username').value,
                              this.get('password').value).subscribe(userData => {
                                console.log(userData);
    });
  }
}
