import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WorkItemService {

  constructor() { }

  getX(){
    alert("FOI");
  }
}
