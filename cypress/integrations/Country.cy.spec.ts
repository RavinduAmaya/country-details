describe("Country View Test", () => {
  it("successfully loads the country", () => {
    cy.visit("/country/Bhutan");
    cy.get("[data-cy=country-card]").should("exist");
    cy.get("[data-cy=country-card__title]").should("exist");
    cy.get("[data-cy=country-card__flag]").should("exist");
    cy.get("[data-cy=country-card__country-details]").should("exist");
    cy.get("[data-cy=country-card__sub-title]").should("exist");
    cy.get("[data-cy=country-card__sub-details]").should("exist");
    cy.get("[data-cy=country-card__currency]").should("exist");
    cy.get("[data-cy=country-card__language]").should("exist");
    cy.get("[data-cy=country-card__map-contaner]").should("exist");
  });
})