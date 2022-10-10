import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormControl, FormGroup} from '@angular/forms';
import {BgValidators} from '../../../../../shared/bg-validators';
import {AccountsModel} from '../../accounts/accounts.model';
import {HttpClient} from '@angular/common/http';
import {GetClientService} from '../../../bpm/bpm000/getClient.service';
import {Router} from '@angular/router';
import {LoaderService} from '../../../../../shared/loader/loader.service';

@Component({
  selector: 'bg-pmd311',
  templateUrl: './pmd311.component.html',
  styleUrls: ['./pmd311.component.scss']
})
export class Pmd311Component implements OnInit {

  pmdForm: FormGroup;
  clientKey;
  senderAcc: Array<AccountsModel> = [];
  receiverAcc: Array<AccountsModel> = [];


  constructor(private http: HttpClient,
              private getClientService: GetClientService,
              private router: Router,
              private loader: LoaderService) { }

  ngOnInit(): void {
    this.pmdForm = new FormGroup({
      sender: new FormControl(undefined, BgValidators.required),
      receiver: new FormControl(undefined, BgValidators.required),
      amount: new FormControl(undefined, [BgValidators.minZero, BgValidators.required])
    });

    this.getClientService.client.subscribe((clientData) => {
      this.clientKey = clientData.clientKey;
    });

    this.http.get<AccountsModel[]>('accounts?clientKey=' + this.clientKey)
      .subscribe((accounts) => {
        this.senderAcc = accounts;
      });

    this.http.get<AccountsModel[]>('accounts')
      .subscribe((accounts) => {
        this.receiverAcc = accounts;
      });
  }

  get(controlName): AbstractControl{
    return this.pmdForm.get(controlName);
  }

  errors(controlName){
    if (this.get(controlName).errors){
      return Object.values(this.get(controlName).errors);
    }
  }

  onTransfer(){
    return this.http.post('transfer', {
      senderAccountKey: this.pmdForm.value.sender,
      receiverAccountKey: this.pmdForm.value.receiver,
      amount: this.pmdForm.value.amount
    }).pipe(this.loader.useLoader)
      .subscribe((accounts) => {
        this.router.navigate(['krn/accounts']);
      });
  }

}
