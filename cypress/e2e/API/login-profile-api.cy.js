const {validEmail, validPassword, validName} = Cypress.env()

describe('Api Adopet', () => {
    it('Verify username is present on /profile page response', () => {
        cy.request({
            method: 'GET',
            url: 'https://adopet-api-i8qu.onrender.com/adotante/perfil/26fd6a23-8741-48b9-9d0a-6ff4c4c001fb',
            headers: Cypress.env()
        }).then((res) => {
            expect(res.status).to.be.equal(200)
            expect(res.body).is.not.empty
            expect(res.body).to.have.property('perfil')
            expect(res.body.perfil.nome).to.be.equal(validName)
        })
    })
})