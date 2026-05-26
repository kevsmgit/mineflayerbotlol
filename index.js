const mineflayer = require('mineflayer')

const bot = mineflayer.createBot({
  host: 'your.server.ip',
  port: 25565,
  username: 'SpawnBot'
})

bot.on('spawn', () => {
  console.log('Spawned')

  setTimeout(() => {
    bot.chat('/register Botiscool Botiscool') // replace with whatever
    console.log('Sent join message')
  }, 1000) // 1 second delay
})

bot.on('error', console.log)
bot.on('end', () => console.log('Disconnected'))
