import { Component, OnInit } from '@angular/core';
import { WorkItemService } from '../work-item/work-item.service';
import { WorkItemComponent } from '../work-item/work-item.component';
import { Page } from '../models/page';

@Component({
  selector: 'work-item-list',
  templateUrl: './work-item-list.component.html',
  styleUrls: ['./work-item-list.component.css']
})
export class WorkItemListComponent implements OnInit {

  service: WorkItemService;
  workItems : WorkItemComponent[] = []
  page : Page;
  
   constructor(service: WorkItemService) 
   { 
      this.service = service;
      
      this.service.getPage(1)
             .subscribe(data => {
                           this.page = data;
                           console.log(this.page);
                        }, erro => console.log(erro));      
        
   }

   changePage(pageNumber : number)
   {
      this.service.getPage(pageNumber)
          .subscribe(data => {
                        this.page = data;
                        console.log(this.page);
                    }, erro => console.log(erro));    
   }


  ngOnInit() {

    

  }

}
