import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuditService } from '../services/audit.service';

@Injectable()
export class AuthGuard implements CanActivate {
  redirectUrl;

  constructor(private auditService: AuditService, private router: Router)
  { }

  canActivate(route: ActivatedRouteSnapshot, snapshot : RouterStateSnapshot) {
    if(this.auditService.loggedIn()) {
        return true;
    }else{ 
        this.redirectUrl = snapshot.url;
        this.router.navigate(['/home']);
        return false;
    }
  }
}