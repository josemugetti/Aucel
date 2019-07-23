import { Component } from '@angular/core';
import { ConfigService } from './config.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  
})
export class AppComponent {
  title = 'projecto';

  constructor(private servidor: ConfigService){

    
  }

  onData(){
    this.servidor.getData().subscribe(
      (response)=>{
       const data= response.json();

       
      }
    )
  }

  

 
}


