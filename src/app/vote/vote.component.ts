import { Component, OnInit } from '@angular/core';
import {ConfigService } from 'src/app/config.service'; 
import { map } from 'rxjs/operators';
import {Router, ActivatedRoute} from '@angular/router'; 
import { EmitingVote } from 'src/models/emitingVote.model';
import { stringify } from '@angular/core/src/util';
 
@Component({
  selector: 'app-vote',
  templateUrl: './vote.component.html',
  styleUrls: ['./vote.component.css']
})
export class VoteComponent implements OnInit {


  candidates=[]; 

  constructor(  private http: ConfigService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {

    this.fetchCandidates();

  }


  fetchCandidates(){

    this.http.getCandidates().pipe(
     map((responseData)=>{
      for(let c in responseData.candidates){
        this.candidates.push(responseData.candidates[c]); 
      }
     })

    ).subscribe( responseData=> console.log(responseData)); 


    

  }


  onVote(candidateId: string ){

   let voterId: string; 

    this.route.queryParams.subscribe((queryParams)=> {
      voterId=queryParams['id'];
   });

  const  emitingVote: EmitingVote={
     voter:{
       id:voterId
     }, 
     candidate:{
       id: candidateId
     },
   };
 
   console.log(emitingVote); 

   this.http.vote(emitingVote).subscribe(responseData=> {
     console.log(responseData);
     this.router.navigate(['/']); 
    }, error=> console.log(error)); 

 


  }

}
