/// <reference types="cypress" />

import data from "../../src/data/data.json";

describe("application end to end tests", () => {
  it("should render all car types", () => {
    cy.visit("/");
    const types = data.types.map((type) => type.name);
    types.forEach((type) => {
      cy.contains(type);
    });
  });

  it("should render parts when a type gets clicked", () => {
    cy.visit("/");
    const types = data.types.map((type) => type.name);
    cy.contains(types[0]).click();
    const parts = data.types[0].parts.map((part) => part.name);
    parts.forEach((part) => {
      cy.contains(part);
    });
  });

  it("should render cars when a type and a part get selected", () => {
    cy.visit("/");
    const types = data.types.map((type) => type.name);
    cy.contains(types[0]).click();
    const parts = data.types[0].parts.map((part) => part.name);
    cy.contains(parts[0]).click();
    const cars = data.types[0].parts[0].cars.map((car) => car.name);
    cars.forEach((car) => {
      cy.contains(car);
    });
  });
});
