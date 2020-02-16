import { Component, OnInit, NgModule, ViewChild } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { ModalManager } from 'ngb-modal';

@Component({
  selector: 'cardVideo',
  templateUrl: './cardVideo.component.html',
  styleUrls: ['./cardVideo.component.scss']
})
export class CardVideoComponent implements OnInit {

	@ViewChild('myModal') myModal;
    private modalRef;

	cardVideo:any[]=[1,2,3,4]

  constructor(private modalService: ModalManager) { }

  ngOnInit() {
  }
 openModal(){

     this.modalRef = this.modalService.open(this.myModal, {
    "title": "Your Custom Modal",
    "size": "lg",
    "modalClass": "",
    "hideCloseButton": false,
    "centered": true,
    "backdrop": true,
    "animation": true,
    "keyboard": true,
    "closeOnOutsideClick": true,
    "backdropClass": "modal-backdrop"
        })
    }
    closeModal(){
        this.modalService.close(this.modalRef);
        //or this.modalRef.close();
    }
}
