describe('Overall testing of the app', () => {
  it('`My Life` page is first loaded and navigation works', () => {
    cy.visit('/')
    // test initial page is `My Life`
    cy.contains('h1', 'My Life')
    cy.url().should('include', '/my-life')
    // test `main nav` is complete
    cy.contains('a', 'My Life')
    cy.contains('a', 'Experience')
    cy.contains('a', 'Skills')
    // test `main nav` works correctly
    cy.contains('a', 'Skills').click()
    cy.contains('h1', 'Skills')
    cy.url().should('include', '/skills')
  })
})
