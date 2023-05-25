describe('Login to Gmail', () => {
    it('Should be able to login', () => {
        cy.visit('https://gmail.com')
        cy.get('input[type="email"]').type('m.masom.2022@gmail.com')
        cy.get('#identifierNext').click()
        cy.get('input[type="password"]').type('Masoma@2022').wait(1000)
        cy.contains('Next').click()
        cy.get('#gbwa').click()
        
    })
})