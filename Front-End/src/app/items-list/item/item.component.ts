import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

  @Input() item : {id: string, name: string, description: string, count: number};
  @Output() update = new EventEmitter();
  @Output() remove = new EventEmitter();
  @Output() withdraw = new EventEmitter();
  @Output() deposit = new EventEmitter();

  constructor() {}

  ngOnInit(): void {

  }

  updateClick(event){
    this.update.emit(this.item);

  }

  removeClick(event){
    this.remove.emit(this.item);

  }

  withdrawClick(event){
    this.withdraw.emit(this.item);

  }

  depositClick(event){
    this.deposit.emit(this.item);

  }

}
