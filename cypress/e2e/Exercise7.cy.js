describe('Exercise 7 Validations: ', () => {
    beforeEach(() => {
        cy.visit("/Exercise7");
    })
    describe('Exercise 6 Validation', () => {
        it('Returns \'1010\' on converting 10', () => {
            cy.get("input").type('10');
            cy.contains('Convertir').click()
            cy.get('#binaryResult').should('not.be.empty').and('contain.text', '1010');
        })
        it('Returns \'11\' on converting 3', () => {
            cy.get("input").type('3');
            cy.contains('Convert').click()
            cy.get('#binaryResult').should('not.be.empty').and('contain.text', '11');
        })
        it('Returns nothing on converting non number', () => {
            cy.get("input").type('toto');
            cy.contains('Convertir').click()
            cy.get('#binaryResult').should('be.empty')
        })
        it('BONUS:: Returns nothing on converting non number like 123def', () => {
            cy.get("input").type('123def');
            cy.contains('Convert').click()
            cy.get('#binaryResult').should('be.empty')
        })
    })

})
