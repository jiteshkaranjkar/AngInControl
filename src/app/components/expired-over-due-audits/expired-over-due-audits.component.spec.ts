import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpiredOverDueAuditsComponent } from './expired-over-due-audits.component';

describe('ExpiredOverDueAuditsComponent', () => {
  let component: ExpiredOverDueAuditsComponent;
  let fixture: ComponentFixture<ExpiredOverDueAuditsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpiredOverDueAuditsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpiredOverDueAuditsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
