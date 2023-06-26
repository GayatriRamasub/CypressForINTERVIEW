const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      baseUrl: 'http://localhost:8888'
    },

    specPattern: 'cypress/integration/*.js',
    defaultCommandTimeout: 10000,
    projectId: "z5qi1h"
  },

  "env": {
    "mongodb": {
        "uri": "mongodb://localhost:27017",
        "database": "database_name",
        "collection": "collection_name"
    }
}
})

//{
 // module.exports = defineConfig({
   //   "env": {
     //     "mongodb": {
       //       "uri": "mongodb://localhost:27017",
         //     "database": "database_name",
          //    "collection": "collection_name"
          //}
    //  }
  //});
//}

//const mongo = require('cypress-mongodb');



//import {defineConfig} from 'cypress'
//import {configurePlugin} from 'cypress-mongodb';

/**
 * @type {Cypress.PluginConfig}
 */
//export default defineConfig({
  //  e2e: {
    ///    setupNodeEvents(on) {
          //  configurePlugin(on);
       // }
    //}
//});
