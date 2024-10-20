const {DataTypes, Model, QueryTypes} = require ('sequelize');
const sequelize = require('../database/database');
const {User} = require('../models/UserModel');
const {Room} = require('../models/RoomModel');

const months = ['01','02','03','04','05','06','07','08','09','10','11','12'];
class Contract extends Model {};

Contract.init(
    {
        "contract_id": {
            type: DataTypes.INTEGER,
            autoincrement: true,
            primaryKey: true,
        },
        "room_id": {
            type: DataTypes.INTEGER,
            references: {
                model: Room,
                key: 'room_id'
            }
        },
        "user_id": {
            type: DataTypes.INTEGER,
            references: {
                model: User,
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
            SELECT checkin, checkout, 
            CASE 
            WHEN EXTRACT(MONTH FROM checkin)=1 OR EXTRACT(MONTH FROM checkout)=1 THEN '01'
            WHEN EXTRACT(MONTH FROM checkin)=2 OR EXTRACT(MONTH FROM checkout)=2 THEN '02'
            WHEN EXTRACT(MONTH FROM checkin)=3 OR EXTRACT(MONTH FROM checkout)=3 THEN '03'
            WHEN EXTRACT(MONTH FROM checkin)=4 OR EXTRACT(MONTH FROM checkout)=4 THEN '04'
            WHEN EXTRACT(MONTH FROM checkin)=5 OR EXTRACT(MONTH FROM checkout)=5 THEN '05'
            WHEN EXTRACT(MONTH FROM checkin)=6 OR EXTRACT(MONTH FROM checkout)=6 THEN '06'
            WHEN EXTRACT(MONTH FROM checkin)=7 OR EXTRACT(MONTH FROM checkout)=7 THEN '07'
            WHEN EXTRACT(MONTH FROM checkin)=8 OR EXTRACT(MONTH FROM checkout)=8 THEN '08'
            WHEN EXTRACT(MONTH FROM checkin)=9 OR EXTRACT(MONTH FROM checkout)=9 THEN '09'
            WHEN EXTRACT(MONTH FROM checkin)=10 OR EXTRACT(MONTH FROM checkout)=10 THEN '10'
            WHEN EXTRACT(MONTH FROM checkin)=11 OR EXTRACT(MONTH FROM checkout)=11 THEN '11'
            WHEN EXTRACT(MONTH FROM checkin)=12 OR EXTRACT(MONTH FROM checkout)=12 THEN '12'
            END AS month
            FROM contracts
            WHERE room_id = ${room_id};
            `, {
                type: QueryTypes.SELECT,
                model: Contract,
                mapToModel: true
        });

        return months.map(month =>{
            let result = vacant_dates
                        .filter(date => date.month == month);
            if (result)
                return result;
        });
    }
    catch(error) {
        return error;
    }
}

async function getContract(user_id){
    try{
        const contract = await sequelize.query(`
            SELECT * FROM CONTRACT
            WHERE user_id=${user_id};
            `,{});
    }
    catch(error){

    }
}

module.exports = {Contract, getVacantDates, getContract};