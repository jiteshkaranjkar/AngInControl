import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuditService } from '../services/audit.service';

@Injectable()
export class NonAuthGuard implements CanActivate {

  constructor(private auditService: AuditService, private router: Router)
  { }

  canActivate() {
    if(this.auditService.loggedIn()) {
        this.router.navigate(['/']);
        return false;
    }else{ 
        return true;
    }
  }
}