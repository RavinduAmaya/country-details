describe("Country List View Test", () => {
  it("successfully loads the countries list", () => {
    cy.visit("/");
    cy.get("[data-cy=country-list]").should("exist");
    cy.get("[data-cy=country-list__container]").should("exist");
    cy.get("[data-cy=country-list__item]").should("exist").should("have.length", 10);
    cy.get("[data-cy=country-list__url-link]").should("exist");
    cy.get("[data-cy=country-list__flag]").should("exist");
    cy.get("[data-cy=country-list__flag-container]").should("exist");
    cy.get("[data-cy=country-list__country]").should("exist");
    cy.get("[data-cy=country-list__view-more-button]").should("exist").click();
  });
})