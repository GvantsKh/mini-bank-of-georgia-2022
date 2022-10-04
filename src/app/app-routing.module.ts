import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { ShellComponent } from './shell/shell.component';
import {RegisterComponent} from './auth/register/register.component';
import {Bpm000Component} from './shell/modules/bpm/bpm000/bpm000.component';
import {Bpm001Component} from './shell/modules/bpm/bpm001/bpm001.component';
import {LoginComponent} from './auth/login/login.component';

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
  }
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
