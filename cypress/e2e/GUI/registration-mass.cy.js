import { users } from '../../fixtures/users.json'

describe('Registration page', () => {
    beforeEach(() => {
        cy.visit('/');
        cy.get('[data-test="register-button"]').click();
    })
    users.forEach(user => {
        it ('Fill in the form fields correctly to register a user', () => {
            cy.register(user.name, user.email, user.password, user.password);
        })
    })
})