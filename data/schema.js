const {makeExecutableSchema} = require("graphql-tools");
const {resolvers} = require("./resolvers")

const typeDefs = `
    type EV {
        id: ID,
        name: String,
        type: String,
        lat: Float,
        long: Float,
        rating: Int
    }
    type Query {
        getEV(id: ID): EV

    }
    input EVInput{
        id: ID,
        name: String,
        type: String,
        lat: Float,
        long: Float,
        rating: Int
    }
    type Mutation{
        createEV(input: EVInput): EV
        updateEV(input: EVInput): EV
        deleteEV(id: ID!): String 
    }
`;

const schema = makeExecutableSchema({typeDefs,resolvers})
module.exports = schema;