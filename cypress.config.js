/// <reference types="cypress" />

const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
    },
  },
  env: {
    MAILOSAUR_API_KEY: "4mnggEVzqmFm6Qc2",
    },  
});


 
