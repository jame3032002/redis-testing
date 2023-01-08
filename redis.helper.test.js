jest.mock('redis', () => jest.requireActual('redis-mock'))

const { setRedis, getRedis } = require('./redis.helper')

describe('setRedis and getRedis', () => {
  it('Should set and get data from redis', async () => {
    const key = 'example'
    const value = 'kajame'

    await setRedis({ key, value })
    const data = await getRedis({ key })

    expect(data).toEqual(value)
  })
})