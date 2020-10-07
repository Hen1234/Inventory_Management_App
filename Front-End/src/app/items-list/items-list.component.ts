import { Component, OnInit } from '@angular/core';
import { ItemsService } from '../items-service';

@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.scss']
})

export class ItemsListComponent implements OnInit {

  items;
  itemsArray = [] ;


  constructor(private itemService: ItemsService) {}


  ngOnInit(): void {

    this.itemService.getItemsRequest().subscribe(responseData => {
      this.items = responseData;
      console.dir(this.items);
     
      this.convertItemsObjectToArray();
    
    });

   

  }

  convertItemsObjectToArray(){
    this.itemsArray = Object.keys(this.items).map(key => {
      const currentItem = this.items[key];
      return {id: key, name: currentItem.name, description: currentItem.description, count: currentItem.count};
     });

     console.dir(this.itemsArray);
  }


}
