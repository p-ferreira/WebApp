import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { WorkItemComponent } from './work-item.component';
import { Observable } from 'rxjs';
import { Page } from '../models/page';

@Injectable({
  providedIn: 'root'
})
export class WorkItemService {

  httpClient : HttpClient;
  headers : HttpHeaders;
  url : string = "http://wiapi2018.azurewebsites.net/api/workitems/GetPage?";

  constructor( _httpClient: HttpClient)
   {
        this.httpClient = _httpClient;
        this.headers = new HttpHeaders({ 'Content-Type': 'application/json' })
   }




  getPage(pageNumber : number) : Observable<Page>{
      return this.httpClient
                 .get<Page>(`${this.url}pageNumber=${pageNumber}`);                 
  }
}
