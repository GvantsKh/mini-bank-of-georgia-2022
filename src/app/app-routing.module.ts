import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import {Bpm000Component} from './shell/modules/bpm/bpm000/bpm000.component';
import {Bpm001Component} from './shell/modules/bpm/bpm001/bpm001.component';;
import {KrnicpComponent} from './shell/modules/krn/krnicp/krnicp.component';
import {AccountsComponent} from './shell/modules/krn/accounts/accounts.component';
import {CreateAccountComponent} from './shell/modules/krn/accounts/create-account/create-account.component';
import {OperationsComponent} from './shell/modules/krn/operations/operations.component';
import {Pmd311Component} from './shell/modules/krn/pmd/pmd311/pmd311.component';
import {ShellComponent} from './shell/shell.component';
import {BpmComponent} from './shell/modules/bpm/bpm.component';
import {KrnComponent} from './shell/modules/krn/krn.component';
import {LoginComponent} from './auth/login/login.component';
import {RegisterComponent} from './auth/register/register.component';
import {PmdComponent} from './shell/modules/krn/pmd/pmd.component';

const routes: Routes = [
  {
    path: 'auth',
    component: AuthComponent,
    children: [
      {
        path: '',
        component: LoginComponent,
      },
      {
        path: 'register',
        component: RegisterComponent,
      },
      {
        path: '',
        redirectTo: 'auth',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '',
    component: ShellComponent,
    children: [
      {
        path: 'bpm',
        component: BpmComponent,
        children: [
          {
            path: 'bpm000',
            component: Bpm000Component,
          },
          {
            path: 'bpm001',
            component: Bpm001Component
          },
        ],
      },
      {
        path: 'krn',
        component: KrnComponent,
        children: [
          {
            path: 'krnicp',
            component: KrnicpComponent,
          },
          {
            path: 'accounts',
            component: AccountsComponent,
          },
          {
            path: 'accounts/create',
            component: CreateAccountComponent
          },
          {
            path: 'operations',
            component: OperationsComponent
          },
        ],
      },
      {
        path: 'pmd',
        component: PmdComponent,
        children: [
          {
            path: 'pmd311',
            component: Pmd311Component
          }
        ]
      },
    ],
  },
      {
        path: '',
        redirectTo: 'auth',
        pathMatch: 'full',
      },
    ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
