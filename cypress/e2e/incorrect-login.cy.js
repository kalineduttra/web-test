describe('Login page', () => {
  beforeEach(() => {
    cy.visit('https://adopet-frontend-cypress.vercel.app/');
    cy.get('[data-test="login-button"]').click();
    cy.intercept('POST', 'https://adopet-api-i8qu.onrender.com/adotante/login', {
      statusCode:400, }).as('stunPost')
  })
    
      it('Should fill in login fields incorrectly and display error messages to the user on the page', () => {
        cy.get('[data-test="input-loginEmail"]').type('Joker3');
        cy.get('[data-test="input-loginPassword"]').type('123');
        cy.get('[data-test="submit-button"]').click();
        cy.contains('Por favor, verifique o email digitado').should('be.visible')
        cy.contains('A senha deve conter pelo menos uma letra maiúscula, um número e ter entre 6 e 15 caracteres').should('be.visible')
      })
      it('should fail even if the fields are filled in correctly', () => {
        cy.login('email@email.com','Password1234')
        cy.wait('@stubPost')
        cy.contains('Falha no login. Consulte suas credenciais.').should('be.visible')
      })
  })

