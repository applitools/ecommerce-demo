/// <reference types="cypress" />


// --------------------------------------------------------------------------------
// Test Cases
// --------------------------------------------------------------------------------

describe('A visual test with Applitools for eCommerce', () => {

    it('should log into the demo app', () => {

        cy.eyesOpen({
            appName: 'eComm Demo Application - Local',
            testName: 'All Products',
        })

        loadHomePage()
        verifyHomePage()
    })

    afterEach(() => {
        cy.eyesClose()
    })
})


// --------------------------------------------------------------------------------
// Test Step Functions
// --------------------------------------------------------------------------------

function loadHomePage() {
    cy.visit('http://localhost:8000/products/')
}

function verifyHomePage() {
    cy.eyesCheckWindow({
        tag: "Home Page",
        target: 'window',
        fully: true
    });
}
