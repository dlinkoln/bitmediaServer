const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:');

const UserStat = sequelize.define('UserStat', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
  },
  date: {
    type: DataTypes.DATE,
  },
  page_views: {
    type: DataTypes.INTEGER,
  },
  clicks: {
    type: DataTypes.INTEGER,
  }
}, {
  freezeTableName: true,
  timestamps: false,
});

UserStat.sync();


module.exports = UserStat

