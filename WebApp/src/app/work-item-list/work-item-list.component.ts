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
  previousPage : Number = 1;
  currentPage : Number = 2;
  nextPage : Number = 3;  
  
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
        
      if(pageNumber - 1 != 0)
         this.previousPage = pageNumber - 1;
      else
         this.previousPage = 1;

      if(pageNumber + 1 <= this.page.NumberOfPages)
        this.nextPage = pageNumber + 1;
      else
        this.nextPage = this.page.NumberOfPages;

      // if(this.page.PageNumber == this.page.PageNumber)
         this.currentPage = pageNumber;

      this.service.getPage(pageNumber)
          .subscribe(data => {
                        this.page = data;
                        console.log(pageNumber);
                    }, erro => console.log(erro));    


   }   


  ngOnInit() {

    

  }

}
