/// <reference types="cypress" />

describe('Visit website and click links/buttons', () => {
  it('Visits the website and clicks all links/buttons', () => {
    cy.visit('https://applitools.com')
    cy.then(() => {
      cy.get('a').each((link) => {
        cy.click(link).then(() => {
          cy.wait(500)
          cy.url().should('not.include', '404')
        })
      })

      cy.get('button').each((button) => {
        cy.click(button).then(() => {
          cy.wait(500)
          cy.url().should('not.include', '404')
        })
      })
    })
  })
})
