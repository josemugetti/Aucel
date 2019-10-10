import { Component, OnInit } from '@angular/core';
import {ConfigService} from 'src/app/config.service';
import{ map  } from 'rxjs/operators'; 



@Component({
  selector: 'app-election',
  templateUrl: './election.component.html',
  styleUrls: ['./election.component.css']
})
export class ElectionComponent implements OnInit {

results= []; 
    
    
    


  constructor(private http: ConfigService) { }

  ngOnInit() {
    this.fetchCandidates(); 
  }


  fetchCandidates(){

    this.results=[]; 
      
      this.http.getCandidates().pipe( map((responseData)=>{for (let i in responseData.candidates){
        this.results.push(responseData.candidates[i]);
      }})).subscribe(); 
    }


}
