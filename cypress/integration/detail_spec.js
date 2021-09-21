describe('Detail page user flows', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/');
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
})
