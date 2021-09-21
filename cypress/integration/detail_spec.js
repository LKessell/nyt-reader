describe('Detail page user flows', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/');
    cy.wait(1000);
  });

  it('Should be able to click an article to view its details', () => {
    cy.get('h3').first()
      .invoke('text')
      .then((text1) => {
        cy.get('article').first().click();

        cy.get('h2')
          .invoke('text')
          .should((text2) => {
            expect(text1).to.eq(text2)
          })
      })
    cy.url().should('include', '/articles/0');
  });

  it('Should show a title, date, image, abstract, and link to the full text on the details page', () => {
    cy.get('article').first().click();
    cy.get('p').should('have.length', 4);
    cy.get('h2').should('be.visible');
    cy.get('.detail-img').should('be.visible');
    cy.get('a').contains('Click to continue reading...').should('be.visible');
  });

  it('Can click the home button to return to the homepage', () => {
    cy.get('article').first().click();
    cy.wait(500);
    cy.get('h2').should('not.contain', 'Top Stories');
    cy.get('.home-icon').click();
    cy.get('h2').should('contain', 'Top Stories');
  });
})
