describe('Home page user flows', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/');
  });

  it('Should be able to visit the home page', () => {
    cy.get('h1').contains('NY Times Reader').should('be.visible');
    cy.wait(1000);
  });

  it('The header should contain the date and a home button', () => {
    const now = new Date(2021, 8, 27).getTime();

    cy.clock(now);
    cy.get('p').contains('September 27, 2021').should('be.visible');
    cy.get('img[class="home-icon"]').should('be.visible');
  });
})