const {Sequelize} = require('sequelize');
require('dotenv').config({path: "../.env"});

const sequelize = new Sequelize(
    process.env.DATABASE_NAME, 
    process.env.DB_USERNAME, 
    process.env.DB_PASSWORD, 
    {
        host: process.env.DB_HOST,
        dialect: 'postgres'
    }
);

module.exports = sequelize;