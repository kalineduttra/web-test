describe('registration page', () => {
  beforeEach(() =>{
    cy.visit('https://adopet-frontend-cypress.vercel.app/')
    cy.get('[data-test="register-button"]').click();
  })

  it('fill in the form fields correctly to register a new user', () => {
    
    cy.get('[data-test="input-name"]').type('Julie');
    cy.get('[data-test="input-email"]').type('julie@email.com');
    cy.get('[data-test="input-password"]').type('Password123');
    cy.get('[data-test="input-confirm-password"]').type('Password123');
    cy.get('[data-test="submit-button"]').click();
  })
})