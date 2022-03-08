const express = require("express");
const {schema} = require('./data/schema');
const {graphqlHTTP} = require("express-graphql");

var app = express()
app.get('/', (req, res) => {
    res.send('Graphql is working!');
});
app.use('/graphql', graphqlHTTP ({
    schema,
    graphiql: true,
}));

app.listen(8080,() => console.log("Running on server port localhost:8080/graphql"));