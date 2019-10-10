import { Component, OnInit, ViewChild } from '@angular/core';
import {ConfigService } from '/home/manuel/aucel/AuCel/src/app/config.service'; 
import  {Router, ActivatedRoute } from '@angular/router'; 
import {Voting } from '/home/manuel/aucel/AuCel/src/models/voting.model'; 
import { NgForm } from '@angular/forms';
 
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @ViewChild('f') singUpForm:  NgForm; 

dni: number; 
password: string; 
unregistered: boolean = false; 

  constructor ( private http: ConfigService, private router: Router) { }

  ngOnInit() {

  }


  onSubmit(){
     
    const voter: Voting={
      voter:
      {
        dni: this.dni,
        password: this.password
      }
    };

    console.log(voter); 

    this.http.login(voter).subscribe(responseData=> {
      console.log(responseData); 

      if(!responseData.voter.isVote) {
        this.router.navigate(["/votar/:id"],{
          queryParams:
          {
          id: responseData.voter._id}, 

         queryParamsHandling: 'merge',
        // preserve the existing query params in the route
           skipLocationChange: true
        // do not trigger navigation
      }); 
        this.unregistered=false; 
    }
      else this.unregistered=true; 

    }, error => {this.unregistered=true;
    console.log(error); })
    

  }

}
