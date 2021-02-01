const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "db/user.sqlite"
});

const User = sequelize.define('User', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
  },
  first_name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  last_name: {
    type: DataTypes.STRING
  },
  email: {
    type: DataTypes.STRING
  },
  gender: {
    type: DataTypes.STRING
  },
  ip_address: {
    type: DataTypes.STRING
  }
}, {
  freezeTableName: true,
  timestamps: false,
});

User.sync();


module.exports = User

