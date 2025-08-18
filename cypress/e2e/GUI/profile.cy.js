const {validEmail, validPassword, validName, phone} = Cypress.env()

describe('Given I access my profile', () => {
    context('When I update my profile data', () => {
        it('Then it should successfully update the profile with the new data', () => {
            cy.signIn(validEmail, validPassword)
            cy.get('.header__user').click()
            cy.get('.button').click()
            cy.get('#nome').should('have.value', validName).clear().type(validName)
            cy.get('#telefone').type(phone)
            cy.get('#cidade').type('Zurique')
            cy.get('#sobre').type('I love animals')
            cy.get('[data-test="submit-button"]').click()
            cy.intercept('PATCH', 'https://adopet-api-i8qu.onrender.com/adotante/perfil/*').as('patchPerfil')
            cy.wait('@patchPerfil').its('response.statusCode').should('be.equal', 200)
        })
    })
})
