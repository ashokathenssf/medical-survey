import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SurveyService {

  constructor(private httpClient: HttpClient) { }

  public getData(){
    return this.httpClient.get(`https://zt-eng.s3.us-east-1.amazonaws.com/fe-challenge/survey.json`);
  }

  public getSurveyCss(url){
    return this.httpClient.get(url);
  }
}
