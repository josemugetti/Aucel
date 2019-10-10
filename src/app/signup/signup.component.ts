import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Voter } from 'src/models/voter.model'; 
import { ConfigService } from '/home/manuel/aucel/AuCel/src/app/config.service';  
import {Router } from '@angular/router';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

@ViewChild('f') singUpForm:  NgForm; 

  email: string;
  emailConfirm: string;
  password: string; 
  passwordConfirm: string; 
  name: string;
  lastname: string; 
  dni: number;
  
  constructor( private http: ConfigService, private  router: Router) { }

  ngOnInit() {
  }

  emailMatch(){
  if(this.email==this.emailConfirm) return true; 
  }

  passwordMatch(){

    if(this.password==this.passwordConfirm) return true; 

  }

  onSubmit(){

   const voter: Voter ={
     voter:{
      dni:this.dni,
      name: this.name,       
      lastname:  this.lastname, 
      email:     this.email,  
      password:this.password,
     }
   }; 

   
     this.http.addVoter(voter).subscribe(responseData=> console.log(responseData)); 

     setTimeout(()=>{this.router.navigate(["/"])}, 1000);
   

  }

}
