//import { AuthService } from 'shared/services/auth.service';
import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import * as firebase from '@angular/fire';
import * as auth from 'firebase/auth';
import { FirebaseAppModule } from '@angular/fire/app';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private afauth:AngularFireAuth) {
    
   
  }
  auth:any;

  login() { 
    
  }
}
