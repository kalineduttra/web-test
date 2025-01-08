// login
Cypress.Commands.add('login', (email, password) => { 
    cy.session([email, password], () => {
        cy.visit('/login')
        cy.get('[data-test="input-loginEmail"]').type(Cypress.env('validEmail'));
        cy.get('[data-test="input-loginPassword"]').type(Cypress.env('validPassword'));
        cy.get('[data-test="submit-button"]').click();
        //cy.url().should('contain', '/home')
    },
    {
      validate() {
        // Protected URLs should return a 40x http code if user is unauthorized,
        // and by default this will cause cy.visit() to fail
        cy.visit('/home')
      },
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

