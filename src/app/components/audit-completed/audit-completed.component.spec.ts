import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuditCompletedComponent } from './audit-completed.component';

describe('AuditCompletedComponent', () => {
  let component: AuditCompletedComponent;
  let fixture: ComponentFixture<AuditCompletedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuditCompletedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuditCompletedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
