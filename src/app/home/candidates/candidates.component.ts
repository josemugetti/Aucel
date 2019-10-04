import { Component, OnInit } from '@angular/core';
import { Candidate } from 'src/models/candidate.model';

@Component({
  selector: 'app-candidates',
  templateUrl: './candidates.component.html',
  styleUrls: ['./candidates.component.css']
})
export class CandidatesComponent implements OnInit {




candidates: Array<Candidate> =[
{
  partido: 'Cambiemos',
  presidente:'Mauricio Macri',
  vicepresidente: 'Ángel Pichetto',
  id: 1,
  
},
{
  partido: 'Todos',
    presidente: 'Alberto Fernandez',
    vicepresidente: 'Cristina Fernandez',
    id:2,
}
]; 


  constructor()
{
 
 }

  ngOnInit() {
  }

}
