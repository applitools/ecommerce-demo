/// <reference types="cypress" />


// --------------------------------------------------------------------------------
// Test Cases
// --------------------------------------------------------------------------------

describe('A visual test on Applitools eComm Demo', () => {

    it('should log into the demo app', () => {

        cy.eyesOpen({
            appName: 'Load eCommerce Store',
            testName: 'Homepage Products',
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
    cy.visit('https://applitoolsecommdemo.gtsb.io/')
}

function verifyHomePage() {
    cy.eyesCheckWindow({
        tag: "Home Page",
        target: 'window',
        fully: true
    });
}

