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

