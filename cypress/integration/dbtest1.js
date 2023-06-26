cy.createCollection('new_collection', {database: 'new_database'}); // creates both collection and database

const oneDocument = {document: 1};
cy.insertOne(oneDocument, {collection: 'some_collection', database: 'some_database'}).then(res => {
    cy.log(res); // prints the id of inserted document
});

const manyDocuments = [{document: 1}, {document: 2}];
cy.insertMany(manyDocuments, {collection: 'some_other_collection'}).then(res => { // defaults to database from env variable
    console.log(res); // prints the key-value pairs with inserted ids
});

const deleteClause = {document: 1};
cy.deleteOne(oneDocument, {collection: 'new_collection', database: 'some_database'}).then(res => {
    cy.log(res); // prints 1 (or 0) document deleted
});

cy.deleteMany(deleteClause).then(res => { // defaults to collection and database from env variables
    cy.log(res); // prints '# documents deleted'
});

const pipeline = []; // any kind of aggregationcd 
cy.aggregate(pipeline).then(res => {
    cy.log(res); // prints the result of the aggregation
});

cy.dropCollection('start_new').then(res => {
    cy.log(res); // prints 'Collection dropped'
});