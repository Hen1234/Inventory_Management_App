import { HttpClient } from '@angular/common/http';
import {Injectable} from '@angular/core';


@Injectable({providedIn: 'root'})

export class ItemsService{

    constructor(private http: HttpClient){}

    getItemsRequest(){
        return this.http.get('http://localhost:3000/items/getItems');
    }

    addItemRequest(newItem){
        return this.http.post('http://localhost:3000/items/addItem',newItem)
    }

    updateItemRequest(updateData){
        return this.http.put('http://localhost:3000/items/updateItem',updateData)
    }

    getItemRequest(){
        return this.http.get('http://localhost:3000/items/getItemByID/1')
    }

    removeItemRequest(itemID){
        return this.http.delete('http://localhost:3000/items/removeItem/'+ itemID)
    }

    withdrawItemRequest(withdrawAmount){
        return this.http.put('http://localhost:3000/items/withdrawItem',withdrawAmount)
    }

    depositItemRequest(depositAmount){
        return this.http.put('http://localhost:3000/items/depositItem',depositAmount)
    }
}