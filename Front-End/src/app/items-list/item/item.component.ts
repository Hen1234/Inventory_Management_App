import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

  @Input() item : {id: string, name: string, description: string, count: number};

  constructor() {}

  ngOnInit(): void {

  }

}
