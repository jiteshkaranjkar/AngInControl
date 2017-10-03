import  { RouterModule, Routes } from '@angular/router'
import { NgModule } from '@angular/core';
import { HomeComponent } from './components/home/home.component';
import { HelpComponent } from './components/help/help.component';
import { AuditCompletedComponent } from './components/audit-completed/audit-completed.component';
import { ExpectedAuditsComponent } from './components/expected-audits/expected-audits.component';
import { ExpiredOverDueAuditsComponent } from './components/expired-over-due-audits/expired-over-due-audits.component';
import { ScoreComponent } from './components/score/score.component';
import { AuthGuard } from './guards/auth.guard';
import { NonAuthGuard } from './guards/nonAuth.guard';

const routes: Routes = [
  { path: 'home',  component: HomeComponent },
  { path: 'app-help',  component: HelpComponent },
  { path: 'app-audit-completed',  component: AuditCompletedComponent, canActivate: [AuthGuard]},
  { path: 'expected-audits', component: ExpectedAuditsComponent, canActivate: [NonAuthGuard] },
  { path: 'expired-over-due-audits',  component: ExpiredOverDueAuditsComponent, canActivate:[NonAuthGuard]},
  { path: 'app-score',  component: ScoreComponent, canActivate: [AuthGuard] },
  { path: '**', component: HomeComponent }
];

@NgModule({
  declarations: [  ],
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],
  providers: [],
  bootstrap: []
})
export class AppRoutingModule { }