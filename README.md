![Image](https://www.cypress.io/cypress_logo_social.png)

## Date: 5/21/2024

### By: Abdullah Albayati

### Testing Front end project-02

#### Validating 10 test cases for all the components of a login form.

#### Creator Linkedin page

[Abdullah Albayati](https://www.linkedin.com/in/albayati-abdullah/)

---

#### This project was creatated and executed with the use of JaveScript, Node.js, Cypress and CSS selectors.

---

### _Getting Started_

- In all test cases we are required to visit this page [project-2](https://www.techglobal-training.com/frontend/project-2)
- So I used `beforeEach` from Mocha framework with `cy.visit()` to handel visiting this website before each test case.
- Since I had to validate most tasks (Like input boxes, submit button, ...etc ) to check if they were visible. I made a specific command (method) that will handle that by just passing the locator as an arrgument
  ```JavaScript
  Cypress.Commands.add("isDisplayed", (locator) => {
    cy.get(locator).should("be.visible");
  });
  ```
- Insted of using `cy.get(#ID).should('have.attr', 'required')` which will get the element and check if it's a required field, I created my own command (method) to handle this assertion with 2 condition (true, false) as below.

  ```JavaScript
   Cypress.Commands.add("required", (locator, isRequired) => {
  if (isRequired) {
    cy.get(locator).should("have.attr", "required");
  } else {
    cy.get(locator).should("not.have.attr", "required");
  }
  });
  ```

  In this case if I provide the locator with true, it will check if it's required, if I pass false it will check if it's not required.

- I used `cy.get(#ID).should("not.be.disabled")` to check if a button is clickable.

- I used `cy.get(#ID).type('expected input') `to type anything in the input fields.

### _Screenshots_

![Image](https://i.ibb.co/SxgpdzV/Screenshot-2024-05-20-at-11-16-07-PM.png)
