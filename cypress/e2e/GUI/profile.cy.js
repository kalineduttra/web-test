describe('Dado que eu entre no meu perfil', () => {
    beforeEach(() => {
        cy.login()
        cy.get('.header__user').click()
    })
    context('Quando mudar a foto de perfil', () => {
        it('Então deve ser alterar a imagem com sucesso', () => {
            cy.wait(5000)
        })
    })

})
