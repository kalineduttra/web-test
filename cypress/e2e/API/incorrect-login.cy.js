const {validEmail, validPassword, invalidEmail, invalidPassword, incorrectPassword } = Cypress.env()

describe('Login page', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.get('[data-test="login-button"]').click()
    cy.intercept('POST', 'https://adopet-api-i8qu.onrender.com/adotante/login', {statusCode:400}).as('stubPost')})
    
      it('should fail even if the fields are filled in correctly', () => {
        cy.signIn(validEmail, incorrectPassword)
        cy.wait('@stubPost')
        cy.contains('Falha no login. Consulte suas credenciais.').should('be.visible')
      })
  })

