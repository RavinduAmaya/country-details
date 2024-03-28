import { defineConfig } from "cypress";
 
export default defineConfig({
  // component: {
  //   devServer: {
  //     framework: "nuxt",
  //     bundler: "v",
  //   },
  // },
 
  e2e: {
    baseUrl: "http://localhost:3000",
    specPattern: "./cypress/integrations/**/*.cy.spec.ts",
  },
});