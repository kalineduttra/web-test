const { validEmail, validPassword } = Cypress.env()

describe('Given that the user is on the main screen', () => {
    beforeEach(() => {
        cy.loginApi(validEmail, validPassword)
        cy.visit('/home')
    })

    context('When you click on "see available pets"', () => {
        it('Then it should be redirected to the home screen', () => {
            cy.url().should('contain', '/home')
        })
    })
})