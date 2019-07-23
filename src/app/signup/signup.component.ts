import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  email: String;
  emailConfirm: String;
  password: String; 
  passwordConfirm: String; 
  
  constructor() { }

  ngOnInit() {
  }

  emailMatch(){
  if(this.email==this.emailConfirm) return true; 
  }

  passwordMatch(){

    if(this.password==this.passwordConfirm) return true; 

  }

}
