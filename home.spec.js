describe('Test 1', () => {

    it('Open site', () => {
        cy.visit('https://www.travelocity.com')
        
    })

    it('Assert title 1' , () => {
        cy.get('#primary-header-package').should('have.text', ' Vacation Packages  ')

    })
    
    

})



        