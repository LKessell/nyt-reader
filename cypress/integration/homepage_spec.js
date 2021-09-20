describe('Home page user flows', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/');
  });

  it('Should be able to visit the home page', () => {
    cy.get('h1').contains('NY Times Reader').should('be.visible');
  });
})