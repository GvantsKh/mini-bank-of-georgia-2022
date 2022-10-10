import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormControl, FormGroup} from '@angular/forms';
import {BgValidators} from '../../../../../shared/bg-validators';
import {HttpClient} from '@angular/common/http';
import {AccountsModel} from '../accounts.model';
import {GetClientService} from '../../../bpm/bpm000/getClient.service';
import {Router} from '@angular/router';

@Component({
  selector: 'bg-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.scss']
})
export class CreateAccountComponent implements OnInit {

  accRegForm: FormGroup;
  clientKey;
  accounts: [];

  constructor(private http: HttpClient,
              private getClientService: GetClientService,
              private router: Router) { }

  ngOnInit(): void {
    this.accRegForm = new FormGroup({
      accName: new FormControl(undefined, [BgValidators.required, BgValidators.minLength(2), BgValidators.maxLength(30)]),
      amount: new FormControl(undefined, BgValidators.minZero)
    });
  }

  get(controlName): AbstractControl{
    return this.accRegForm.get(controlName);
  }

  errors(controlName){
    if (this.get(controlName).errors){
      return Object.values(this.get(controlName).errors);
    }
  }

  accountReg(){
    this.getClientService.client.subscribe((clientData) => {
      this.clientKey = clientData.clientKey;
    });
    return this.http.put<AccountsModel[]>('accounts', {
      clientKey: this.clientKey,
      accountName: this.accRegForm.value.accName,
      amount: this.accRegForm.value.amount
    })
      .subscribe((accounts) => {
        this.router.navigate(['krn/accounts']);
      });
  }

}
