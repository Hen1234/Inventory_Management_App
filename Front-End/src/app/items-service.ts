import { HttpClient } from '@angular/common/http';
import {Injectable} from '@angular/core';
import { title } from 'process';


@Injectable({providedIn: 'root'})

export class ItemsService{

    constructor(private http: HttpClient){}

    getItemsRequest(){

        return this.http
        .get< {}>(
            'http://localhost:3000/items/getItems',
        
        );
       
    }

    addItemRequest(newItem){

        
        return this.http
        .post< {}>(
            'http://localhost:3000/items/addItem',
            newItem
        )
       

    }

    updateItemRequest(updateData){

        
        return this.http
        .put< {}>(
            'http://localhost:3000/items/updateItem',
            updateData
        )
       

    }

    getItemRequest(){

        this.http
        .get< {}>(
            'http://localhost:3000/items/getItemByID/1',
        
        )
        .subscribe(responseData => {
            console.log(responseData);
        });

    }

    removeItemRequest(itemID){
        console.log(itemID);

        return this.http
        .delete< {}>(
            'http://localhost:3000/items/removeItem/'+itemID,
        
        )

    }

    withdrawItemRequest(withdrawAmount){

        return this.http
        .put< {}>(
            'http://localhost:3000/items/withdrawItem',
            withdrawAmount
        )
       

    }

    depositItemRequest(depositAmount){

        return this.http
        .put< {}>(
            'http://localhost:3000/items/depositItem',
            depositAmount
        )

    }




}