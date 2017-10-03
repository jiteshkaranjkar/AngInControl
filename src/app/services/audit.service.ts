import { Injectable, OnInit } from "@angular/core";
import { Http, Response, Headers, RequestOptions } from "@angular/http";
// import { Observable } from 'rxjs/Observable';
// import 'rxjs/add/operator/catch';
// import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Rx'
import { CategoryCompletedAuditsOverTime } from '../models/auditCompleted';

@Injectable()
export class AuditService{
  options;
  //helpAuditURL:string ='http://incontrolpty.australiaeast.cloudapp.azure.com:7123/WebServices/Help/Api/POST-api-CompletedAuditsOverTime';
  baseUrl:string = 'http://incontrolpty.australiaeast.cloudapp.azure.com:7123/WebServices';
  baseCategoryUrl:string = 'http://incontrolpty.australiaeast.cloudapp.azure.com:7123/WebServices/api/Category';
  baseUserUrl:string = 'http://incontrolpty.australiaeast.cloudapp.azure.com:7123/webservices/api/users'
  constructor(private http:Http)
  {

  }

  loggedIn()
  {
    return true;//tokenNotExpired();
  }

  getUsers()
  {
    console.log(btoa('admin:topcat'));
      var body  = JSON.stringify('{ "UserId": "1",  "CategoryId": "1", "StartMillis": 1472688000000, "EndMillis": 1506815999000}');
      this.options = new RequestOptions({
        headers: new Headers({
          'Content-Type':'application/json'
      })
    });
      return this.http.post(this.baseUserUrl, this.options)
          .map((res : Response) => { console.log(res); return res.text})
          .catch(this.handleError);
  }

  getCategories()
  {
    console.log(btoa('admin:topcat'));
      var body  = '{"UserId":"1","CategoryId":"1","LoadAttributes":true}';
      this.options = new RequestOptions({
        headers: new Headers({
          'Content-Type':'application/json',
      })
    });
      
      return this.http.post(this.baseCategoryUrl, body, this.options)
          .map((res : Response) => { console.log(res); return res.text})
          .catch(this.handleError);
  }

  getCompletedAuditAuditsOverTime(body:any): Observable<CategoryCompletedAuditsOverTime[]>
  {
       this.options = new RequestOptions({
        headers: new Headers({
          'Content-Type':'application/json',
          //'Authorization':'Basic ' +  btoa('admin:topcat')
        })
      });
      return this.http.post(this.baseUrl + '/api/CompletedAuditsOverTime', body, this.options)
          .map((response : Response) => { return response; })
          .catch(this.handleErrorObservable);
   }

    private handleErrorObservable (error: Response | any) {
      console.error(error.message || error);
      return Observable.throw(error.message || error);
    }
      
    private handleError (error: Response | any) {
      let errMsg: string;
      if (error instanceof Response) {
        const body = error.json() || '';
        const err = body.error || JSON.stringify(body);
        errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
      } else {
        errMsg = error.message ? error.message : error.toString();
      }
      console.error(errMsg);
      return Observable.throw(errMsg);
    }
}
