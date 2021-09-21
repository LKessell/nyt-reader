describe('Home page user flows', () => {
  beforeEach(() => {
    const now = new Date(2021, 8, 27).getTime();

    cy.clock(now);
    cy.visit('http://localhost:3000/');
    cy.wait(1000);
  });

  it('Should be able to visit the home page', () => {
    cy.get('h1').contains('NY Times Reader').should('be.visible');
  });

  it('The header should contain the date and a home button', () => {
    cy.get('p').first().contains('September 27, 2021').should('be.visible');
    cy.get('img[class="home-icon"]').should('be.visible');
  });

  it('Should contain a list of news articles', () => {
    cy.get('.article-card').should('have.length.greaterThan', 5);
  })
})