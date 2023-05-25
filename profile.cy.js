describe('Organization/Profiel', () => {
    it('Add Profile Info', () => {
      cy.visit('https://quantibly.tk')
      cy.get('#email').type('masoma@test.com')
      cy.contains('Next').click()
      cy.get('#password').type('Admin@123')
      cy.contains('Login').click()
  
      // select data from programs & services/ program activity 
      
      //cy.get('a[href*="/organization"]').contains('Organization').click()
      cy.get('.aside-menu__item-icon').and('id=[aside-menu__item-icon]').click()
      cy.get('#orgaization_type').type('Cherity','{enter}')
     //cy.get('#fiscalStart').type('01',wait(1000),'01')
  })
  })