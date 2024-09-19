describe('registration page', () => {
  beforeEach(() => {
    cy.visit('https://adopet-frontend-cypress.vercel.app/');
    cy.get('[data-test="register-button"]').click();
  })
    it('fill in the form fields correctly to register a new user', () => {
      cy.register('Ana','anajulie@email.com','Password123')
     })
  })

  