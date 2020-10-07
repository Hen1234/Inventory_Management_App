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
    this.update.emit(this.item.id);

  }

  removeClick(event){
    this.remove.emit(event);

  }

  withdrawClick(event){
    this.withdraw.emit(event);

  }

  depositClick(event){
    this.deposit.emit(event);

  }

}
