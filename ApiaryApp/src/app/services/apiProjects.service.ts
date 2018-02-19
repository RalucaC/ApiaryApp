import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import {APIs} from "../models/apiProjects";
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class ApisService {

  private apisUrl = 'https://private-anon-2c9192c214-architectsdashboardateam.apiary-mock.com/results';
  constructor(private http: HttpClient,) {
  }

  getApis(): Observable<any> {

    return this.http.get(this.apisUrl);
  }
}
