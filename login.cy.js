const { it } = require("mocha")

describe('Organization/Profiel', () => {

    it('Login in demo', () => {
      cy.visit('https://demo.quantibly.com/login')
      cy.get('#email').type('mbegum@iquantile.com')
      cy.contains('Join').click()
     
  })



  it('login in staging',()=>{
    cy.visit('https://quantibly.tk')
      cy.get('#email').type('masoma@test.com')
      cy.contains('Next').click()
      cy.get('#password').type('Admin@123')
      cy.contains('Login').click()
  })

  const loign = () =>{
    cy.visit('https://demo.quantibly.com/login')
    cy.get('#email').type('mbegum@iquantile.com')
    cy.contains('Join').click()
  }

  })