import { Component, OnInit, ViewChild } from '@angular/core';
import { element } from 'protractor';
import { ItemsService } from '../items-service';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { ModalStatus } from './items-page.config';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-items-page',
  templateUrl: './items-page.component.html',
  styleUrls: ['./items-page.component.scss']
})


export class ItemsPageComponent implements OnInit {

  itemsArray = [] ;
 
  modalTitle;
  modalStatus;
  modalRef;

  modalItem;
  errorMessage1 = '';
  errorMessage2 = '';

  withdrawAmountValue = 0;
  depositAmountValue = 0;
  addNameValue = "";
  addDescriptionValue="";
  addCountValue;
  updateNameValue = "";
  updateDescriptionValue="";
   
  //for the html to know ModalStaus enum
  ModalStatus = ModalStatus;
 
  constructor(private itemService: ItemsService, private modalService: NgbModal) {}

  ngOnInit(): void {
    this.itemService.getItemsRequest().subscribe(responseData => {
      this.convertItemsObjectToArray(responseData);
    
    });
  }

  convertItemsObjectToArray(itemsObject){
    this.itemsArray = Object.keys(itemsObject).map(key => {
      const currentItem = itemsObject[key];
      return {id: key, name: currentItem.name, description: currentItem.description, count: currentItem.count};
     });
  }

  

  addItem(content){
    this.modalStatus = ModalStatus.AddItem;
    this.modalTitle = "Add Item";
    this.modalRef = this.modalService.open(content);
    this.errorMessage1 = "Please fill all the fiels to add a new item"; 
  }


  changeAddValue(){
    this.errorMessage2 = this.addCountValue < 0 ? "The amount value is invalid" : ""; 
    this.errorMessage1 = !this.addNameValue || !this.addDescriptionValue || !this.addCountValue ? 
    "Please fill all the fiels to add a new item" : "";
  }

  update(item, content){
    this.modalItem = item;
    this.modalStatus = ModalStatus.UpdateItem;
    this.modalTitle = "Update Item";
    this.modalRef = this.modalService.open(content);
    this.errorMessage1 = "Please fill at least on of the fiels to update the item's details"; 
  }

  changeUpdateValue(){
    this.errorMessage1 = !this.updateNameValue && !this.updateDescriptionValue ? 
    "Please fill at least on of the fiels to update the item's details" : "";
  }

  remove(item){
    this.itemService.removeItemRequest(item.id).subscribe(responseData => {
      this.itemsArray = this.itemsArray.filter(element => element.id !== responseData);
    })

  }


  withdraw(item, content){
    this.modalItem = item;
    this.modalStatus = ModalStatus.WithdrawItem;
    this.modalTitle = "Withdraw Item";
    this.modalRef = this.modalService.open(content);
  }

  changeWithdrawValue(){

    console.log(this.withdrawAmountValue);
    this.errorMessage1 = this.modalItem.count < this.withdrawAmountValue || this.withdrawAmountValue < 0
     ? "The amount value is invalid" : ""; 
    
  }

  deposit(item, content){
    this.modalItem = item;
    this.modalStatus = ModalStatus.DepositItem;
    this.modalTitle = "Deposit Item";
    this.modalRef = this.modalService.open(content);
  }

  changeDepositValue(){
    this.errorMessage1 = this.depositAmountValue < 0 ? "The amount value is invalid" : ""; 
  }


  saveChanges(){
    switch (this.modalStatus){

      case ModalStatus.AddItem:
        let newItem = {name: this.addNameValue, description: this.addDescriptionValue, count: this.addCountValue};
        this.itemService.addItemRequest(newItem).subscribe(responseData => {
          this.itemsArray.push(responseData);
        });
        this.addNameValue=""; this.addDescriptionValue=""; this.addCountValue="";
        break;
      
      case ModalStatus.WithdrawItem:
        let withdrawAmount = {id: this.modalItem.id, amount: this.withdrawAmountValue};
        this.itemService.withdrawItemRequest(withdrawAmount).subscribe(responseData => {
          this.itemsArray = this.itemsArray.map(item => item.id === this.modalItem.id ? responseData : item); 
        })
        this.withdrawAmountValue=0;
        break;

      case ModalStatus.UpdateItem:
        let updateName = this.updateNameValue || this.modalItem.name;
        let updateDescription = this.updateDescriptionValue || this.modalItem.description;
        let update = {id: this.modalItem.id, name:updateName,description: updateDescription};
        this.itemService.updateItemRequest(update).subscribe(responseData => {
          this.itemsArray = this.itemsArray.map(item => item.id === this.modalItem.id ? responseData : item); 
         });
        this.updateNameValue=""; this.updateDescriptionValue="";
         break;

      case ModalStatus.DepositItem:
        let depositAmount = {id: this.modalItem.id, amount: this.depositAmountValue};
        this.itemService.depositItemRequest(depositAmount).subscribe(responseData => {
          this.itemsArray = this.itemsArray.map(item => item.id === this.modalItem.id ? responseData : item); 
        })
        this.depositAmountValue=0;
        break;

    }

    this.modalRef.close();

  }

}



