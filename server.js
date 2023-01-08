const { setRedis, getRedis } = require('./redis.helper')

async function init() {
  await setRedis({ key: 'kajame', value: 'kajame.xyz' })
  const redisData = await getRedis({ key: 'kajame' })

  console.log(redisData)
}

init()
