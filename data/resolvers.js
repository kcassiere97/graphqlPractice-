// const evDatabase = {};
const {EVs} = require('./dbConnectors');
const { error } = require("console");
const { reject } = require("core-js/fn/promise");


//resolver map (lets you interatct with the database)
const resolvers = {

    Query: {
        getOneEV: (root,{id}) => {
            return new Promise((resolve, object) => {
                EVs.findById(id,(error,ev) => {
                    if(error){
                        reject (error)
                    } else {
                        resolver (ev)
                    }
                })
            })
        },
    },
    Mutation: {
        createEV: (root,{input}) => {
            // let id = require('crypto').randomBytes(10).toString('hex');
            // evDatabase[id] = input;
            const newEV = new EV({
                name: input.name,
                type: input.type,
                lat: input.lat,
                long: input.long,
                rating: input.rating,
            });
              
            createEV.id = newEv._id;
            return new Promise((resolve, object) => {
                if(error){
                    reject (error)
                } else {
                    resolver (newEV)
                }
            })
        },
        updateEV: (root,{input}) => {
            return new Promise((resolve, object) => {
                EVs.findOneAndUpdate({_id: input.id}, input,{new:true},(error,ev) => {
                    if(error){
                        reject (error)
                    } else {
                        resolver (ev)
                    }
                })
            })
        },

        deleteEV: (root,{id}) => {
            return new Promise((resolve, object) => {
                EVs.remove({_id: input.id}, input,{new:true},(error,ev) => {
                    if(error){
                        reject (error)
                    } else {
                        resolver (ev)
                    }
                })
            })
        },
    },
};

module.exports = resolvers;