import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { ShellComponent } from './shell/shell.component';
import {RegisterComponent} from './auth/register/register.component';
import {Bpm000Component} from './shell/modules/bpm/bpm000/bpm000.component';
import {Bpm001Component} from './shell/modules/bpm/bpm001/bpm001.component';
import {LoginComponent} from './auth/login/login.component';
import {ClientHeaderComponent} from './shell/client-header/client-header.component';
import {KrnicpComponent} from './shell/modules/krn/krnicp/krnicp.component';
import {AccountsComponent} from './shell/modules/krn/accounts/accounts.component';
import {CreateAccountComponent} from './shell/modules/krn/accounts/create-account/create-account.component';
import {OperationsComponent} from './shell/modules/krn/operations/operations.component';
import {Pmd311Component} from './shell/modules/krn/pmd/pmd311/pmd311.component';

const routes: Routes = [
  {
    path: 'auth',
    component: AuthComponent,
  },
  {
    path: 'auth/register',
    component: AuthComponent,
  },
  {
    path: 'bpm/bpm000',
    component: Bpm000Component
  },
  {
    path: 'bpm/bpm001',
    component: Bpm001Component
  },
  {
    path: '',
    component: AuthComponent
  },
  {
    path: 'krn/krnicp',
    component: KrnicpComponent
  },
  {
    path: 'krn/accounts',
    component: AccountsComponent
  },
  {
    path: 'krn/accounts/create',
    component: CreateAccountComponent
  },
  {
    path: 'krn/operations',
    component: OperationsComponent
  },
  {
    path: 'pmd/pmd311',
    component: Pmd311Component
  },
  // {
  //   path: '',
  //   component: ShellComponent,
  //   children: []
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
