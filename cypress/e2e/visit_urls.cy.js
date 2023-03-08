/// <reference types="cypress" />

// Read the list of URLs from a file

const urls = ['https://applitools.com/', 'https://applitools.com/platform/eyes/'];

describe('Take a snapshot of the full page', () => {
//for each URL do the thing in here

urls.forEach(url => {
    
//This gives you some feedback in the Cypress side bar console on what URL you're at
describe(`url: ${url}`, () => {

//The nested loop meaning that for each URL you go to we will also go into another loop and use each size as well.
it(`Should display logo on ${url}`, () => {
   
cy.eyesOpen({
  appName: 'Applitools Marketing Site',
  testName: 'Homepage',
})

cy.visit(url);

cy.eyesCheckWindow({
    tag: "Homepage",
    fully: true
});

cy.eyesClose()

});
});
});
});

