const { client } = require('./redis')

async function setRedis ({ key, value }) {
  return new Promise((resolve, reject) => {
    client.set(key, value, (err) => {
      if(err) {
        reject(err)
      } else {
        resolve()
      }
    })
  })
}

function getRedis({ key }) {
  return new Promise((resolve, reject) => {
    client.get(key, (err, data) => {
      if(err) {
        reject(err)
      } else {
        resolve(data)
      }
    })
  })
}

module.exports = {
  setRedis,
  getRedis
}