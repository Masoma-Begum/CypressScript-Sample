import {faker, Faker} from "@faker-js/faker"

describe('Support form fillup', () =>{
    it('fillup form with selecting file', () => {
        cy.visit('https://demo.quantibly.com/login')
        cy.get('#email').type('mbegum@iquantile.com{enter}')
        //cy.contains('Join').click()
        cy.wait(1000*4)
        cy.xpath('//body/div[@id="app"]/div[2]/div[2]/div[1]/div[1]/div[1]/button[1]/*[1]').click({force:true})
        cy.contains('Support').click({force:true})


        const fullname = faker.name.fullName()
        cy.get('#name').type(fullname)

        /** Copy and past handlling, from faker data*/
        cy.wait(1000*2)
        const textToPaste=faker.lorem.text({length:100})
         cy.get('#message').invoke('val', textToPaste)

        //  /** Select multiple file from computer through the "Brows" */
        cy.get('#imgFile1').selectFile(['/home/iquantile/Pictures/a.png','/home/iquantile/Pictures/b.png','/home/iquantile/Pictures/c.png'])
     
    })

    
})