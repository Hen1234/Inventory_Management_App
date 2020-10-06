class ItemsService{

    //Items vocabulary
    items;

    itemCounter;
     
    constructor(){
        
        this.items = {};
        this.itemCounter = 1;
    }

    //TODO: return message on "else"- "id doesn't exist" or "withdraw is unvalid" 
    
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

        if(this.items["item"+id]){
            this.items["item"+id].name = name;
            this.items["item"+id].description = description;   
        }
        else{
            
        }
    }

    addItem(name, description, count){
        
        this.items["item"+this.itemCounter] = {name: name, description: description, count: Number(count)};
        this.itemCounter++;
    
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