const {DataTypes, Model} = require("sequelize");
const sequelize = require('../database/database');
const bcrypt = require('bcrypt');
const saltRounds = 10;

class user extends Model {}

user.init(
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
        timestamps: false
    }
);

async function signin(email, password) {
    try {
        const found_user = await user.findOne({ where: { email} });
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

async function emailExists(email){
    const find_email = await user.findOne({ where: { email } });
    return !!find_email; // Returns true if email exists, otherwise false
}

async function createNewUser(first_name, last_name, email, password){
    try{
        const hashed_password = bcrypt.hashSync(password, saltRounds);
        const new_user = await user.create(
            {
                'first_name': first_name,
                'last_name': last_name,
                'email': email,
                'password': hashed_password,
            }
        );
        console.log(new_user instanceof user);
        return new_user.email;
    }
    catch(error){
        console.log("Error at /models/User.js " + error);
    }
}

async function deleteUser(email, password){
    try {
        const found_user = await user.findOne({ where: { email} });
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
        console.log("Error at /models/User.js" + error);
    }
}

module.exports = {user, signin, createNewUser, emailExists, deleteUser};