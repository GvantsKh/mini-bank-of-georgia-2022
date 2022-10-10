import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {FormControl, FormGroup} from '@angular/forms';
import { Clients } from './clients.model';
import {GetClientService} from './getClient.service';
import {LoaderService} from '../../../../shared/loader/loader.service';


@Component({
  selector: 'bg-bpm000',
  templateUrl: './bpm000.component.html',
  styleUrls: ['./bpm000.component.scss']
})
export class Bpm000Component implements OnInit {

  clientSearchForm: FormGroup;
  clients: Array<Clients> = [];
  tableView = false;

  constructor(private router: Router,
              private http: HttpClient,
              private getClient: GetClientService,
              private loader: LoaderService) { }

  ngOnInit(): void {
    this.clientSearchForm = new FormGroup({
      firstName: new FormControl(undefined),
      lastName: new FormControl(undefined),
      clientKey: new FormControl(undefined)
    });
  }

  onSearch(){
    this.getClients();
    this.tableView = true;
    }

  private getClients() {
    return this.http.get<Clients[]>('clients?', {params: this.getParams()})
      .pipe(this.loader.useLoader)
      .subscribe((clients) => {
        this.clients = clients;
      });
  }

   private getParams(){

    let firstName = this.clientSearchForm.value.firstName;
    let lastName = this.clientSearchForm.value.lastName;
    let clientKey = this.clientSearchForm.value.clientKey;

    !firstName ? firstName = '' : firstName = firstName;
    !lastName ? lastName = '' : lastName = lastName;
    !clientKey ? clientKey = '' : clientKey = clientKey;

     const queryParams = {'firstName': firstName,
                          'lastName': lastName,
                          'clientKey': clientKey};

     return queryParams;
   }


  onClientClick(client){
    this.getClient.getClient(client);
  }

}
