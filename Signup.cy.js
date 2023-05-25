describe ('Take otp from gmail', () =>{
    /** At first it will send OTP to gmail then will login in gmail searching email following email subject. 
     * Clicking on mail will enter in email and the copy OTP. Then will back in quantibly and past it on OTP field */
    it ('Login in Quantibly', () =>{
       cy.visit('https://quantibly.tk/login') 
       cy.contains('Sign Up').click()
       cy.get('#org-name').type('cypress test')
       cy.get('#name').type('masoma')
       cy.get('#email').type('m.masom.202@gmail.com')
       cy.contains('Join Quantibly').click()
       
      // Retrive OTP



    })
    // it ('Collect OTP from gmail', () => {
    //     const pass='Masoma@2022'
    //     cy.visit('https://accounts.google.com/v3/signin/identifier?dsh=S470454918%3A1674443793028143&elo=1&flowName=GlifWebSignIn&flowEntry=ServiceLogin&https://accounts.google.com/v3/signin/identifier?dsh=S-469535821%3A1674804602390518&continue=https%3A%2F%2Fwww.google.com%2Fsearch%3Fq%3Dgmail%2Blogin%26oq%3Dgm%26aqs%3Dchrome.2.69i57j0i271l3j69i61j69i60.3663j0j1%26sourceid%3Dchrome%26ie%3DUTF-8&ec=GAZAAQ&hl=bn&passive=true&flowName=GlifWebSignIn&flowEntry=ServiceLogin&ifkv=AWnogHe8URyc1B7GZonxuuSf-KKGDnWfhc054jJqfLjNLkoWYJ5r-3MGdyloCWt34nMoE7iOu_jY0w=AWnogHcHzJHHeYTWFGkf6XWW_bYjRoKz6p2KvG9sDJRIY9dIbOxY500OPkEdNTLPu61OFjjUa-Sk')
    //     cy.get('#identifierId').type('m.masom.2022@gmail.com')
    //     cy.get('#identifierNext').click()
    //     cy.get('input[type="password"]').type(pass)
    //     cy.get('#passwordNext').click()
    //     cy.contains('Walcome to quantibly').and('#:1t').click()
    //     cy.get



    // })
    

})
