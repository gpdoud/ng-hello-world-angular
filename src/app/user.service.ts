import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class UserService {

  listUrl: string = "http://prs.doudsystems.com/Users/List";

  list(): Observable<any> {
    return this.http.get(this.listUrl) as Observable<any>;
  }
  constructor(private http: HttpClient) { }

}
