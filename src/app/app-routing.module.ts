import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AuthenticationMasterComponent} from './authentication/authentication-master/authentication-master.component';
import {DashboardMasterComponent} from './dashboard/dashboard-master/dashboard-master.component';
import {ProductMasterComponent} from './Product/product-master/product-master.component';


const routes: Routes = [
  {path: '', component: AuthenticationMasterComponent },
  {path: 'app-dashboard-master', component: DashboardMasterComponent},
  {path: 'app-product-master', component: ProductMasterComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
