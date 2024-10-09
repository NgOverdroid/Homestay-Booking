const {DataTypes, Model} = require ('sequelize');
const sequelize = require('../database/database');
const {user} = require('../models/user');
const {room} = require('../models/Room');

class contract extends Model {};

contract.init(
    {
        "contract_id": {
            type: DataTypes.INTEGER,
            autoincrement: true,
            primaryKey: true,
        },
        "room_id": {
            type: DataTypes.INTEGER,
            references: {
                model: room,
                key: 'room_id'
            }
        },
        "user_id": {
            type: DataTypes.INTEGER,
            references: {
                model: user,
                key: 'user_id'
            }
        },
        "checkin": {
            type: DataTypes.DATE,
            allowNull: false,
            unique: true,
        },
        "checkout": {
            type: DataTypes.DATE,
            allowNull: false,
            unique: true
        },
        "status": {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: true
        },
        "total_cost": {
            type: DataTypes.DECIMAL,
            allowNull: false
        }
    },
    {
        sequelize,
        timestamps: false
    }
);

async function getVacantDates(){

}

module.exports = {getVacantDates};