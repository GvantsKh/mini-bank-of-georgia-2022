import {Component, OnInit} from '@angular/core';
import {AccountsModel} from './accounts.model';
import {HttpClient} from '@angular/common/http';
import {GetClientService} from '../../bpm/bpm000/getClient.service';
import {Router} from '@angular/router';

@Component({
  selector: 'bg-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.scss']
})
export class AccountsComponent implements OnInit {

  clientKey;
  accounts: Array<AccountsModel> = [];
  accKey;


  constructor(private http: HttpClient,
              private getClientService: GetClientService,
              private router: Router) { }

  ngOnInit(): void {
    this.getAccounts();
  }


  private getAccounts() {
    this.getClientService.client.subscribe((clientData) => {
      this.clientKey = clientData.clientKey;
    });
    return this.http.get<AccountsModel[]>('accounts?clientKey=' + this.clientKey)
      .subscribe((accounts) => {
        this.accounts = accounts;
      });
  }

  onAddAccount(){
    this.router.navigate(['krn/accounts/create']);
  }

  delAccount(accKey){
   this.http.delete('accounts?accountKey=' + accKey )
     .subscribe(
       () => {
         this.accounts = this.accounts.filter((acc) => acc.accountKey !== this.accKey);
         window.location.reload();
       });
  }



}
