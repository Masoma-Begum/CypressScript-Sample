import {faker} from '@faker-js/faker';
//const lastname=faker.name.lastName();

describe('Add member in quantibly', () => {
    it('passes', () => {

      cy.visit('https://demo.quantibly.com/login')
      cy.get('#email').type('mbegum@iquantile.com')
      cy.contains('Join').click()
      cy.wait(1000*4)
      cy.xpath('//body/div[@id="app"]/div[2]/div[2]/div[1]/div[1]/div[1]/button[1]/*[1]').click({force:true})
       cy.contains('Organization').click({force:true})
      // cy.wait(1000*5)
      cy.contains('Teams').click({force:true})
      //cy.contains('Add Team Member').click({force:true})
      // cy.wait(1000*5)
        

        
    
        // /*Quantibly Signin*/
        // cy.visit('https://quantibly.tk/login')
        // cy.get('#email').type('yodecop260@klblogs.com')
        // cy.contains('Next').click()
        // cy.get('#password').type('Admin@123')
        // cy.get('button[type=submit]').click()
       

    
        /* Click on Organization module fillup the form*/
    
        
        // cy.get('a[href*="/organization"]').contains('Organization').click()
        // cy.get('a[href*="/organization/locations"]').contains('Locations').click()
        



          
        
        /***********************IT IS WORKING WELL****************** */
        var i=0;

        for(i=1; i<=5; i++){
          const lastname=faker.name.lastName();

          cy.contains('Add Team Member').click({force:true})
         cy.get ('#last_name').type(lastname)
         cy.wait(1000*5)
         cy.contains('Cancel').click()
        //   /* Generate fake date for unique name*/
  
        //   const fakers = require('faker')
        //  const users=Cypress._.range(1, 5).map((_, k) => {
        //   return{
        //       name: fakers.name.findName()
       
        //       }
        //   })
  
          // cy.get ('#last_name').type(users)
         //cy.get('button[type="button"]').click()
        }
       








        /* Remaining fillup some field ()*/
    
        // cy.get('#usingApplicationYes').click({force:true})
        // cy.get('#authority_manager').click({force:true})
        // cy.get('#modules_manager-multiselect-options').contains('Organization').click({force:true})
        // cy.get('#modules_manager-multiselect-options').contains('People').click({force:true})
        // cy.get('button[type=submit]').click()
        
      })

})