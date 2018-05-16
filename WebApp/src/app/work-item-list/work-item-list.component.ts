import { Component, OnInit, Inject  } from '@angular/core';
import { WorkItemService } from '../services/work-item.service';
import { WorkItem } from '../models/workItem';
import { Page } from '../models/page';
import { NGModalComponent } from '../ngmodal/ngmodal.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'work-item-list',
  templateUrl: './work-item-list.component.html',
  styleUrls: ['./work-item-list.component.css']
})
export class WorkItemListComponent implements OnInit {

  service: WorkItemService;
  workItems : WorkItem[] = []
  page : Page;
  previousPage : Number = 1;
  currentPage : Number = 2;
  nextPage : Number = 3;  


   constructor(service: WorkItemService, public modalService : NgbModal) 
   { 
      this.service = service;                   
   }

   changePage(pageNumber : number)
   {    
        
      if(pageNumber == this.page.PageNumber) //To avoid to load the same page
        return;

      if(pageNumber == 1){
          this.previousPage = 1;
          this.currentPage = 2;
          this.nextPage = 3;
      }
      else if(pageNumber == this.page.NumberOfPages){
          this.previousPage = pageNumber - 2;
          this.currentPage = pageNumber - 1;
          this.nextPage = pageNumber;
      }
      else{
          this.previousPage = pageNumber -1;
          this.currentPage = pageNumber;
          this.nextPage = pageNumber +1;
      }     

      this.service.getPage(pageNumber)
          .subscribe(data => {
                        this.page = data;
                        console.log(pageNumber);
                    }, erro => console.log(erro));    


   }   


  ngOnInit() {

    this.service.getPage(1)
    .subscribe(data => {
                  this.page = data;
                  console.log(this.page);
               }, erro => console.log(erro)); 
               
  }

  openDialog (workItem : WorkItem)
  {
    const modalRef = this.modalService.open(NGModalComponent);
    modalRef.componentInstance.workItem = workItem;
  }
} 