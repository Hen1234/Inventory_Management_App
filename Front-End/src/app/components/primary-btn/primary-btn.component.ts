import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-primary-btn',
  templateUrl: './primary-btn.component.html',
  styleUrls: ['./primary-btn.component.scss']
})
export class PrimaryButtonComponent implements OnInit {

 @Input() text= '';
 @Output()  clickButton = new EventEmitter();


  constructor() { }

  ngOnInit(): void {
  }

  onClick(event){
    this.clickButton.emit(event);
  }

}
