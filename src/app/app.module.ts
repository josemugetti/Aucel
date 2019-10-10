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
import {ElectionComponent} from './home/candidates/election/election.component';
import { VoteComponent } from './vote/vote.component';


import { HttpModule } from '@angular/http';
import { RegistroComponent } from './home/registro/registro.component';






const appRoutes: Routes = [
{path: 'signup', component:SignupComponent},
{path:'', component:LoginComponent},
{path:'home', component: HomeComponent, children: [
  {path:'', component:CandidatesComponent, runGuardsAndResolvers: "always"},
  {path:'candidates', component:CandidatesComponent},
  {path: 'newcandidate', component:NewcandidateComponent},
  {path:'votacion', component: ElectionComponent },
  {path: 'registrovotantes', component:RegistroComponent},
  ],},
  {path:'votar/:id', component: VoteComponent}
  
]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    HomeComponent,
    CandidatesComponent,
    NewcandidateComponent,
    ElectionComponent,
    VoteComponent,
    RegistroComponent,
    
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes, {
      onSameUrlNavigation: 'reload'
    }), 
    FormsModule, 
    HttpClientModule,
    HttpModule,
  ],
  exports: [RouterModule],
  providers: [ConfigService],
  bootstrap: [AppComponent]
})
export class AppModule { }
