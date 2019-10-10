import { Component, OnInit } from '@angular/core';
import { ConfigService } from 'src/app/config.service'; 
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  votantes=[];

  constructor(private http: ConfigService) { }

  ngOnInit() {

    this.fetchVoters(); 
  }



  fetchVoters(){
    this.http.getVoters().pipe(map((responseData)=>{
      for(let i in responseData.voter){
        this.votantes.push(responseData.voter[i]); 
      }
    })).subscribe();

  console.log(this.votantes);
  }

}
