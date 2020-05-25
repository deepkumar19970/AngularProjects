import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AuthenticationMasterComponent } from './authentication/authentication-master/authentication-master.component';
import {RouterModule} from '@angular/router';
import {AppRoutingModule} from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MaterialModule} from './material/material-module';
import {ReactiveFormsModule} from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule, HttpHeaders} from '@angular/common/http';
import {HttpInterceptorService} from './commonservices/http-interceptor.service';
import { DashboardMasterComponent } from './dashboard/dashboard-master/dashboard-master.component';
import { NavigationMasterComponent } from './navigation/navigation-master/navigation-master.component';
import { ProductMasterComponent } from './Product/product-master/product-master.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthenticationMasterComponent,
    DashboardMasterComponent,
    NavigationMasterComponent,
    ProductMasterComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    RouterModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    HttpClientModule,

  ],
  providers: [{provide: HTTP_INTERCEPTORS, useClass: HttpInterceptorService, multi: true}],
  bootstrap: [AppComponent],
  entryComponents: [AuthenticationMasterComponent]

})
export class AppModule { }
