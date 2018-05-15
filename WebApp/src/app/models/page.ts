import { WorkItemComponent } from '../work-item/work-item.component';

export class Page {

    PageNumber : number;
    PageSize : number;
    NumberOfPages : number;
    TotalNumberOfRecords : number;
    PageItems : WorkItemComponent[];

    constructor()
    {

    }
    
}
