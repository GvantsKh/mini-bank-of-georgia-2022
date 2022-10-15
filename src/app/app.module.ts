import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AuthComponent } from './auth/auth.component';
import { ShellComponent } from './shell/shell.component';
import { ShellHeaderComponent } from './shell/shell-header/shell-header.component';
import { ShellSidebarComponent } from './shell/shell-sidebar/shell-sidebar.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { Bpm000Component } from './shell/modules/bpm/bpm000/bpm000.component';
import { Bpm001Component } from './shell/modules/bpm/bpm001/bpm001.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {UrlInterceptorService} from './shared/url-interceptor.service';
import { LoaderComponent } from './shared/loader/loader.component';
import {AuthInterceptorService} from './shared/auth/auth-interceptor.service';
import { ClientHeaderComponent } from './shell/client-header/client-header.component';
import { KrnicpComponent } from './shell/modules/krn/krnicp/krnicp.component';
import { AccountsComponent } from './shell/modules/krn/accounts/accounts.component';
import { CreateAccountComponent } from './shell/modules/krn/accounts/create-account/create-account.component';
import { OperationsComponent } from './shell/modules/krn/operations/operations.component';
import { PmdComponent } from './shell/modules/krn/pmd/pmd.component';
import { Pmd311Component } from './shell/modules/krn/pmd/pmd311/pmd311.component';
import {BpmComponent} from './shell/modules/bpm/bpm.component';
import {KrnComponent} from './shell/modules/krn/krn.component';
@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    ShellComponent,
    ShellHeaderComponent,
    ShellSidebarComponent,
    LoginComponent,
    RegisterComponent,
    Bpm000Component,
    Bpm001Component,
    LoaderComponent,
    ClientHeaderComponent,
    KrnicpComponent,
    AccountsComponent,
    CreateAccountComponent,
    OperationsComponent,
    PmdComponent,
    Pmd311Component,
    BpmComponent,
    KrnComponent,
  ],
    imports: [
        BrowserModule,
        FormsModule,
        AppRoutingModule,
        ReactiveFormsModule,
        HttpClientModule
    ],
  providers: [ {
    provide: HTTP_INTERCEPTORS,
    useClass: UrlInterceptorService,
    multi: true
  },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
