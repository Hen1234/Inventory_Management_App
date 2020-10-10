class ItemsService{

    items;
    itemCounter;
     
    constructor(){
        this.items = {};
        this.itemCounter = 0;
    }
    
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
        const givenItem = this.items[id];
        if(givenItem){
            return givenItem;
        }
        else{
            const error= new Error('Item Not Found');
            error.status = 404;
            throw error;
        }
    }

    /**
     * The function updates name and description of the item with the given ID
     * @param {*} id 
     * @param {*} name 
     * @param {*} description 
     */
    updateItem(id, name, description){
        const item = this.getItemByID(id);
        
        item.name = name;
        item.description = description;  
        return {id, name, description, count: (Number) (item.count)}      
    }

    /**
     * The function adds a new item to the items list
     * @param {*} name 
     * @param {*} description 
     * @param {*} count 
     */
    addItem(name, description, count){ 
        this.itemCounter++;    
        const id = "item"+this.itemCounter;
        this.items[id] = {name, description, count: Number(count)};
        return {id,  name, description, count: Number(count)};
    }

    /**
     * The function removes the item with the given ID from the items list
     * @param {*} id 
     */
    removeItem(id){
        delete this.items[id];
        return id;
    }

    /**
     * The function gets an amount for withdrawing and updates the item's amount with the given ID accordingly 
     * @param {*} id 
     * @param {*} amount 
     */
    withdrawItem(id, amount){
        const item = this.getItemByID(id);
        return this.checkWithdrawValidAmount(amount, item, id);
    }

    checkWithdrawValidAmount(amount, item, id){
        if(item.count >= amount && amount >= 0){
            item.count = item.count - Number(amount); 
            return {id, name:item.name, description:item.description, count:item.count}     
        }else{
            const error= new Error('Withdraw Amount is Invalid');
            error.status = 400;
            throw error;  
        }
    }

    /**
     * The function gets an amount for depositing and updates the item's amount with the given ID accordingly 
     * @param {*} id 
     * @param {*} amount 
     */
    depositItem(id, amount){
        const item = this.getItemByID(id);
        return this.checkDepositValidAmount(amount, item, id);         
    }

    checkDepositValidAmount(amount, item, id){
        if(amount >= 0){
            item.count = item.count + Number(amount);
            return {id, name:item.name, description:item.description, count:item.count}     
        }else{
            const error= new Error('Deposit Amount is Invalid');
            error.status = 400;
            throw error;  
        }
    }
    
}

module.exports = ItemsService;