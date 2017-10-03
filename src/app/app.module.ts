import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { AuditCompletedComponent } from './components/audit-completed/audit-completed.component';
import { ExpectedAuditsComponent } from './components/expected-audits/expected-audits.component';
import { ExpiredOverDueAuditsComponent } from './components/expired-over-due-audits/expired-over-due-audits.component';
import { ScoreComponent } from './components/score/score.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AuthGuard } from './guards/auth.guard';
import { NonAuthGuard } from './guards/nonAuth.guard';
import { AuditService } from './services/audit.service';
import { HelpComponent } from './components/help/help.component';
import { CalendarModule } from 'angular-calendar';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { CalenderControlComponent } from './components/calender-control/calender-control.component';

@NgModule({
  declarations: [ AppComponent, AuditCompletedComponent, ScoreComponent, ExpectedAuditsComponent, ExpiredOverDueAuditsComponent, HomeComponent, NavbarComponent, HelpComponent, CalenderControlComponent],
  imports: [ BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule, HttpModule, 
    NgbModalModule.forRoot(),CalendarModule.forRoot()],
  providers: [AuditService, AuthGuard, NonAuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
