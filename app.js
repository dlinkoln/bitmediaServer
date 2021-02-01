
const User = require('./models/User');
const UserStat = require('./models/UserStat')
const Koa = require('koa');
const Router = require('@koa/router');
const checkAndReturn = require('./utils/checkAndReturn.js')
const app = new Koa();
const router = new Router();
const { Op } = require('sequelize')
const users = require('./storage/users')
const users_statistic = require('./storage/users_statistic')

// const users_stat_test = require('./storage/users_stat_test')


router.delete('/all', async (ctx, next) => {
  await UserStat.destroy({ truncate: true })
  await User.destroy({ truncate: true })
  ctx.body = "ok"
})
router.get('/users', async (ctx, next) => {
  try {
    ctx.body = await User.findAll({
      where: {
        id: {
          [Op.lt]: 50,
        }
      }
    })
  }
  catch (err) {
    ctx.body = err
  }
})
router.get('/stat', async (ctx, next) => {
  try {
    ctx.body = await UserStat.findAll({})
  }
  catch (err) {
    ctx.body = err
  }
})

app
  .use(router.routes())
  .use(router.allowedMethods());

app.listen(
  3000,
  checkAndReturn(users, User),
  checkAndReturn(users_statistic, UserStat),
  () => console.log("server is starting")
);