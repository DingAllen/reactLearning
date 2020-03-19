const router = require('koa-router')()
const Redis = require('koa-redis')

const Store = new Redis().client

router.prefix('/users')

router.get('/', function (ctx, next) {
  ctx.body = 'this is a users response!'
})

router.get('/bar', function (ctx, next) {
  ctx.body = 'this is a users/bar response'
})

router.get('/fix', async function(ctx) {
  const st = await Store.hset('fix', 'name', Math.random())
  ctx.body = {
    code: 0
  }
})

module.exports = router
