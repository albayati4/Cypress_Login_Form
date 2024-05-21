/// <reference types="cypress"/>
describe("Cypress-Project-02 - Login Form", () => {
  beforeEach(() => {
    cy.visit("https://techglobal-training.com/frontend/project-2");
  });
  it("Test Case 01 - Validate the login form", () => {
    cy.isDisplayed("#username");
    cy.required("#username", false);
    cy.get("#username").siblings("label").should("have.text", "Please enter your username");
    cy.isDisplayed("#password");
    cy.required("#password", false);
    cy.get("#password").siblings("label").should("have.text", "Please enter your password");
    cy.isDisplayed("#login_btn");
    cy.get("#login_btn").should("not.be.disabled");
    cy.get("#login_btn").should("have.text", "LOGIN");
    cy.get("#login_btn").siblings("a").should("be.visible");
    cy.get("#login_btn").siblings("a").should("not.be.disabled");
    cy.get("#login_btn").siblings("a").should("have.text", "Forgot Password?");
  });

  it("Test Case 02 - Validate the valid login", () => {
    cy.get("#username").click().type("TechGlobal");
    cy.get("#password").click().type("Test1234");
    cy.get("#login_btn").click();
    cy.get("#success_lgn").should("have.text", "You are logged in");
    cy.get("#logout").should("have.text", "LOGOUT");
  });

  it("Test Case 03 - Validate the logout", () => {
    cy.get("#username").click().type("TechGlobal");
    cy.get("#password").click().type("Test1234");
    cy.get("#login_btn").click();
    cy.get("#success_lgn").should("have.text", "You are logged in");
    cy.get("#logout").click();
    cy.isDisplayed("#login_btn");
  });

  it("Test Case 04 - Validate the Forgot Password? Link and Reset Password modal", () => {
    cy.get("#login_btn").siblings("a").click();
    cy.isDisplayed(".modal-card-body");
    cy.isDisplayed(".delete");
    cy.isDisplayed("#email");
    cy.get("#email").siblings("label").should("have.text", "Enter your email address and we'll send you a link to reset your password. ");
    // Although in the DOM it's not showing but in Cypress I got an error because the text had a space at the end.
    // not sure if it's a bug or just a typo.
    cy.isDisplayed("#submit");
    cy.get("#submit").should("not.be.disabled");
    cy.get("#submit").should("have.text", "SUBMIT");
  });

  it("Test Case 05 - Validate the Reset Password modal close button", () => {
    cy.get("#login_btn").siblings("a").click();
    cy.isDisplayed(".modal-card-body");
    cy.get(".delete").click();
    cy.isDisplayed(".LoginForm_form__m12Jc");
  });

  it("Test Case 06 - Validate the Reset Password form submission", () => {
    cy.get("#login_btn").siblings("a").click();
    cy.get("#email").type("abd@gmail.com");
    cy.get("#submit").click();
    cy.get("#confirmation_message").should("have.text", "A link to reset your password has been sent to your email address.");
  });

  it("Test Case 07 - Validate the invalid login with the empty credentials", () => {
    cy.get("#username").should("be.empty");
    cy.get("#password").should("be.empty");
    cy.get("#login_btn").click();
    cy.get("#error_message").should("be.visible").and("have.text", "Invalid Username entered!");
  });

  it("Test Case 08 - Validate the invalid login with the wrong username", () => {
    cy.get("#username").type("John");
    cy.get("#password").type("Test1234");
    cy.get("#login_btn").click();
    cy.get("#error_message").should("be.visible").and("have.text", "Invalid Username entered!");
  });

  it("Test Case 09 - Validate the invalid login with the wrong password", () => {
    cy.get("#username").type("TechGlobal");
    cy.get("#password").type("1234");
    cy.get("#login_btn").click();
    cy.get("#error_message").should("be.visible").and("have.text", "Invalid Password entered!");
  });

  it("Test Case 10 - Validate the invalid login with the wrong username and password", () => {
    cy.get("#username").type("John");
    cy.get("#password").type("1234");
    cy.get("#login_btn").click();
    cy.get("#error_message").should("be.visible").and("have.text", "Invalid Username entered!");
  });
});
