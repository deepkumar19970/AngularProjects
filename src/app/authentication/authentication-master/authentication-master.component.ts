import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthenticationService} from '../services/authentication.service';
import {Router} from '@angular/router';
import {User} from '../model/user';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-authentication-master',
  templateUrl: './authentication-master.component.html',
  styleUrls: ['./authentication-master.component.css']
})
export class AuthenticationMasterComponent implements OnInit {

  constructor(private authenticationService: AuthenticationService, private router: Router , private snackBar: MatSnackBar) { }

  user: User = new User();
  submitted = false;

  authentocateForm = new FormGroup({
    email: new FormControl('' , [ Validators.required , Validators.minLength(1) ] ),
    password: new FormControl('', [ Validators.required , Validators.minLength(1)]),
  });

  ngOnInit(): void {
    this.submitted = false;
  }

  authenticate(user){
    this.user = new User();
    this.user.username = this.userName.value;
    this.user.password = this.password.value;
    this.submitted = true;
    this.save();

  }


  save() {
    this.authenticationService.getUser(this.user.username, this.user.password)
      .subscribe(data => {
          if (data != null){
            this.router.navigate(['app-dashboard-master']);
          }
        }
        , error =>  this.snackBar.open('Username Or Password is Incorrect'));

  }

  get userName(){
    return this.authentocateForm.get('email');
  }

  get password(){
    return this.authentocateForm.get('password');
  }
}
