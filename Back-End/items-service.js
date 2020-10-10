class ItemsService{

    //Items list
    items;

    itemCounter;
     
    constructor(){
        
        this.items = {};
        this.itemCounter = 1;
    }

    //TODO: return message on "else"- "id doesn't exist" or "withdraw is unvalid" 
    //TODO: change to- res.json
    
    /**
     * The function returns the items list
     */
    getItems(){
        return this.items;
    }

    /**
     * The function returns the item with the given ID
     * @param {*} id 
     */
    getItemByID(id){
        const givenItem = this.items["item"+id];
        if(givenItem){
            return givenItem;
        }
        else{
            
        }
    }

    /**
     * The function updates name and description of the item with the given ID
     * @param {*} id 
     * @param {*} name 
     * @param {*} description 
     */
    updateItem(id, name, description){
        if(this.items[id]){
            this.items[id].name = name;
            this.items[id].description = description;  
            return {id, name, description, count: (Number) (this.items[id].count)} 
            
        }
        else{
            
        }
    }

    /**
     * The function adds a new item to the items list
     * @param {*} name 
     * @param {*} description 
     * @param {*} count 
     */
    addItem(name, description, count){
        
        const id = "item"+this.itemCounter;
        this.items[id] = {name, description, count: Number(count)};
        this.itemCounter++;
        return {id,  name, description, count: Number(count)}
        
    
    }

    /**
     * The function removes the item with the given ID from the items list
     * @param {*} id 
     */
    removeItem(id){

        if(this.items[id]){
            delete this.items[id];
            return id;

        }
        else{
           
        }
    }

    /**
     * The function gets an amount for withdrawing and updates the item's amount with the given ID accordingly 
     * @param {*} id 
     * @param {*} amount 
     */
    withdrawItem(id, amount){

        let currentCount = 0;
        if(this.items[id]){
           currentCount = this.items[id].count;
           if(currentCount >= amount){
                this.items[id].count = currentCount - Number(amount); 
                return {id, name:this.items[id].name, description:this.items[id].description, count:this.items[id].count}
             
           }else{
              
           }
        }
        else{
          
        }

    }

    /**
     * The function gets an amount for depositing and updates the item's amount with the given ID accordingly 
     * @param {*} id 
     * @param {*} amount 
     */
    depositItem(id, amount){

        if(this.items[id]){
           this.items[id].count = this.items[id].count + Number(amount);
           return {id, name:this.items[id].name, description:this.items[id].description, count:this.items[id].count}         
        }
        else{
          
        }

    }
    
}

module.exports = ItemsService;