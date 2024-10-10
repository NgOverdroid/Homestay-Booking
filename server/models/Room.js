const {DataTypes, Model, QueryTypes} = require('sequelize');
const sequelize = require('../database/database');
const {user} = require('../models/user');

class room extends Model {}

room.init(
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
                model: user,
                key: 'user_id'
            }
        },
        'cost': {
            type: DataTypes.DECIMAL,
            allowNull: false
        },
        'description': {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        'img_src': {
            type: DataTypes.TEXT,
            allowNull: false,
        }
    },
    {
        sequelize,
        timestamps: false
    }
);

async function getRoom(room_id){
    try{
        const find_room = await room.findByPk(room_id);
        return find_room;
    }
    catch(error) {
        return error;
    }
}

async function getHomepageRooms(){
    try{
        const find_rooms = await sequelize.query(`
            SELECT room_id, state, city, cost, img_src FROM rooms
            LIMIT 36
            `, {
            type: QueryTypes.SELECT,
            model: room,
            mapToModel: true, 
          });
        return find_rooms;
    } catch(error){
        return error;
    }
}

async function searchRooms(state, checkin, checkout){
    const results = await sequelize.query(`
        SELECT * FROM rooms
        WHERE state=${state} OR city=${state} AND checkin<>${checkin} AND checkout<>${checkout};
        `);
}
module.exports = {room, getRoom, getHomepageRooms, searchRooms};