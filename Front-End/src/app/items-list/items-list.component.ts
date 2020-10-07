import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import { ItemsService } from '../items-service';

@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.scss']
})

export class ItemsListComponent implements OnInit {

  @Input() itemsArray;
  @Output() updateItem = new EventEmitter();
  @Output() removeItem = new EventEmitter();
  @Output() withdrawItem = new EventEmitter();
  @Output() depositItem = new EventEmitter();

  constructor(private itemService: ItemsService) {}

  ngOnInit(): void {

  
  }

  updateClick(itemID){
    this.updateItem.emit(itemID);

  }

  removeClick(event){
    this.removeItem.emit(event);

  }

  withdrawClick(event){
    this.withdrawItem.emit(event);

  }

  depositClick(event){
    this.depositItem.emit(event);

  }



  


}
