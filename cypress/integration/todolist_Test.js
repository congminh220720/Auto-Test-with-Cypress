/* eslint-disable no-undef */
describe("Test Todo App", () => {
  const input = "input[name=new-item]";
  const btnAddItem = "button[data-testid=add-todo]";
  const btnClearItem = ".clear";
  const listItem = ".todolist-item";

  it("render app", () => {
    cy.visit("/");
  });

  it("add todo", () => {
    cy.visit("/");
    cy.get(input).should("have.focus").type("Minh Đẹp troai{enter}");
    cy.get(listItem).should("have.length", 1);

    //click add
    cy.get(input).type("Baby i just want");
    cy.get(btnAddItem).click();
    cy.get(input).type("Baby i just want song ");
    cy.get(btnAddItem).click();
    cy.get(listItem).should("have.length", 3);
  });

  it("clear todo item", () => {
    cy.get(".clear:first").click({ multiple: true });
    cy.get(listItem).should("have.length", 2);
  });
});
