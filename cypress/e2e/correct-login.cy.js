describe('Login page', () => {
  beforeEach(() => {
    cy.visit('https://adopet-frontend-cypress.vercel.app/');
    cy.get('[data-test="login-button"]').click();
  })
    it('Fill in the login fields with valid data and authenticate the user on the page', () => {
      cy.login('anajulie@email.com','Password123')
      })
  })

