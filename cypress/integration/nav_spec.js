describe('Navigation user flows', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/');
    cy.wait(1000);
  });

  it('Should contain links for all news headings', () => {
    cy.get('.nav-link').should('have.length', 25).should('be.visible');
  });

  it('Should show articles from a particular section by clicking its link', () => {
    cy.get('h2').should('contain', 'Top Stories');
    cy.get('.nav-link').contains('Arts').click();
    cy.wait(500);
    cy.get('h2').should('contain', 'Arts');
    cy.url().should('include', '/arts');
  });

  it('After selecting a section, its link should be underlined', () => {
    cy.get('.nav-link').contains('Arts').should('not.have.class', 'selected');
    cy.get('.nav-link').contains('Arts').click();
    cy.wait(500);
    cy.get('h2').should('contain', 'Arts');
    cy.get('.nav-link').contains('Arts').should('have.class', 'selected');
  });
})