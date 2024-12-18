const {DataTypes, Model, QueryTypes} = require('sequelize');
const sequelize = require('../database/database');
const {User} = require('../models/UserModel');

class Room extends Model {}

Room.init(
    {
        'room_id': {
            type: DataTypes.INTEGER,
            primaryKey: true,
        },
        'state': {
            type: DataTypes.STRING,
            allowNull: false
        },
        'city': {
            type: DataTypes.STRING
        },
        'owner_id': {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: User,
                key: 'user_id'
            }
        },
        'cost': {
            type: DataTypes.DECIMAL,
            allowNull: false,
            validate: {
                isDecimal: true
            }
        },
        'description': {
            type: DataTypes.TEXT,
        },
        'img_src': {
            type: DataTypes.TEXT,
            allowNull: false,
        }
    },
    {
        sequelize,
        timestamps: false,
        tableName: 'rooms'
    }
);

async function getRoom(room_id){
    try{
        const find_room = await Room.findByPk(room_id);
        return find_room;
    }
    catch(error) {
        throw error;
    }
}

async function getHomepageRooms(){
    try{
        const find_rooms = await sequelize.query(`
            SELECT room_id, state, city, cost, img_src FROM rooms
            LIMIT 36
            ORDER BY cost ASC
            `, {
            type: QueryTypes.SELECT,
            model: Room,
            mapToModel: true, 
        });
        return find_rooms;
    } catch(error){
        throw error;
    }
}

async function searchRooms(state, checkin, checkout){
    const results = await sequelize.query(`
        SELECT * FROM rooms
        WHERE state=${state} OR city=${state} AND checkin<>${checkin} AND checkout<>${checkout};
        `);
}

module.exports = {Room, getRoom, getHomepageRooms, searchRooms};