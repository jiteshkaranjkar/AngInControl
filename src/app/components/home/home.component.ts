import { Component, OnInit, ViewChild} from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormsModule, FormGroup, Validators } from '@angular/forms';
import { CalenderControlComponent } from '../calender-control/calender-control.component'
import { AuditCompletedComponent } from '../audit-completed/audit-completed.component';
import { AuditCompleted, CategoryCompletedAuditsOverTime} from '../../models/auditCompleted';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
  //,directives: [AuditCompletedComponent]
})
export class HomeComponent implements OnInit {
  @ViewChild(AuditCompletedComponent) child:AuditCompletedComponent;
  lstCategoryCompletedAuditsOverTime: CategoryCompletedAuditsOverTime[];
  auditCompletedFrmGrp:FormGroup;
  auditCompleted;
  startDate;
  endDate;
  endDateMilli;
  startDateMilli;
  countauditCompleted: number;

  constructor(private frmBldr: FormBuilder,private router:Router) { }

  ngOnInit() {
    this.setDates();
    
    this.auditCompletedFrmGrp = this.frmBldr.group({
          fromDate: [Date.now(), Validators.required],
          toDate: [Date.now(), Validators.required],
          Category: [''],
          Department: ['']          // user: ['']
        });
    
    this.getAuditCompleted();
  }

  
  onSubmit(formData: any)
  {
  }

  getAuditCompleted()
  {
    this.auditCompleted = AuditCompleted;
    this.auditCompleted.UserId =  1; 
    this.auditCompleted.CategoryId =  1;
    this.auditCompleted.EndMillis = this.endDateMilli; 
    this.auditCompleted.StartMillis = this.startDateMilli; 

    this.lstCategoryCompletedAuditsOverTime = this.child.getAuditCompleted(this.auditCompleted);
  }

  setDates()
  {
        var date = new Date();
        var firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
        var lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);
        var dd = firstDay.getDate();
        var ddd = lastDay.getDate();
        var mm = firstDay.getMonth() + 1;
        var mmm = lastDay.getMonth() + 1;
        var yyyy = lastDay.getFullYear();

        var fromTodayDate = dd + '-'+ mm + '-'+ yyyy;
        var toTodayDate = ddd + '-'+ mmm + '-'+ yyyy;
        this.startDate = fromTodayDate;
        this.endDate = toTodayDate;

        var edate = new Date(lastDay);
        this.endDateMilli = edate.getTime();

        var sdate = new Date(this.startDate);
        this.startDateMilli = sdate.getTime();
  }
}
