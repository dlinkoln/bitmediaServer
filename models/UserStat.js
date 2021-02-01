const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "db/user_stat.sqlite"
});

const UserStat = sequelize.define('UserStat', {
  user_id: {
    type: DataTypes.INTEGER,
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

