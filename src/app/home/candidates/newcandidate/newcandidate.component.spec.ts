import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewcandidateComponent } from './newcandidate.component';

describe('NewcandidateComponent', () => {
  let component: NewcandidateComponent;
  let fixture: ComponentFixture<NewcandidateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewcandidateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewcandidateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
