import { Component, OnInit } from '@angular/core';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';



@Component({
  selector: 'ngmodal',
  templateUrl: './ngmodal.component.html',
  styleUrls: ['./ngmodal.component.css']
})
export class NGModalComponent {
  constructor(public activeModal: NgbActiveModal) {}
}
