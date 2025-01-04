import * as utils from '../../support/utils.js'

describe('Login page', () => {
  context('login correto', () => {
    it('Fill in the login fields with valid data and authenticate the user on the page', () => {
      cy.login(Cypress.env('validEmail'),Cypress.env('validPassword'))
      })
    })
  
  context.only('Quando o usuário preencher o campo de forma incorreta', () => {
    const messageError = 'Inclua um "@" no endereço de e-mail'
    beforeEach('Visita a página', () => {
      cy.visit('/')
      cy.get('[data-test="login-button"]').click()
    })
    it(`Então deve visualizar a mensagem "${messageError}" gerada pelo navegador`, () => {
      utils.login('email', Cypress.env('validPassword'))
      cy.get('@emailField').then(($el) => {
        cy.wrap($el[0].validationMessage).should('contain',`${messageError}`)
      })
      cy.wait(5000)
    })
  })
})

