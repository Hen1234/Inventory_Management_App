class ItemsService{

    //Items vocabulary
    items;

    itemCounter;
     
    constructor(){
        
        this.items = {};
        this.itemCounter = 1;
    }

    //TODO: return message on "else"- "id doesn't exist" or "withdraw is unvalid" 
    //TODO: change to- res.json
    
    getItems(){
        return this.items;
    }

  
    getItemByID(id){
        var givenItem = this.items["item"+id];
        if(givenItem){
            return givenItem;
        }
        else{
            
        }
    }

    
    updateItem(id, name, description){

        
        if(this.items[id]){
            this.items[id].name = name;
            this.items[id].description = description;  
            return {id, name, description, count: (Number) (this.items[id].count)} 
            
        }
        else{
            
        }
    }

    addItem(name, description, count){
        
        const id = "item"+this.itemCounter;
        this.items[id] = {name, description, count: Number(count)};
        this.itemCounter++;
        return {id: id,  name, description, count: Number(count)}
        
    
    }

    removeItem(id){

        if(this.items[id]){
            delete this.items[id];
            return id;

        }
        else{
           
        }
    }

   

    withdrawItem(id, amount){

        var currentCount = 0;
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