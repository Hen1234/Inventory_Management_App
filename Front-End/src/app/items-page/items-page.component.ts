import { Component, OnInit } from '@angular/core';
import { ItemsService } from '../items-service';

@Component({
  selector: 'app-items-page',
  templateUrl: './items-page.component.html',
  styleUrls: ['./items-page.component.scss']
})
export class ItemsPageComponent implements OnInit {
  itemsArray = [] ;
 
  postData = {name: "henush3", description: "blabla", count: "10"} 
  

  constructor(private itemService: ItemsService) {}

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

     console.dir(this.itemsArray);
  }

  

  addItem(){

    this.itemService.addItemRequest(this.postData).subscribe(responseData => {
      this.itemsArray.push(responseData);

    
    });

  }

  update(itemID){
    
    console.log("itemID= "+itemID);
    var updateData = {id: itemID, name: "henmorhiii", description: "blabla"} 
    this.itemService.updateItemRequest(updateData).subscribe(responseData => {
        console.dir(responseData);
        this.itemsArray = this.itemsArray.map(item => item.id === itemID ? responseData : item); 
         console.dir(this.itemsArray);
        

    
    });
    

  }

  remove(){
    

  }

  withdraw(){
    

  }

  deposit(){
  

  }


}
