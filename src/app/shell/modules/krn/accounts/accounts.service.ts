import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {AccountsModel} from './accounts.model';
import {AccountsInfoModel} from './accountsInfo.model';
import {Router} from '@angular/router';

@Injectable()


export class AccountsService{

  accounts = new BehaviorSubject<AccountsModel>(undefined);

  constructor(private router: Router) {

  }
    getAcc(accounts){
      return this.handleAcc(accounts);
    }


  handleAcc = (accData: AccountsModel) => {
      const accounts = new AccountsInfoModel(
        accData.accountKey,
        accData.accountName,
        accData.clientFirstName,
        accData.clientLastName,
        accData.amount
      );

      this.accounts.next(accounts);
    }


}
