describe('template spec', () => {
  it('Handling new Browser Window', function () {
    cy.visit('https://alapanme.github.io/testing-cypress.html')
    cy.window().then((win) => {
        cy.stub(win, 'open', url => {
            win.location.href = 'https://the-internet.herokuapp.com/';
        }).as("popup")
    })
    cy.get('button').click()
    cy.get('@popup')
        .should("be.called")
    cy.should('have.text', 'Welcome to the-internet')
})
})