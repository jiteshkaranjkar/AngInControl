import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuditService } from '../../services/audit.service';
import { AuditCompleted, Attributes, CategoryCompletedAuditsOverTime, CompletedAuditsColored} from '../../models/auditCompleted';
import { Observable } from 'rxjs/Rx'

@Component({
  selector: 'app-audit-completed',
  templateUrl: './audit-completed.component.html',
  styleUrls: ['./audit-completed.component.css']
})

export class AuditCompletedComponent implements OnInit {
    audits : AuditCompleted;
    lstColored: CompletedAuditsColored[];
    public lstCategoryCompletedAuditsOverTime: CategoryCompletedAuditsOverTime[];
    
    constructor(private auditService: AuditService)
    {}

  ngOnInit() {  }

  getAuditCompleted(auditCompleted : AuditCompleted)
  {
    var lstAudits;
    var body  = '{ "UserId": "' + auditCompleted.UserId + '",  "CategoryId": "' + auditCompleted.CategoryId + '", "StartMillis":  '+ auditCompleted.StartMillis +' , "EndMillis": '+ auditCompleted.EndMillis +'';
    this.auditService.getCompletedAuditAuditsOverTime(body).
        subscribe(audit => { lstAudits = audit; 
          this.lstCategoryCompletedAuditsOverTime = JSON.parse(lstAudits._body);
          this.lstCategoryCompletedAuditsOverTime = this.lstCategoryCompletedAuditsOverTime.filter(function(x) {
              return  x.CompletedAuditCount != 0;
          });

         let cnt = 0;
         let lstAuditColors: { Id:number; DateLabel: string; CompletedAuditCount:number; PassedAuditCount:number; FailedAuditCount:number; Color: string; }[] = [];
         ///Copied into another array to show the colored progress bar, else this peice of code is not required
         for (var i=0; i<this.lstCategoryCompletedAuditsOverTime.length; i++) {
             let colored = new CompletedAuditsColored();
            lstAuditColors.push(colored);
            lstAuditColors[cnt].CompletedAuditCount = this.lstCategoryCompletedAuditsOverTime[i].CompletedAuditCount;
            lstAuditColors[cnt].DateLabel = this.lstCategoryCompletedAuditsOverTime[i].DateLabel;
            lstAuditColors[cnt].FailedAuditCount = this.lstCategoryCompletedAuditsOverTime[i].FailedAuditCount;
            lstAuditColors[cnt].Id = this.lstCategoryCompletedAuditsOverTime[i].Id;
            lstAuditColors[cnt].PassedAuditCount = this.lstCategoryCompletedAuditsOverTime[i].PassedAuditCount;
            
            if(this.lstCategoryCompletedAuditsOverTime[i].FailedAuditCount === 0) 
            {
              lstAuditColors[cnt].Color = "Green";
            }
            else if(this.lstCategoryCompletedAuditsOverTime[i].PassedAuditCount === 0) 
            {
              lstAuditColors[cnt].Color = "Red";
            }
            else 
            {
              lstAuditColors[cnt].Color = "Black";
            }
            cnt++;
          }
          this.lstColored = lstAuditColors;
        });
    return null;
  }
}