import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http' ;
import { Candidate } from 'src/models/candidate.model'; 
import {CandidateResponse} from 'src/models/listcandidate.model';
import {Voter } from "src/models/voter.model"; 
import { Voting } from 'src/models/voting.model';
import {VoterList} from 'src/models/voterList.model';
import{EmitingVote} from 'src/models/emitingVote.model'; 




@Injectable()
export class ConfigService {

  constructor(private http: HttpClient ) { }

  getCandidates(){
   return this.http.get<CandidateResponse>('http://localhost:3000/candidate');
  }
  addCandidate( candidate: Candidate){
    return this.http.post('http://localhost:3000/candidate', candidate );
  }

  deleteCandidate(id: string){
     return this.http.delete('http://localhost:3000/candidate/'+id);
  }

  addVoter(voter: Voter){
    return this.http.post("http://localhost:3000/voter", voter); 
  }

  login(voter: Voting){
    return this.http.post<Voter>("http://localhost:3000/login", voter); 
  }
  
  getVoters(){
    return this.http.get<VoterList>("http://localhost:3000/voter");
  }

  vote(vote: EmitingVote){

    return this.http.post("http://localhost:3000/vote", vote ); 
  }
 
}
