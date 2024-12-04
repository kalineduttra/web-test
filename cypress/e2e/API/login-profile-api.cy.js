describe('Api Adopet', () => {
    it('Verify username is present on /profile page response', () => {
        cy.request({
            method: 'GET',
            url: 'https://adopet-api-i8qu.onrender.com/adotante/perfil/2b8ba748-1c73-4038-bd21-e859d991d562',
            headers: Cypress.env()
        }).then ((res) => {
            expect(res.status).to.be.equal(200)
            expect(res.body).is.not.empty
            expect(res.body).to.have.property('perfil')
            expect(res.body.perfil.nome).to.be.equal('Ana')
            // PARALELIZAÇÃO DE TESTES EM UM AMBIENTE DE INTEGRAÇÃO CONTÍNUA
        })
    })
})