describe('Test 2', () => {

    it('Open site', () => {
        cy.visit('https://www.onlinetravel.com.ar/')
        
    })

    it('Destinos', () =>{

        cy.get('.slimmenu-sub-collapser > .fa').trigger('mouseover').click()

    }  
    )

})