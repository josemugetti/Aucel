import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FormsModule} from '@angular/forms'; 
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ConfigService } from './config.service';
import { HomeComponent } from './home/home.component';
import {CandidatesComponent} from './home/candidates/candidates.component';
import {NewcandidateComponent} from './home/candidates/newcandidate/newcandidate.component';
 

import { HttpModule } from '@angular/http';




const appRoutes: Routes = [
{path: 'signup', component:SignupComponent},
{path:'', component:LoginComponent},
{path:'home', component: HomeComponent, children: [
  {path:'', component:CandidatesComponent},
  {path:'candidates', component:CandidatesComponent},
  {path: 'newcandidate', component:NewcandidateComponent}
  ]},
]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    HomeComponent,
    CandidatesComponent,
    NewcandidateComponent,
    
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes), 
    FormsModule, 
    HttpClientModule,
    HttpModule,
  ],
  providers: [ConfigService],
  bootstrap: [AppComponent]
})
export class AppModule { }
