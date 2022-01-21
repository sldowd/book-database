const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const bcrypt = require('bcrypt');

class User extends Model {
    checkPassword(loginPw) {
        return bcrypt.compareSync(loginPw, this.password);
    }
}

User.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                //built in sequelize email validator
                isEmail: true
            }
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                //regex validates that password has at least 8 characters and 
                //contains one of each character: uppercase, lowercase, digit, special
                is: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
                
            }
        }
    },
    {   
        hooks: {
            //set up beforeCreate hook to hash password when user is created
            async beforeCreate(newUserData) {
                newUserData.password = await bcrypt.hash(newUserData.password, 10)
            },
            //set up beforeUpdate hook to hash password when user is updated
            async beforeUpdate(newUserData) {
                newUserData.password = await bcrypt.hash(newUserData.password, 10)
            },
        },
        //pass in imported sequelize connection
        sequelize,
        //don't include timestamp
        timestamps: false,
        freezeTableName: true,
        //underscored vs camelCase
        underscored: true,
        moduleName: 'user'
    }
);

module.exports = User;