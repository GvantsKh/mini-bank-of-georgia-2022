import { Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {Router} from '@angular/router';
import {ClientInfoModel} from './clientInfo.model';
import {Clients} from './clients.model';
import {User} from '../../../../shared/auth/auth.model';

@Injectable({
  providedIn: 'root'
})

export class GetClientService{

  client = new BehaviorSubject<ClientInfoModel>(undefined);
  sessionClient = new BehaviorSubject<ClientInfoModel>(undefined);

  constructor(private router: Router) {  }



  getClient(client){
    return this.handleAuth(client);
  }


  handleAuth = (resData: Clients) => {
    const client = new ClientInfoModel(
      resData.firstName,
      resData.lastName,
      resData.image,
      resData.clientKey,
      resData.sumAmount,
      resData.plusPoints
    );

    this.client.next(client);
    this.router.navigate(['krn/krnicp']);
    localStorage.setItem('client', JSON.stringify(client));
    this.sessionClient = JSON.parse(localStorage.getItem('client'));
  }

  autoClient() {
    const clientData = JSON.parse(localStorage.getItem('client'));
    if (!clientData) {
      return;
    }
    const clientInfo = new ClientInfoModel(
      clientData.firstName,
      clientData.lastName,
      clientData.image,
      clientData.clientKey,
      clientData.sumAmount,
      clientData.plusPoints
    );

    this.client.next(clientInfo);


  }

}
