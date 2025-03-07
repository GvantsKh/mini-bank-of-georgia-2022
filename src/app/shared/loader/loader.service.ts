import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {finalize} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class LoaderService{

  isLoading = 0;

  constructor() {

  }

  startLoading(){
    this.isLoading++;
  }

  stopLoading(){
    this.isLoading = Math.max(this.isLoading - 1, 0);
  }

  useLoader = (obs: Observable<any>) => {
    this.startLoading();
    return obs.pipe(finalize(() => {
      this.stopLoading();
    }));
  }

}
