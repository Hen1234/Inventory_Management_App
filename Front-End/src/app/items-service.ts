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

    addItemRequest(postData){

        
        return this.http
        .post< {}>(
            'http://localhost:3000/items/addItem',
            postData
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

    removeItemRequest(){

        this.http
        .delete< {}>(
            'http://localhost:3000/items/removeItem/1',
        
        )
        .subscribe(responseData => {
            console.log(responseData);
        });

    }

    withdrawItemRequest(){

        const putData = {id: "4", amount:"5"} 
        this.http
        .put< {}>(
            'http://localhost:3000/items/withdrawItem',
            putData
        )
        .subscribe(responseData => {
            //console.log(responseData);
        });

    }

    depositItemRequest(){

        const putData = {id: "4", amount:"6"} 
        this.http
        .put< {}>(
            'http://localhost:3000/items/depositItem',
            putData
        )
        .subscribe(responseData => {
            //console.log(responseData);
        });

    }




}