describe('registration page', () => {
  beforeEach(() => {
    cy.visit('/cadastro')
  })
    it('filling in the user registration form incorrectly and displaying messages to the user ', () => {
      cy.get('[data-test="submit-button"]').click();
      cy.contains('É necessário informar um endereço de email').should('be.visible');
      cy.contains('Crie uma senha').should('be.visible');
      cy.contains('Repita a senha criada acima').should('be.visible');
    })
  })