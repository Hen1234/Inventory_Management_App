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
        this.items[id] = {name: name, description: description, count: Number(count)};
        this.itemCounter++;
        return {id: id,  name: name, description: description, count: Number(count)}
    
    }

    removeItem(id){

        if(this.items["item"+id]){

            this.items["item"+id] = undefined;
        }
        else{
           
        }
    }

    withdrawItem(id, amount){

        var currentCount = 0;
        if(this.items["item"+id]){
           currentCount = this.items["item"+id].count;
           console.log("count= "+currentCount);
           console.log("amount= "+amount);
           if(currentCount >= amount){
               console.log("here");
                this.items["item"+id].count = currentCount - Number(amount); 
           }else{
              
           }
        }
        else{
          
        }

    }

    depositItem(id, amount){

        if(this.items["item"+id]){
           this.items["item"+id].count = this.items["item"+id].count + Number(amount);
          
        }
        else{
          
        }

    }
    
}

module.exports = ItemsService;