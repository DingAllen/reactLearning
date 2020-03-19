const router = require('koa-router')()
const {exec} = require('../db/mysql')

router.get('/', async (ctx, next) => {
  await ctx.render('index', {
    title: 'Hello Koa 2!'
  })
})

router.get('/string', async (ctx, next) => {
  ctx.body = 'koa2 string'
})

router.get('/json', async (ctx, next) => {
  ctx.body = {
    title: 'koa2 json'
  }
})

router.get('/mysql', async (ctx, next) => {
  const test = await exec(
    `select name,age from person where age=45`
  ).then(val => {
    return val
  })
  ctx.body = {
    title: '连接数据库玩玩',
    data: test
  }
})

module.exports = router
