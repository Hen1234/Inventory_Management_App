describe('itmes tests', ()=>{

    beforeEach(() => {
        //TODO: change to 3000 
        cy.visit('http://localhost:4200/');
         //TODO: decide if to remove it and then to remove the last from the last line each it
        //Create a temporary item to ensure the name of the last item in the list
        //won't be the same as the name of the item created for the test
        cy.get('.add-item-btn').click();
        cy.get('#add-input-name').type('temporary item for test- delete after each').should('have.value', 'temporary item for test- delete after each');
        cy.get('#add-input-description').type('temporary item for test des').should('have.value', 'temporary item for test des');
        cy.get('#add-input-amount').type('5').should('have.value', '5');
        cy.get('#save-button').click();
        //Wait the DOM to be updated
        cy.contains('temporary item for test');
        
    })

    afterEach(() => {
        cy.get("app-item .remove-button").last().click();
        cy.contains('temporary item for test- delete after each').should('not.exist');
    })
     
    it('Visits the Inventory Management App', () => {
        cy.contains("Inventory Management App"); 
    })

    describe('Add & Remove item tests', ()=>{

        it('Add & Remove Item success', () =>{
            cy.get('.add-item-btn').click();
            cy.contains("Note: please fill all the fiels to add a new item");
            cy.contains("Add Item");
            cy.get('#add-input-name').type('add item test').should('have.value', 'add item test');
            cy.get('#add-input-description').type('add item test des').should('have.value', 'add item test des');
            cy.get('#add-input-amount').type('5').should('have.value', '5');
            cy.get('#save-button').click();
            //Wait the DOM to be updated
            cy.contains('add item test');
            cy.get("app-item").last().contains("add item test");
            cy.get("app-item .remove-button").last().click();
            cy.get("app-item").last().contains('add item test').should('not.exist');
        })
    
        it('Add Item invalid amount', () =>{
            cy.get('.add-item-btn').click();
            cy.get('#add-input-amount').type('-5');
            cy.contains("The amount value is invalid");
            cy.get("#cancel-button").click();
        })

    })

    describe('Update item tests', ()=>{

        it('Update item success', () =>{
            cy.get('.add-item-btn').click();
            cy.get('#add-input-name').type('update item test1').should('have.value', 'update item test1');
            cy.get('#add-input-description').type('update item test des').should('have.value', 'update item test des');
            cy.get('#add-input-amount').type('5').should('have.value', '5');
            cy.get('#save-button').click();
            //Wait the DOM to be updated
            cy.contains('update item test1');
    
            cy.get(".update-button").last().click();
            cy.get('#update-input-name').type(' update').should('have.value', 'update item test1 update');
            cy.get('#update-input-description').type(' update').should('have.value', 'update item test des update');
            cy.get('#save-button').click();
            cy.contains('update item test1 update');

            cy.get("app-item").last().contains("update item test1 update");
            cy.get("app-item .remove-button").last().click();
            cy.get("app-item").last().contains('update item test1 update').should('not.exist');

        })
    
        it('Update item invalid values', () =>{
            cy.get('.add-item-btn').click();
            cy.get('#add-input-name').type('update item test2').should('have.value', 'update item test2');
            cy.get('#add-input-description').type('update item test des').should('have.value', 'update item test des');
            cy.get('#add-input-amount').type('5').should('have.value', '5');
            cy.get('#save-button').click();
            //Wait the DOM to be updated
            cy.contains('update item test2');

            cy.get(".update-button").last().click();
            cy.get('#update-input-name').clear();
            cy.contains("Empty fields are invalid");
            cy.get("#cancel-button").click();
            cy.get("app-item .remove-button").last().click();
            cy.get("app-item").last().contains('update item tes2t').should('not.exist');
        })

    })

    describe('Withdraw item tests', ()=>{

        it('Withdraw item success', () =>{
            cy.get('.add-item-btn').click();
            cy.get('#add-input-name').type('withdraw item test1').should('have.value', 'withdraw item test1');
            cy.get('#add-input-description').type('withdraw item test des').should('have.value', 'withdraw item test des');
            cy.get('#add-input-amount').type('5').should('have.value', '5');
            cy.get('#save-button').click();
            //Wait the DOM to be updated
            cy.contains('withdraw item test1');
    
            cy.get(".withdraw-button").last().click();
            cy.get('#withdraw-input').type('3').should('have.value', '3');
            cy.get('#save-button').click();
            //Wait the DOM to be updated
            cy.contains('2');
            cy.get("app-item").last().contains("2");

            cy.get("app-item .remove-button").last().click();
            cy.get("app-item").last().contains('withdraw item test1').should('not.exist');
        })
    
        it('Withdraw item invalid amount', () =>{
            cy.get('.add-item-btn').click();
            cy.get('#add-input-name').type('withdraw item test2').should('have.value', 'withdraw item test2');
            cy.get('#add-input-description').type('withdraw item test des').should('have.value', 'withdraw item test des');
            cy.get('#add-input-amount').type('5').should('have.value', '5');
            cy.get('#save-button').click();
            //Wait the DOM to be updated
            cy.contains('withdraw item test2');
            cy.get("app-item").last().contains('withdraw item test2');
            
            cy.get(".withdraw-button").last().click();
            cy.get('#withdraw-input').type('6').should('have.value', '6');
            cy.contains("The amount value is invalid");
            cy.get("#save-button").should('be.disabled');
            cy.get("#cancel-button").click();
            cy.get("app-item .remove-button").last().click();
            cy.get("app-item").last().contains('withdraw item test2').should('not.exist');
        })

   
    })

    describe('Deposit item tests', ()=>{
        it('Deposit item success', () =>{
            cy.get('.add-item-btn').click();
            cy.get('#add-input-name').type('deposit item test1').should('have.value', 'deposit item test1');
            cy.get('#add-input-description').type('deposit item test des').should('have.value', 'deposit item test des');
            cy.get('#add-input-amount').type('5').should('have.value', '5');
            cy.get('#save-button').click();
            //Wait the DOM to be updated
            cy.contains('deposit item test1');

            cy.get(".deposit-button").last().click();
            cy.get('#deposit-input').type('10').should('have.value', '10');
            cy.get('#save-button').click();
            //Wait the DOM to be updated
            cy.contains('15');
            cy.get("app-item").last().contains("15");

            cy.get("app-item .remove-button").last().click();
            cy.get("app-item").last().contains('deposit item test1').should('not.exist');
        })

        it('Deposit item invalid amount', () =>{
            cy.get('.add-item-btn').click();
            cy.get('#add-input-name').type('deposit item test2').should('have.value', 'deposit item test2');
            cy.get('#add-input-description').type('deposit item test des').should('have.value', 'deposit item test des');
            cy.get('#add-input-amount').type('5').should('have.value', '5');
            cy.get('#save-button').click();
            //Wait the DOM to be updated
            cy.contains('deposit item test2');


            cy.get(".deposit-button").last().click();
            cy.get('#deposit-input').type('-5').should('have.value', '-5');
            cy.contains("The amount value is invalid");
            cy.get("#cancel-button").click();
            cy.get("app-item .remove-button").last().click();
            cy.get("app-item").last().contains('deposit item test2').should('not.exist');
        })

    })

    
})