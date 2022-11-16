/// <reference types="cypress" />


// --------------------------------------------------------------------------------
// Test Cases
// --------------------------------------------------------------------------------

describe('Validating the product page', () => {

    it('should go to the product page', () => {

        loadProductsPage()
        verifyProductsPage()
    })

})

// --------------------------------------------------------------------------------
// Test Step Functions
// --------------------------------------------------------------------------------

function loadProductsPage() {
    cy.visit('https://applitools-demo-ecommerce.vercel.app/products/outdoors/gorgeous-cotton-computer/')
}

function verifyProductsPage() {
//    cy.get('product-page-module--productImageWrapper--++InC').should('be.visible');
    cy.contains('Category').should('be.visible');
    cy.contains('Serious Callers Only.').should('be.visible');
    cy.contains('Buy now').should('be.visible');
    cy.get('.product-page-module--priceValue--gk0OJ > span').invoke('text').should('match', /^\$\d+\.\d{2}$/);
}

