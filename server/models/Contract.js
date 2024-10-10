const {DataTypes, Model, QueryTypes} = require ('sequelize');
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

async function getVacantDates(room_id){
    try{
        const vacant_dates = await sequelize.query(`
            SELECT checkin, checkout FROM contracts
            WHERE room_id = ${room_id};
            `, {
                type: QueryTypes.SELECT,
                model: contract,
                mapToModel: true
        });
        
        return vacant_dates;
    }
    catch(error) {
        return error;
    }
}

module.exports = {getVacantDates};