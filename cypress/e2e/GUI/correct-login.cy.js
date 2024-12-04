describe('Login page', () => {
  beforeEach(() => {
    
  })
    it('Fill in the login fields with valid data and authenticate the user on the page', () => {
      cy.login(Cypress.env('validEmail'),Cypress.env('validPassword'))
      })
  })

