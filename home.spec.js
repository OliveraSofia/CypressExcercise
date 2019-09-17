describe('Test 1', () => {

    it('Open site', () => {
        cy.visit('https://www.onlinetravel.com.ar/')
        
    })

    it('Validate icon is load', () =>{
        cy.get('#img-logo').should('be.visible')
    })

    it('Validate button ingresar', () =>{

        cy.get('#login-social-button').should('be.visible')
    })

    it('Validate phone icon', () =>{

        cy.get('.list-phone').should('be.visible')
    })

    it('Validate phone icon', () =>{
        cy.get('[href="#"]')
    })

    it('Validate phone icon', () =>{
        
        cy.get('.top-user-area-list > :nth-child(4) > a').should('be.visible')
    
    })

    it('Validate Home menu', () =>
    {
        cy.get('.active > a').should('have.text', 'Home')
       
    })

    it('Validate Destinos menu', () =>{
        cy.get('.destinos > [data-translate="1"]').should('have.text', 'Destinos')
    })

    it('select destinos'), () =>{
        
        cy.get('.destinos > [data-translate="1"]').trigger('mouseover')
    }
    

})


