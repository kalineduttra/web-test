describe('Login page', () => {
    beforeEach(() => {
      cy.visit('https://adopet-frontend-cypress.vercel.app/');
      cy.get('[data-test="login-button"]').click();
    })
        it('Fill in the login fields with valid data and authenticate the user on the page', () => {
          cy.get('[data-test="input-loginEmail"]').type('julie@email.com');
          cy.get('[data-test="input-loginPassword"]').type('Password123');
          cy.get('[data-test="submit-button"]').click();
        })
})