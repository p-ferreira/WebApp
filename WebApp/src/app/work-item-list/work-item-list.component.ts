import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'work-item-list',
  templateUrl: './work-item-list.component.html',
  styleUrls: ['./work-item-list.component.css']
})
export class WorkItemListComponent implements OnInit {

  httpClient : HttpClient;
  headers : HttpHeaders;
  
  constructor(_httpClient : HttpClient) { 
    this.httpClient = _httpClient;
    this.headers = new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  ngOnInit() {

    let apiUrl = "http://wiapi2018.azurewebsites.net/api/workitems/GetPage?pageNumber=1";

    var x = this.httpClient
                .get(apiUrl)
                .toPromise()
                .then(
                  res => { // Success
                    console.log(res);
                  });

  }

}
