import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormControl, FormGroup} from '@angular/forms';
import {BgValidators} from '../../../../shared/bg-validators';
import {Clients} from '../bpm000/clients.model';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {LoaderService} from '../../../../shared/loader/loader.service';

@Component({
  selector: 'bg-bpm001',
  templateUrl: './bpm001.component.html',
  styleUrls: ['./bpm001.component.scss']
})
export class Bpm001Component implements OnInit {

  clientRegForm: FormGroup;
  clients = [];

  constructor(private http: HttpClient,
              private router: Router,
              private loader: LoaderService) { }

  ngOnInit(): void {
    this.clientRegForm = new FormGroup({
      firstName: new FormControl(undefined, [BgValidators.required, BgValidators.minLength(2), BgValidators.maxLength(30)]),
      lastName: new FormControl(undefined, [BgValidators.required, BgValidators.minLength(2), BgValidators.maxLength(30)]),
      plusPoints: new FormControl(undefined, BgValidators.minZero)
    });
  }


  get(controlName): AbstractControl{
    return this.clientRegForm.get(controlName);
  }

  errors(controlName){
    if (this.get(controlName).errors){
      return Object.values(this.get(controlName).errors);
    }
  }


  clientReg(){

    if (this.clientRegForm.invalid){
      return;
    }

    this.putClient();
  }

  private putClient() {
    return this.http.put<Clients[]>('clients', {
      firstName: this.clientRegForm.value.firstName,
      lastName: this.clientRegForm.value.lastName,
      plusPoints: this.clientRegForm.value.plusPoints
    }).pipe(this.loader.useLoader)
      .subscribe((clients) => {
        this.clients = clients;
        localStorage.setItem('client', JSON.stringify(this.clients));
        this.router.navigate(['krn/krnicp']);
      });
  }

}
