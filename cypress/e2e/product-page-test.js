/// <reference types="cypress" />


// --------------------------------------------------------------------------------
// Test Cases
// --------------------------------------------------------------------------------

describe('A visual test on Applitools eComm Demo', () => {

    it('should log into the demo app', () => {

        cy.eyesOpen({
            appName: 'Load eCommerce Store',
            testName: 'Product Page',
        })

        loadProductsPage()
        verifyProductsPage()
    })

    afterEach(() => {
        cy.eyesClose()
    })
})


// --------------------------------------------------------------------------------
// Test Step Functions
// --------------------------------------------------------------------------------

function loadProductsPage() {
    cy.visit('https://applitools-demo-shopify.vercel.app/products/outdoors/gorgeous-cotton-computer/')
}

function verifyProductsPage() {
    cy.eyesCheckWindow({
        tag: "Products Page",
        target: 'window',
        fully: true
    });
}

