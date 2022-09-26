import {Validators} from '@angular/forms';


export class BgValidators extends Validators{
  static required(control){
    return super.required(control) ? {required: 'აუცილებელი ველი'} : undefined;
  }
}
