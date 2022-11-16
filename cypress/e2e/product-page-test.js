/// <reference types="cypress" />


// --------------------------------------------------------------------------------
// Test Cases
// --------------------------------------------------------------------------------

describe('Validating the product page', () => {

    it('should go to the product page', () => {

        cy.eyesOpen({
            appName: 'Eyestore',
            testName: 'Succulent Page',
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
    cy.visit('https://applitools-demo-ecommerce.vercel.app/products/outdoors/gorgeous-cotton-computer/')
}

function verifyProductsPage() {
    cy.eyesCheckWindow({
    });
}

