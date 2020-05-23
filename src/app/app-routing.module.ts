import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AuthenticationMasterComponent} from './authentication/authentication-master/authentication-master.component';


const routes: Routes = [
  {path: '', component: AuthenticationMasterComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
