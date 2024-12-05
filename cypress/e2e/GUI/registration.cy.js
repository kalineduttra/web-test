describe('registration page', () => {

  context('correct registration', () => {
    beforeEach(() => {
      cy.clearAllCookies
    })
    it('fill in the form fields correctly', () => {
      cy.register(Cypress.env('validName'), Cypress.env('validEmail'),Cypress.env('validPassword'), Cypress.env('validPassword'))
    })
    it('fill in password field with 14 characters', () => {
      cy.register(Cypress.env('validName'), Cypress.env('validEmail'),Cypress.env('password14Characters'), Cypress.env('password14Characters'))
    })
    afterEach(() => {
      cy.url().should('be.equal', `${Cypress.config("baseUrl")}/login`)
      cy.wait(5000)
    })
  })

  context('When I register incorrectly', () => {
    const passwordRequirements = "A senha deve conter pelo menos uma letra maiúscula, um número e ter entre 6 e 15 caracteres"
    it('create account without filling in name', () => {
      cy.register(' ', Cypress.env('validEmail'),Cypress.env('validPassword'), Cypress.env('validPassword'))
    })    
    it('* fill in the name field incorrectly', () => {
      cy.register(Cypress.env('invalidName'), Cypress.env('validEmail'),Cypress.env('validPassword'), Cypress.env('validPassword'))
    })
    it('fill in the email field incorrectly', () => {
      cy.register(Cypress.env('validName'), Cypress.env('invalidEmail'),Cypress.env('validPassword'), Cypress.env('validPassword'))
      cy.contains('Por favor, verifique o email digitado').should('be.visible')
    })
    it('password with lower characters', () => {
      cy.register(Cypress.env('validName'), Cypress.env('validEmail'),Cypress.env('invalidPassword'), Cypress.env('invalidPassword'))
      cy.contains(passwordRequirements).should('be.visible')
    })
    it('fill in password confirmation with content that differs from the password', () => {
      cy.register(Cypress.env('validName'), Cypress.env('validEmail'),Cypress.env('validPassword'), Cypress.env('invalidPassword'))
      cy.contains('As senhas não batem').should('be.visible')
    })
    it('password with exceeded characters', () => {
      cy.register(Cypress.env('validName'), Cypress.env('validEmail'),Cypress.env('passwordExceededCharacters'), Cypress.env('passwordExceededCharacters'))
      cy.contains(passwordRequirements).should('be.visible')
    })
  })

  context("When I don't fill in the form fields", () => {
    it('Then I have to view messages to fill in the fields', () => {
      cy.visit('/cadastro')
      cy.get('[data-test="submit-button"]').click()
      cy.contains('É necessário informar um endereço de email').should('be.visible')
      cy.contains('Crie uma senha').should('be.visible')
      cy.contains('Repita a senha criada acima').should('be.visible')
    })
  })
})

  