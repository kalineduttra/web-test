describe('Dado que esteja na sessão de mensagem', () => {
    beforeEach(() => {
        cy.login(Cypress.env('validEmail'), Cypress.env('validPassword'))
        cy.get('[class="header__message"]').click()
    })
    context('Quando preencher os dados de forma incorreta', () => {
        it('Então deve exibir mensagem de que deve preencher os campos', () => {
            cy.wait(5000)
        })
    })

})
