const { validEmail, validPassword } = Cypress.env()

describe('Api Adopet', () => {
    beforeEach(() => {
        cy.loginApi(validEmail, validPassword)
    })
    it ('Api message', () => {
        cy.request({
            method: 'GET',
            url: 'https://adopet-api-i8qu.onrender.com/mensagem/26fd6a23-8741-48b9-9d0a-6ff4c4c001fb',
            headers: {
                Authorization: `Bearer ${Cypress.env('AUTH_TOKEN')}`
            }
        }).then((res) => {
            expect(res.status).to.be.equal(200)
            expect(res.body).is.not.empty
            expect(res.body).to.have.property('msg')
        })
    })
})
