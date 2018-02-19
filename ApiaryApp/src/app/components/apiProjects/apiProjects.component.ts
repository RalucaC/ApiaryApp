import { Component, OnInit } from '@angular/core';
import {APIs} from '../../models/apiProjects';
import {ApisService} from '../../services/apiProjects.service';
import * as _moment from "moment";
const moment = (_moment as any).default ? (_moment as any).default : _moment;

@Component({
  selector: 'app-apis',
  templateUrl: 'apiProjects.component.html',
  styleUrls: ['apiProjects.component.css']
})
export class ApiProjectsComponent implements OnInit {

  /**
   * List of APIs
   * @type {Array}
   */
  apiList: APIs[] = [];

  /**
   * Total number of API.
   * @type {number}
   */
  totalCount: number;

  /**
   * Number of APIs without errors.
   * @type {number}
   */
  passedCount: number;

  /**
   * Number of APIs with errors.
   * @type {number}
   */
  failedCount: number;

  /**
   * User readable format for last API check date.
   * @type {any}
   */
  lastCheckedFromNow : string = null;

  /**
   * Last check date in date format.
   */
  lastCheckTime: any;

  /**
   * Class constructor.
   *
   * @param apisService APIs Service
   */
  constructor(private apisService: ApisService) {

    // set
    this.lastCheckTime = new Date();

    // update the last check time every 5 seconds
    setInterval(() => {
      this.updateTime();
    }, 5000);

  }

  /**
   * Update the last check time using moment.js library
   */
  updateTime(): void {

    this.lastCheckedFromNow = moment(this.lastCheckTime, "YYYYMMDD").fromNow();
  }

  /**
   * Reads the list of API using the API service.
   */
  getApis(): void{

    this.apisService.getApis()
        .subscribe(apis => {

          this.apiList = apis['results'];

          // filter the APIs based on status: passed of failed
          let passed = this.apiList.filter(item => item.passed == true);
          let failed = this.apiList.filter(item => item.errors.length > 0);

          // set the number of passed and failed APIs
          this.totalCount = this.apiList.length;
          this.passedCount = passed.length;
          this.failedCount = failed.length;

          // update the check time
          this.lastCheckTime = moment();
        });

     }

  /**
   * Transforms a unix timestamp in time elapsed from now.
   * @param apiDate
   * @returns {string}
   */
  transformDate(apiDate): string {

    let date = moment.unix(apiDate);
    return moment(date, "YYYYMMDD").fromNow();
  }

  /**
   * Initialize component. Reads the API Projects.
   */
  ngOnInit() {
    this.getApis();
  }

}
