/// <reference types="cypress"/>
describe("Cypress-Project-02 - Login Form", () => {
  beforeEach(() => {
    cy.visit("https://techglobal-training.com/frontend/project-2");
  });
  it("Test Case 01 - Validate the login form", () => {
    IsDisplayed("#username");
  });
});
