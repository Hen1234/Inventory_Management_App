import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-primary-btn',
  templateUrl: './primary-btn.component.html',
  styleUrls: ['./primary-btn.component.scss']
})
export class PrimaryButtonComponent implements OnInit {

 @Input() text= '';

  constructor() { }

  ngOnInit(): void {
  }

}
