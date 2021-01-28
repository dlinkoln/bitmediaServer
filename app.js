
const users = require('./storage/users')
const users_statistic = require('./storage/users_statistic')
const User = require('./models/User');
const UserStat = require('./models/UserStat')
const Koa = require('koa');
const Router = require('@koa/router');
const app = new Koa();
const router = new Router();


router.get('/', async (ctx, next) => {
  ctx.body = {
    error: false,
    test: "Test"
  };
})
router.get('/users', async (ctx, next) => {
  try {
    // const jane = await User.create();
    // const janeStat = await UserStat.create()
    ctx.body("ok")
  }
  catch (err) {
    console.error(err)
  }
})

app
  .use(router.routes())
  .use(router.allowedMethods());

app.listen(3000);