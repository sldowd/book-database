const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Book extends Model {

}

Book.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true,
            unique: true
        },
        title: {
            type: DataTypes.STRING,
            primaryKey: true,
            allowNull: false,
            unique: true
        },
        author: {
            type: DataTypes.STRING,
            primaryKey: true,
            allowNull: false
        },
        year_completed: {
            type: DataTypes.INTEGER(4),
            primaryKey: true,
            allowNull: false
        },
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'user',
                key: 'id'
            }
        }
    },
    {
        sequelize,
        timestamps: true,
        underscored: true,
        freezeTableName: true,
        modelName: 'Books'
    }
);

module.exports = Book;