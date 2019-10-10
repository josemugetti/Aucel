import { Component, OnInit, OnDestroy, EventEmitter} from '@angular/core';
import {ConfigService } from 'src/app/config.service';
import {map} from 'rxjs/operators';
import {Router, NavigationEnd } from '@angular/router';
import { Observable } from 'rxjs';



@Component({
  selector: 'app-candidates',
  templateUrl: './candidates.component.html',
  styleUrls: ['./candidates.component.css']
})



export class CandidatesComponent implements OnInit, OnDestroy {


  navigationSubscription;
   
 
 


  candidates=[]; 

  constructor( private http : ConfigService,  private router: Router){
    


    
    this.navigationSubscription = this.router.events.subscribe((e: any) => {
      // If it is a NavigationEnd event re-initalise the component
      if (e instanceof NavigationEnd) {
        this.initialiseInvites();
      }
    });
  }

  ngOnInit() {
  
  }


  initialiseInvites() {
   this.fetchCandidates(); 
 }
 ngOnDestroy() {
    // avoid memory leaks here by cleaning up after ourselves. If we  
    // don't then we will continue to run our initialiseInvites()   
    // method on every navigationEnd event.
    if (this.navigationSubscription) {  
       this.navigationSubscription.unsubscribe();
    }
  }
  





fetchCandidates(){

this.candidates=[]; 
  
  this.http.getCandidates().pipe( map((responseData)=>{for (let i in responseData.candidates){
    this.candidates.push(responseData.candidates[i]);
  }})).subscribe(); 
}

deleteCandidate(id: string ){
 this.http.deleteCandidate(id).subscribe(responseData=> console.log(responseData));
 
 setTimeout(()=>this.fetchCandidates(), 100); 
 
}




}
