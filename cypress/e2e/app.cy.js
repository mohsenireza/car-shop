/// <reference types="cypress" />

import data from "../../src/data/data.json";

describe("application end to end tests", () => {
  it("should render all car types", () => {
    cy.visit("/");
    // Check if all types are in the UI
    const types = data.types.map((type) => type.name);
    types.forEach((type) => {
      cy.contains(type);
    });
  });

  it("should render parts when a type gets clicked", () => {
    cy.visit("/");
    // Click on the first type
    const types = data.types.map((type) => type.name);
    cy.contains(types[0]).click();
    // Check if all parts from the selected type are in the UI
    const parts = data.types[0].parts.map((part) => part.name);
    parts.forEach((part) => {
      cy.contains(part);
    });
  });

  it("should render cars when a type and a part get selected", () => {
    cy.visit("/");
    // Click on the first type
    const types = data.types.map((type) => type.name);
    cy.contains(types[0]).click();
    // Click on the first part
    const parts = data.types[0].parts.map((part) => part.name);
    cy.contains(parts[0]).click();
    // Check if all cars with the selected type and part are in the UI
    const cars = data.types[0].parts[0].cars.map((car) => car.name);
    cars.forEach((car) => {
      cy.contains(car);
    });
  });
});
