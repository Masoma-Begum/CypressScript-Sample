describe('Organization/Profiel', () => {
    it('Add Profile Info', () => {
      cy.visit('https://demo.quantibly.com/login')
      cy.get('#email').type('mbegum@iquantile.com')
      cy.contains('Join').click()
     
  
      // select data from programs & services/ program activity 
      cy.wait(1000*4)
      cy.get('a[href*="/programs-services"]').contains('Programs & Services').click()
      cy.wait(1000*4)
      cy.get('a[href*="/programs-services/program-activity"]').contains('Program Activity').click()
      cy.wait(1000*4)
      //cy.get('.mdi mdi-plus mr-1').contains('Add New Activity').click()
      cy.contains('Add New Activity').click()
      cy.wait(1000*4)
  
      cy.clearCookies()
     cy.get('.dp__input_wrap').click()
     cy.contains('Jan').click()
  
    const months=['Aug','Nov']
    
  
    
    for(var i=0;i<months.length;i++){
      cy.contains(months[i]).click()
      cy.wait(1000*10)
    }
  
    // const days=['2']
    // for(var j=0;j<days.length;j++){
    //   cy.contains(days[j]).click()
    //   cy.wait(1000*10)
    // }
  
   
  })
  })