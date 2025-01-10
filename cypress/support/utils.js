export const login = (email, password) => {
    cy.get('[data-test="input-loginEmail"]').as('emailField').type(email)
    cy.get('[data-test="input-loginPassword"]').type(password)
    cy.get('[data-test="submit-button"]').click()
}