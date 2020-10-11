import { Component, OnInit} from '@angular/core';
import { ItemsService } from '../../items-service';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { ModalStatus } from './items-page.config';
import { Item } from '../items-list/item/item.config';


@Component({
  selector: 'app-items-page',
  templateUrl: './items-page.component.html',
  styleUrls: ['./items-page.component.scss']
})


export class ItemsPageComponent implements OnInit {

  itemsArray: Item[] = [] ;
 
  modalTitle;
  modalStatus;
  modalRef;

  modalItem;
  errorMessage;
  noteMessage;

  withdrawAmountValue;
  depositAmountValue;
  addNameValue;
  addDescriptionValue;
  addCountValue;
  updateNameValue;
  updateDescriptionValue;

  emptyValuesWithdrawOrDeposit;
   
  //For the html to know ModalStaus enum
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
    this.noteMessage = "Note: Empty fields are invalid"; 
  }

  changeAddItemValue(){
    this.errorMessage = this.addCountValue < 0 ? "The value is invalid" : ""; 
    this.noteMessage = !this.addNameValue || !this.addDescriptionValue || 
    (this.addCountValue !== 0 && !this.addCountValue) ? "Note: Empty fields are invalid" : "";
  }

  updateItem(item, content){
    this.modalItem = item;
    this.updateNameValue = this.modalItem.name;
    this.updateDescriptionValue = this.modalItem.description;
    this.modalStatus = ModalStatus.UpdateItem;
    this.modalTitle = "Update Item";
    this.modalRef = this.modalService.open(content);
  }

  changeUpdateItemValue(){
    this.noteMessage = !this.updateNameValue || !this.updateDescriptionValue ? 
    "Note: Empty fields are invalid": "";

  }

  removeItem(item){
    this.itemService.removeItemRequest(item.id).subscribe(responseData => {
      this.itemsArray = this.itemsArray.filter(element => element.id !== responseData);
    })

  }

  withdrawItem(item, content){
    this.modalItem = item;
    this.modalStatus = ModalStatus.WithdrawItem;
    this.modalTitle = "Withdraw Item";
    this.modalRef = this.modalService.open(content);
    this.emptyValuesWithdrawOrDeposit = true;
  }

  changeWithdrawItemValue(){
    this.errorMessage = this.modalItem.count < this.withdrawAmountValue || this.withdrawAmountValue < 0 
    ? "The value is invalid" : ""; 
    this.emptyValuesWithdrawOrDeposit = !this.withdrawAmountValue;
  }

  depositItem(item, content){
    this.modalItem = item;
    this.modalStatus = ModalStatus.DepositItem;
    this.modalTitle = "Deposit Item";
    this.modalRef = this.modalService.open(content);
    this.emptyValuesWithdrawOrDeposit = true;
  }

  changeDepositItemValue(){
    this.errorMessage = this.depositAmountValue < 0 ? "The value is invalid" : ""; 
    this.emptyValuesWithdrawOrDeposit = !this.depositAmountValue;
  }


  saveChanges(){
    switch (this.modalStatus){

      case ModalStatus.AddItem:
        let newItem = {name: this.addNameValue, description: this.addDescriptionValue, count: this.addCountValue};
        this.itemService.addItemRequest(newItem).subscribe((responseData:Item) => {
          this.itemsArray.push(responseData);
        });
        this.addNameValue=""; this.addDescriptionValue=""; this.addCountValue="";
        break;
      
      case ModalStatus.WithdrawItem:
        let withdrawAmount = {id: this.modalItem.id, amount: this.withdrawAmountValue};
        this.itemService.withdrawItemRequest(withdrawAmount).subscribe((responseData:Item) => {
          this.itemsArray = this.itemsArray.map(item => item.id === this.modalItem.id ? responseData : item); 
        })
        this.withdrawAmountValue="";
        break;

      case ModalStatus.UpdateItem:
        let updateName = this.updateNameValue || this.modalItem.name;
        let updateDescription = this.updateDescriptionValue || this.modalItem.description;
        let update = {id: this.modalItem.id, name:updateName,description: updateDescription};
        this.itemService.updateItemRequest(update).subscribe((responseData:Item) => {
          this.itemsArray = this.itemsArray.map(item => item.id === this.modalItem.id ? responseData : item); 
         });
        this.updateNameValue=""; this.updateDescriptionValue="";
         break;

      case ModalStatus.DepositItem:
        let depositAmount = {id: this.modalItem.id, amount: this.depositAmountValue};
        this.itemService.depositItemRequest(depositAmount).subscribe((responseData:Item) => {
          this.itemsArray = this.itemsArray.map(item => item.id === this.modalItem.id ? responseData : item); 
        })
        this.depositAmountValue=0;
        break;

    }

    this.resetChanges();

  }

  resetChanges(){

    this.withdrawAmountValue = "";
    this.depositAmountValue = "";
    this.addNameValue = "";
    this.addDescriptionValue = "";
    this.addCountValue = "";
    this.updateNameValue = "";
    this.updateDescriptionValue = "";
    this.errorMessage= "";
    this.noteMessage= "";
    this.emptyValuesWithdrawOrDeposit = false;

    this.modalRef.close();

  }

}



