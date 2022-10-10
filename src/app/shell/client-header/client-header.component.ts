import { Component, OnInit } from '@angular/core';
import {Router, RouterLinkActive} from '@angular/router';
import {GetClientService} from '../modules/bpm/bpm000/getClient.service';

@Component({
  selector: 'bg-client-header',
  templateUrl: './client-header.component.html',
  styleUrls: ['./client-header.component.scss']
})
export class ClientHeaderComponent implements OnInit {

  firstName;
  lastName;
  image;
  clientKey;
  sumAmount;
  plusPoints;


  constructor(private router: Router,
              private getClientService: GetClientService) { }

  ngOnInit(): void {
    this.getClientService.client.subscribe((clientData) => {
      this.firstName = clientData.firstName;
      this.lastName = clientData.lastName;
      this.image = clientData.image;
      this.clientKey = clientData.clientKey;
      this.sumAmount = clientData.sumAmount;
      this.plusPoints = clientData.plusPoints;

    });
  }

  clientLogOut(){
      this.router.navigate(['bpm/bpm000']);
      localStorage.removeItem('client');
  }
}
