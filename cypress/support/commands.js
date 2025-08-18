Cypress.Commands.add('login', (email, password) => { 
    cy.session([email, password], () => {
        cy.visit('/login')
        cy.get('[data-test="input-loginEmail"]').type(Cypress.env('validEmail'));
        cy.get('[data-test="input-loginPassword"]').type(Cypress.env('validPassword'));
        cy.get('[data-test="submit-button"]').click()
        cy.location('pathname').should('eq', '/home')
    })
})

Cypress.Commands.add('loginApi', (email, password) => { 
  cy.session([email, password], () => {
    cy.request({
      method: 'POST',
      url: 'https://adopet-api-i8qu.onrender.com/adotante/login',
      body: { email, password },
    }).then((resp) => {
      expect(resp.status).to.eq(201)
      window.localStorage.setItem('authToken', resp.body.token)
      Cypress.env('AUTH_TOKEN', resp.body.token)
    })
  })
})

Cypress.Commands.add('signIn', (email, password) => { 
  cy.visit('/login')
  cy.get('[data-test="input-loginEmail"]').as('emailField').type(email)
  cy.get('[data-test="input-loginPassword"]').type(password);
  cy.get('[data-test="submit-button"]').click();
})

// Register
Cypress.Commands.add('register', (name, email, password, confirmPassword) => {
    cy.visit('/cadastro')
    cy.get('[data-test="input-name"]').type(name);
    cy.get('[data-test="input-email"]').type(email);
    cy.get('[data-test="input-password"]').type(password)
    cy.get('[data-test="input-confirm-password"]').type(confirmPassword);
    cy.get('[data-test="submit-button"]').click();
})

