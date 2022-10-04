import {HttpInterceptor, HttpRequest, HttpHandler, HttpEvent} from '@angular/common/http';
import {AuthService} from './auth.service';
import {Observable} from 'rxjs';
import {switchMap, take} from 'rxjs/operators';
import {Injectable} from '@angular/core';

@Injectable()

export class AuthInterceptorService implements HttpInterceptor {

  constructor(private authService: AuthService) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    return this.authService.user.pipe(
      take(1),
      switchMap((user) => {
        if (!user){
          return next.handle(req);
        }

        const modifiedRequest = req.clone({
          headers: req.headers.append('Authhorization', 'Bearer ' + user.token)
        });

        return next.handle(modifiedRequest);

      })
    );
  }
}
