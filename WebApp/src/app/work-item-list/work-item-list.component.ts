import { Component, OnInit } from '@angular/core';
//import { HttpClient, HttpHeaders } from '@angular/common/http';
import { WorkItemService } from '../work-item/work-item.service';

@Component({
  selector: 'work-item-list',
  templateUrl: './work-item-list.component.html',
  styleUrls: ['./work-item-list.component.css']
})
export class WorkItemListComponent implements OnInit {

  service: WorkItemService;
  // httpClient : HttpClient;
  // headers : HttpHeaders;
  
   constructor(service: WorkItemService) { 
     this.service = service;
     service.getX();
  //   this.httpClient = _httpClient;
  //   this.headers = new HttpHeaders({ 'Content-Type': 'application/json' })
   }



  ngOnInit() {

    let apiUrl = "http://wiapi2018.azurewebsites.net/api/workitems/GetPage?pageNumber=1";



    // var x = this.httpClient
    //             .get(apiUrl)
    //             .toPromise()
    //             .then(
    //               res => { // Success
    //                 console.log(res);
    //               });

  }

  objs(){
    return `{"PageNumber":1,"PageSize":10,"NumberOfPages":2139,"TotalNumberOfRecords":21383,"PageItems":[{"uId":1,"ID":4,"Title":"Generic Project 1","WorkItemType":"Generic Project 1\\Iteration 3","IterationPath":"Issue","AreaPath":"Active","State":"Generic Issue over a generic implementation","Guid":"9944f15c-846a-42c1-9eeb-8f45822d1900"},{"uId":2,"ID":4,"Title":"Generic Project 1","WorkItemType":"Generic Project 1\\Iteration 3","IterationPath":"Issue","AreaPath":"Active","State":"Generic Issue over a generic implementation","Guid":"042fbae8-a469-4248-877e-3e3ca9adb0b5"},{"uId":3,"ID":7,"Title":"SmartProject","WorkItemType":"SmartProject","IterationPath":"User Story","AreaPath":"New","State":"Inspirational user story for a smart project","Guid":"be20d490-0a5c-48b7-8b94-109af92d1672"},{"uId":4,"ID":1,"Title":"MyFirstProject","WorkItemType":"MyFirstProject\\Iteration 1","IterationPath":"Bug","AreaPath":"Active","State":"WorkItem Test","Guid":"5cb5a165-0c2c-4963-a723-4510090a39fc"},{"uId":5,"ID":4,"Title":"Generic Project 1","WorkItemType":"Generic Project 1\\Iteration 3","IterationPath":"Issue","AreaPath":"Active","State":"Generic Issue over a generic implementation","Guid":"62b07537-55e7-4df3-b462-f657203bd53d"},{"uId":6,"ID":7,"Title":"SmartProject","WorkItemType":"SmartProject","IterationPath":"User Story","AreaPath":"New","State":"Inspirational user story for a smart project","Guid":"971ff7f0-ba91-41fa-a6fd-9e946dcc428e"},{"uId":7,"ID":1,"Title":"MyFirstProject","WorkItemType":"MyFirstProject\\Iteration 1","IterationPath":"Bug","AreaPath":"Active","State":"WorkItem Test","Guid":"7eb2ad82-a003-4190-8640-e3a189c36e0c"},{"uId":8,"ID":4,"Title":"Generic Project 1","WorkItemType":"Generic Project 1\\Iteration 3","IterationPath":"Issue","AreaPath":"Active","State":"Generic Issue over a generic implementation","Guid":"770edb0e-e9cd-42a8-8627-beb7ba814797"},{"uId":9,"ID":7,"Title":"SmartProject","WorkItemType":"SmartProject","IterationPath":"User Story","AreaPath":"New","State":"Inspirational user story for a smart project","Guid":"a40d7019-fb37-40ba-bdb5-483538d12e27"},{"uId":10,"ID":1,"Title":"MyFirstProject","WorkItemType":"MyFirstProject\\Iteration 1","IterationPath":"Bug","AreaPath":"Active","State":"WorkItem Test","Guid":"056629cd-7f05-4f28-88fa-24525bc40913"}]}`;
  }
}
