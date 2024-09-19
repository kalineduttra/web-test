import { users } from '../fixtures/users.json'

describe('Registration page', () => {
    beforeEach(() => {
        cy.visit('https://adopet-frontend-cypress.vercel.app');
        cy.get('[data-test="register-button"]').click();
    })
    users.forEach(user => {
        it ('Fill in the form fields correctly to register a user', () => {
            cy.get('[data-test="input-name"]').clear().type(user.name);
            cy.get('[data-test="input-email"]').clear().type(user.email);
            cy.get('[data-test="input-password"]').clear().type(user.password);
            cy.get('[data-test="input-confirm-password"]').clear().type(user.password);
            cy.get('[data-test="submit-button"]').click();
        })
    })
})