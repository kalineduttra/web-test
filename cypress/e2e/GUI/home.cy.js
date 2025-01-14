describe('Given that the user is on the main screen', () => {
    beforeEach(() => {
        cy.visit('/')
    })

    context('When you click on "see available pets"', () => {
        it('Then it should be redirected to the home screen', () => {
            cy.get('.button').click()
            cy.url().should('contain', '/home')
        })
    })
})