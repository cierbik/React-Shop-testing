/// <reference types="cypress" />
describe("Page for seraching github acc", () => {
  beforeEach(() => {
    cy.visit("https://gh-users-search.netlify.app");
  });
  it("Check that all elems are visible", () => {
    cy.request({
      method: "GET",
      url: "https://gh-users-search.netlify.app/static/js/main.9d3b4fe8.js",
    }).as("mainViewApi");
    cy.get("@mainViewApi").then((res) => {
      expect(res.status).to.eq(200);
    });
    cy.get(".sc-iBYQkv").should("be.visible").and("have.text", "Welcome");
    cy.get(".sc-jSUZER").should("be.visible");
    cy.get(".sc-bcXHqe").should("be.visible");
    cy.get(".sc-eDvSVe").should("be.visible");
  });
});
