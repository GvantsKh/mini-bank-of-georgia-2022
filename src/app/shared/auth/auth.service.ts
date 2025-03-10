import { Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AuthRegisterModel} from './auth-register.model';
import {LoaderService} from '../loader/loader.service';
import {User} from './auth.model';
import {tap} from 'rxjs/operators';
import {BehaviorSubject} from 'rxjs';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class AuthService{
  error;
  user = new BehaviorSubject<User>(undefined);

  constructor(private http: HttpClient,
              private loader: LoaderService,
              private router: Router) {  }

  register(name, username, password){
    return this.http.post<AuthRegisterModel>('register', {
      name,
      username,
      password
    }).pipe(this.loader.useLoader,
      tap((userData) => {
        this.handleAuth(userData);
      }));
  }

  login(username, password){
    return this.http.post<AuthRegisterModel>('login', {
      username,
      password
    }).pipe(this.loader.useLoader,
      tap((userData) => {
        this.handleAuth(userData);
      }));
  }

  handleAuth = (resData: AuthRegisterModel) => {
    const user = new User(
      resData.token,
      new Date(resData.expirationDate),
      resData.name,
      resData.username,
      resData.image
    );

    this.user.next(user);
    localStorage.setItem('userData', JSON.stringify(user));
  }

  autoLogin() {
    const userData = JSON.parse(localStorage.getItem('userData'));
    if (!userData) {
      return;
    }
    const user = new User(
      userData._token,
      new Date(userData._tokenExpirationDate),
      userData.name,
      userData.username,
      userData.image
    );
    if (user.token) {
      this.user.next(user);
    }

  }

  logout(){
    this.user.next(undefined);
    this.router.navigate(['/auth']);
    localStorage.removeItem('userData');
    localStorage.removeItem('client');
  }
}
