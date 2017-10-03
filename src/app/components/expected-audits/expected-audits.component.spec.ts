import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpectedAuditsComponent } from './expected-audits.component';

describe('ExpectedAuditsComponent', () => {
  let component: ExpectedAuditsComponent;
  let fixture: ComponentFixture<ExpectedAuditsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpectedAuditsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpectedAuditsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
