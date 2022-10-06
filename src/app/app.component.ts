import { Component, OnInit, OnDestroy} from '@angular/core';
import {Subscription} from 'rxjs';
import {AuthService} from './shared/auth/auth.service';
import {GetClientService} from './shell/modules/bpm/bpm000/getClient.service';

@Component({
  selector: 'bg-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  isAuthenticated = false;
  userSub: Subscription;

  constructor(private authService: AuthService,
              private getClient: GetClientService) {
  }

  ngOnInit() {
    this.authService.autoLogin();
    this.getClient.autoClient();
    this.userSub = this.authService.user.subscribe((user) => {
      this.isAuthenticated = !!user;
    });
  }

  ngOnDestroy() {
    if (this.userSub) {
      this.userSub.unsubscribe();
    }
  }


}
