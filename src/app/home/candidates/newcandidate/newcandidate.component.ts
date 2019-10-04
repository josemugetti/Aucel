import { Component, OnInit, ViewChild} from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-newcandidate',
  templateUrl: './newcandidate.component.html',
  styleUrls: ['./newcandidate.component.css']
})
export class NewcandidateComponent implements OnInit {

@ViewChild('f') form: NgForm; 

  constructor() { }

  ngOnInit() {
  }

  onSubmit(){
    console.log(this.form);
  }

}
