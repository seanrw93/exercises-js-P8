describe('Validations Exercise 4: ', () => {
  beforeEach(() => {
    cy.visit("/Exercise4");
  })

  it('Displays \'Hello, you clicked on the button!\'', () => {
    cy.contains('Click here').click()
    cy.get('p').should('exist')
    cy.contains('p', 'Hello, you clicked on the button!')
  })
})
