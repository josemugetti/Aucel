import { Component, OnInit, ViewChild} from '@angular/core';
import { NgForm } from '@angular/forms';
import { ConfigService } from 'src/app/config.service'
import { Candidate } from 'src/models/candidate.model';
import { Router } from '@angular/router'


@Component({
  selector: 'app-newcandidate',
  templateUrl: './newcandidate.component.html',
  styleUrls: ['./newcandidate.component.css']
})
export class NewcandidateComponent implements OnInit {

@ViewChild('f') form: NgForm; 

partido: string; 
presidente: string;
vicepresidente: string;  



  constructor( private http: ConfigService, private router: Router) { }

  ngOnInit() {
  }

  onSubmit(){


    
    const candidato: Candidate = {
      candidate: {
      presidente: this.presidente,
      vicepresidente: this.vicepresidente,
      partido: this.partido
      }
    };
    
     console.log(candidato)
    

   
      this.http.addCandidate(candidato).subscribe(responseData=> console.log(responseData));
     
      setTimeout(()=>this.router.navigateByUrl('/home'), 100);
  
   
  }

}
