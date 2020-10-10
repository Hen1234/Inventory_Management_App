import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import { Item } from './item/item.config';

@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.scss']
})

export class ItemsListComponent implements OnInit {

  @Input() itemsArray: Item[];
  @Output() updateItem = new EventEmitter();
  @Output() removeItem = new EventEmitter();
  @Output() withdrawItem = new EventEmitter();
  @Output() depositItem = new EventEmitter();

  constructor() {}

  ngOnInit(): void {

  
  }

  updateClick(item){
    this.updateItem.emit(item);

  }

  removeClick(item){
    this.removeItem.emit(item);

  }

  withdrawClick(item){
    this.withdrawItem.emit(item);

  }

  depositClick(item){
    this.depositItem.emit(item);

  }



  


}
