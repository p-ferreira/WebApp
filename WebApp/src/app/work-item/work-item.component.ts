import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-work-item',
  templateUrl: './work-item.component.html',
  styleUrls: ['./work-item.component.css']
})
export class WorkItemComponent implements OnInit {

  uId : number;
  ID : number;
  Title : string;
  WorkItemType : string;
  IterationPath : string;
  AreaPath : string;
  State : string;
  Guid : string;

  constructor()
   {

   }

  ngOnInit() {

  }

}
