describe('Dado que eu entre no meu perfil', () => {
    beforeEach(() => {
        cy.login()
        //cy.visit('/home')
        cy.wait(5000)
        cy.get('.header__user').click()
    })
    context('Quando mudar a foto de perfil', () => {
        it('Então deve ser alterar a imagem com sucesso', () => {
            cy.wait(5000)
        })
    })

})