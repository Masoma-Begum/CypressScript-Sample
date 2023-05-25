describe('Organization/Profiel', () => {
    it('Add Profile Info', () => {
      cy.visit('https://demo.quantibly.com/login')
      cy.get('#email').type('mbegum@iquantile.com')
      cy.contains('Join').click()
     
       cy.wrap({signin:login}).invoke(signin)
  
      // select data from programs & services/ program activity 
      cy.wait(1000*4)
      cy.get('a[href*="/reporting"]').contains('Reporting').click()
      cy.wait(1000*4)
      cy.contains('Create a Report').click()
      cy.get('#module').click()

     // pull data from list (way 1) this way is succeessfully working and very importent for full system*****
        var list = []
      
        cy.get('ul[id="module-multiselect-options"] > li')
          .each(($ele) => {
            list.push($ele.text().trim())
          })
          .then(() => {
            cy.log(list[2])
            cy.get('ul[id="module-multiselect-options"] > li').contains(list[2]).click()
          })
        
        



      // Or, you can do also something like this:

//       let listOfResults = [];
// let singleResult = {};
// cy.get('[class="results"]')
//   .each((resultItem) => {
//     ...
//   })
//   .then(() => {
//     listOfResults.push(JSON.stringify(singleResult)); 
//     cy.log("list:" + JSON.stringify(listOfResults));
//   })
      
      // var list = []
      // cy.get('ul[class="menu-main-nav-container"] > li')
      //   .then(($ele) => {
      //     const list = Array.from($ele, (el) => el.innerText)
      //   })
      //   .then(() => {
      //     cy.log(list[0]) //prints Home
      //   })
      
      


      
         //Type random email name 

        //  cy.get(':nth-child(2) > :nth-child(2) > input').type(userID_Alpha())
        //  function userID_Alpha() {
        //      var text = "";
        //      var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
         
        //      for (var i = 0; i < 10; i++)
        //        text += possible.charAt(Math.floor(Math.random() * possible.length));
         
        //      return text;
        //    }

  })
})