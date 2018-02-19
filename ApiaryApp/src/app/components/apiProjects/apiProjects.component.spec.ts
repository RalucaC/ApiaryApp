import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiProjectsComponent } from './apiProjects.component';

describe('ApiProjectsComponent', () => {
  let component: ApiProjectsComponent;
  let fixture: ComponentFixture<ApiProjectsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApiProjectsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApiProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
