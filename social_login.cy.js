describe('Login with social account', () => {
   it('it', () => {
    cy.visit('http://192.168.1.145:8080/')
    cy.wait(1000*4)
    cy.get('.nsm7Bb-HzV7m-LgbsSe-BPrWId').click({force:true})
   })
})