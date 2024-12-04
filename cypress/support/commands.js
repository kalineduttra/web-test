// login
Cypress.Commands.add('login', (email, password) => { 
    cy.session([email, password], () => {
        cy.visit('/login')
        cy.get('[data-test="input-loginEmail"]').type(Cypress.env(email));
        cy.get('[data-test="input-loginPassword"]').type(Cypress.env(password));
        cy.get('[data-test="submit-button"]').click(); 
    })
})

// Register
Cypress.Commands.add('register', (name, email, password, confirmPassword) => {
    cy.visit('/cadastro')
    cy.get('[data-test="input-name"]').type(name);
    cy.get('[data-test="input-email"]').type(email);
    cy.get('[data-test="input-password"]').type(password);
    cy.get('[data-test="input-confirm-password"]').type(confirmPassword);
    cy.get('[data-test="submit-button"]').click();
})


// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })