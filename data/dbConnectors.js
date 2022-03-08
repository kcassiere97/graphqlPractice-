const mongoose = require('mongoose');
const Sequelize = require('sequelize');
const _ = require('lodash');
const casual = require('casual');
const Module = require('module');
const { NUMBER } = require('sequelize');
const { Number } = require('core-js');


//Mongo connection 
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/ev', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
// define the type in the database level 
const evSchema = new mongoose.Schema ({
    id: {
        type: NUMBER
    },
    name: {
        type: String
    },
    type: {
        type: String
    } ,
    lat: {
        type: NUMBER
    },
    long: {
        type: NUMBER
    },
    rating:{
        type: NUMBER
    }
})
const EVs = mongoose.model('evs', evSchema);

// SQL
const sequelize = new Sequelize('database'({
    dialect: 'sqlite',
    //storage location
    storage: './'
}));


 EVs = sequelize.define('evs',{
     name:{type: Sequelize.STRING},
     type:{type: Sequelize.STRING},
     lat:{type: Sequelize.FLOAT},
     long:{type: Sequelize.FLOAT},
     rating:{type: Sequelize.INTEGER}

}),

EVs.syncIndexes({force:true})

 module.exports = EVs;
