describe("Country List Test", () => {
  it("successfully loads first ten countries", () => {
    cy.visit("/");
    cy.get("[data-cy=country-list]").should("exist");
    cy.get("[data-cy=country-list__container]").should("exist");
    cy.get("[data-cy=country-list__item]")
      .should("exist")
      .should("have.length", 10);
    cy.get("[data-cy=country-list__url-link]").should("exist");
    cy.get("[data-cy=country-list__flag]").should("exist");
    cy.get("[data-cy=country-list__flag-container]").should("exist");
    cy.get("[data-cy=country-list__country]").should("exist");
  });
  it("successfully loads ten countries after clicking the button", () => {
    cy.visit("/");
    cy.get("[data-cy=country-list__view-more-button]").should("exist");
    cy.wait(2000);
    cy.get("[data-cy=country-list__view-more-button]").click();
    cy.get("[data-cy=country-list__item]")
      .should("exist")
      .should("have.length", 20);
  });
});
