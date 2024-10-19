const {DataTypes, Model} = require("sequelize");
const sequelize = require('../database/database');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const saltRounds = 10;
require('dotenv').config({path: "../.env"});

class User extends Model {}

User.init(
    {
        'user_id': {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        'first_name': {
            type: DataTypes.STRING(20),
            allowNull: false
        },
        'last_name': {
            type: DataTypes.STRING(20),
            allowNull: false
        },
        'email': {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true
            }
        },
        'password': {
            type: DataTypes.STRING,
            allowNull: false
        }
    },
    {
        sequelize,
        timestamps: false,
        tableName: 'users'
    }
);

async function signin(email, password) {
    try {
        const found_user = await User.findOne({ where: { email} });
        if (found_user) {
            const compare = bcrypt.compareSync(password, found_user.password);
            if(compare)
                return true;
            else 
                return false;
        } 
        else 
            return false;
    } catch(error) {
        return error;
    }
}

async function createNewUser(first_name, last_name, email, password){
    try{
        const hashed_password = bcrypt.hashSync(password, saltRounds);
        const new_user = await User.create(
            {
                'first_name': first_name,
                'last_name': last_name,
                'email': email,
                'password': hashed_password,
            }
        );
        return new_user.user_id;
    }
    catch(error){
        return error;
    }
}

async function deleteUser(email, password){
    try {
        const found_user = await User.findOne({ where: { email} });
        if (found_user) {
            const compare = bcrypt.compareSync(password, found_user.password);
            if(compare)
                return;
            else 
                return false;
        } 
        else 
            return false;
    } catch(error) {
        console.log("Error at /models/UserModel.js" + error);
    }
}

function createToken(id){
    const secret = process.env.JWT_SECRET;
    const token = jwt.sign(
        {id}, 
        secret, 
        {
            expiresIn: 259200,
        }
    );
    return token;
}

function checkToken(cookie){
    
}

module.exports = {User, signin, createNewUser, deleteUser, createToken};