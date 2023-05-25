describe('Organization/Profiel', () => {
    it('Add Profile Info', () => {
      cy.visit('https://demo.quantibly.com/login')
      cy.get('#email').type('mbegum@iquantile.com')
      cy.contains('Join').click()

      // select data from programs & services/ program activity 
      cy.wait(1000*4)
      cy.get('a[href*="/organization"]').contains('Organization').click()
      cy.get('a[href*="/organization/locations"]').contains('Locations').click()
      cy.wait(1000*3)
      cy.contains('Add Location').click()
      

      /*********************Test Practics*********************** */
      cy.get('#location_name').type('Dhaka')
      cy.get('#address1').type('Monipuripara, Dhaka')
      cy.get('#address2').type('Monipuripara, Dhaka-1215' )
      cy.get('#country').click()
      cy.contains('Albania').click()
      cy.get('#state').click()
      cy.contains('Dhaka').click()
      cy.get('#city').click()
      cy.contains('Alexandria').click()
      cy.get('#zip').click()
      cy.contains('1060').click()
      cy.get('#phone').type('38393300333')
  
      
      //Search with text part of city 
      //cy.get('#city').type('Alex').click()
      

      //Create city pressing enter
      // cy.get('#city').type("sfjdk{enter}")


      //Click on "Add more details" button and select dates & times
      
       
        cy.contains('Add more details').click()
        const days=['Saturday','Monday','Tuesday','Wednesday']
        for(var checked=0;checked<=2;checked++){
          cy.contains(days[checked]).click()
        }
     
        cy.get('#work_time_from-input').click()
        cy.xpath('//body/div[@id="app"]/div[2]/div[2]/div[1]/div[2]/div[2]/form[1]/div[1]/div[2]/div[5]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[2]/div[1]/div[1]/div[1]').contains('02').click()
        cy.xpath('//body/div[@id="app"]/div[2]/div[2]/div[1]/div[2]/div[2]/form[1]/div[1]/div[2]/div[5]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[2]/div[1]/div[2]/div[1]').contains('03').click()
        cy.xpath('//body/div[@id="app"]/div[2]/div[2]/div[1]/div[2]/div[2]/form[1]/div[1]/div[2]/div[5]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]').contains('am').click()
        cy.xpath('//body/div[@id="app"]/div[2]/div[2]/div[1]/div[2]/div[2]/form[1]/div[1]/div[2]/div[5]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[3]/button[1]').click()
      
      
        cy.get('#work_time_to-input').click()
        cy.xpath('//body/div[@id="app"]/div[2]/div[2]/div[1]/div[2]/div[2]/form[1]/div[1]/div[2]/div[5]/div[2]/div[1]/div[1]/div[2]/div[1]/div[1]/div[2]/div[1]/div[2]/div[1]/div').contains('03').click()
        cy.xpath('//body/div[@id="app"]/div[2]/div[2]/div[1]/div[2]/div[2]/form[1]/div[1]/div[2]/div[5]/div[2]/div[1]/div[1]/div[2]/div[1]/div[1]/div[2]/div[1]/div[2]/div[1]/div[2]/div[1]').contains('04').click()
        cy.xpath('//body/div[@id="app"]/div[2]/div[2]/div[1]/div[2]/div[2]/form[1]/div[1]/div[2]/div[5]/div[2]/div[1]/div[1]/div[2]/div[1]/div[1]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]').contains('pm').click()
        cy.xpath('//body/div[@id="app"]/div[2]/div[2]/div[1]/div[2]/div[2]/form[1]/div[1]/div[2]/div[5]/div[2]/div[1]/div[1]/div[2]/div[1]/div[1]/div[2]/div[1]/div[3]/button[1]').click()
  

       
     })
  })