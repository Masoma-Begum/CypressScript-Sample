describe('Organization/Profiel', () => {
  it('Add Profile Info', () => {
    cy.visit('https://demo.quantibly.com/login')
    cy.get('#email').type('mbegum@iquantile.com')
    cy.contains('Join').click()
   

    // select data from programs & services/ program activity 
    cy.wait(1000*4)
    cy.get('a[href*="/programs-services"]').contains('Programs & Services').click()
    cy.wait(1000*3)
    cy.get('a[href*="/programs-services/program-activity"]').contains('Program Activity').click()
    
    //cy.get('.mdi mdi-plus mr-1').contains('Add New Activity').click()
    cy.contains('Add New Activity').click()
    

    cy.clearCookies()
    cy.get('.dp__input_wrap').click()
    cy.get('.dp__month_year_row').contains('2023').click()
  
    const years=['2021','2022']
    cy.contains(years[1]).click()
    cy.contains('Jan').click()


    const months=['Aug','Nov']
  
    cy.contains(months[1]).click()
    const days=['10','12','13']
    cy.contains(days[2]).click()
    
    
})
})