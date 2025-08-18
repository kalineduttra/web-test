const { validName, validEmail, validPassword, invalidName, invalidEmail, invalidPassword, password14Characters, passwordExceededCharacters } = Cypress.env()

describe('Given that I register an account', () => {

  it('Then check password visibility', () => {
    cy.visit('/cadastro')
    cy.get('[data-test="input-password"]').type(validPassword).should('have.attr', 'type', 'password')
    cy.get(':nth-child(6) > .pass__view').click()
    cy.get('[data-test="input-password"]').should('have.attr', 'type', 'text').and('have.value', validPassword)
    cy.get('[data-test="input-confirm-password"]').type(validPassword).should('have.attr', 'type', 'password')
    cy.get(':nth-child(8) > .pass__view').click()
    cy.get('[data-test="input-confirm-password"]').should('have.attr', 'type', 'text').and('have.value', validPassword)
  })

  context.skip('When the fields are filled in correctly', () => {
    it('Then you should be redirected to the login screen', () => {
      cy.register(validName, validEmail, validPassword, validPassword)
    })
    it('Then, when you fill in the 14-character field, you should register successfully', () => {
      cy.register(validName, validEmail, password14Characters, password14Characters)
    })
    afterEach(() => {
      cy.url().should('be.equal', `/login`)
    })
  })

  context('When tries to register incorrectly', () => {
    it('Then when you fill in the form without the name you should ask them to fill in this field', () => {
      cy.register(' ', validEmail, validPassword, validPassword)
    })    
    it('Then when you fill in the form with the wrong name you should be asked to fill it in correctly', () => {
      cy.register(invalidName, validEmail, validPassword, validPassword)
    })
    it('Then it must fill in the form with the wrong email and displays a message to adjust it', () => {
      cy.register(validName, invalidEmail, validPassword, validPassword)
      cy.contains('Por favor, verifique o email digitado').should('be.visible')
    })
    it('Then must fill in the password field with a character limit below the requirement should display message to adjust', () => {
      cy.register(validName, validEmail, invalidPassword, invalidPassword)
      cy.contains('A senha deve conter pelo menos uma letra maiúscula, um número e ter entre 6 e 15 caracteres').should('be.visible')
    })
    it('Then when filling in the confirmation password which is different from the password it should display a warning message that they are not the same', () => {
      cy.register(validName, validEmail, validPassword, invalidPassword)
      cy.contains('As senhas não batem').should('be.visible')
    })
    it('Then it should display a password setting message when filling in the password field longer than 14 characters', () => {
      cy.register(validName, validEmail, passwordExceededCharacters, passwordExceededCharacters)
      cy.contains('A senha deve conter pelo menos uma letra maiúscula, um número e ter entre 6 e 15 caracteres').should('be.visible')
    })
    it('Then it should display a message to fill in the form fields when you click on register', () => {
      cy.visit('/cadastro')
      cy.get('[data-test="submit-button"]').click()
      cy.contains('É necessário informar um endereço de email').should('be.visible')
      cy.contains('Crie uma senha').should('be.visible')
      cy.contains('Repita a senha criada acima').should('be.visible')
    })
  })
})
 
