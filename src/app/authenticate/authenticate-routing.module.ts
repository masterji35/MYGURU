import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {SignInComponent} from './sign-in/sign-in.component';
import {AuthenticateComponent} from './authenticate.components';
const routes: Routes = [
  {
    path: '',
    component: AuthenticateComponent,
    children: [
      {
        path: 'signin',
        component: SignInComponent,
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthenticateRoutingModule { }
