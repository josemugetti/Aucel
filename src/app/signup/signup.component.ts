import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

@ViewChild('f') singUpForm:  NgForm; 

  email: String;
  emailConfirm: String;
  password: String; 
  passwordConfirm: String; 
  name: String;
  lastname: String; 
  ID: number; 
  
  constructor() { }

  ngOnInit() {
  }

  emailMatch(){
  if(this.email==this.emailConfirm) return true; 
  }

  passwordMatch(){

    if(this.password==this.passwordConfirm) return true; 

  }

  onSubmit(){
     console.log(this.singUpForm); 
  }

}
