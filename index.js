const TelegramBot = require('node-telegram-bot-api');
const express = require('express');
const markazotp = require('./lib/markazotp')
require('dotenv').config()


const app = express();
const botToken = process.env.TELEGRAM_BOT_TOKEN || '6029494171:AAHJOa18i02JYVy_PqVDAvW5IKe2rB5FtGY';
const bot = new TelegramBot(botToken,{polling:true});
const port = process.env.PORT||5000

app.use(express.json());

const channelId = '-1001862686008'

async function getUserVerified(channelId,userId) {
  try {
    const user = await bot.getChatMember(channelId,userId);
    console.log(user)
    if(user.status =='member' || user.status =='creator')
    return true
    else 
    return false
   
  } catch (error) {
    console.error('Error:', error.message);
  }
}

  

const commands = [
  { command: 'start', description: 'Start the bot' },
  { command: '/num', description: 'Type your number /num 03330000000' },
  { command: '/otp', description: 'Type your number /otp 03330000000' },
  // Add more commands as needed
];
bot.onText(/\/n1/,(msg)=>{
  bot.sendMessage(msg.chat.id, 'Coming soon on website')
})
// Set the bot commands
bot.setMyCommands(commands)
bot.onText(/\/getmembers/, async (msg) => {
 const chatId= msg.chat.id
 const res= await getUserVerified(channelId,msg.from.id)
 bot.sendMessage(chatId,res?'joined':'Not joinded')
  
});
bot.onText(/\/start/, async (msg) => {
  console.log('runing localhost')
  const chatId = msg.chat.id;
  bot.sendMessage(chatId, 'Otp bot for pakistan.');
});

bot.onText(/\/num/, async (msg) => {
  const chatId = msg.chat.id;
  const number = msg.text.split(' ')[1];
  if(! await getUserVerified(channelId,msg.from.id)) return bot.sendMessage(chatId,'Please JOIN the Channel First: @TALHARIAZC')

 bot.sendMessage(chatId,'visit website: https://ufone.cyclic.app');
});
bot.onText(/\/otp/, async (msg) => {
  const chatId = msg.chat.id;
  const number = msg.text.split(' ')[1];
  if(!number) return bot.sendMessage(chatId,'plese input number')
  // if(! await getUserVerified(channelId,msg.from.id)) return bot.sendMessage(chatId,'Please JOIN the Channel First: @TALHARIAZC')
 bot.sendMessage(chatId, 'WAIT...')
  const res = await markazotp(number)
  const text = `data1:${res.data1.statusType}\ndata2:${res.data2.statusType}\ndata3:${res.data3.statusType}\ndata4:${res.data4.statusType}\ndata5:${res.data5.statusType}\ndata6:${res.data6.statusType}\ndata7:${res.data7.statusType}\ndata8:${res.data8.statusType}\n`
 bot.sendMessage(chatId,text);
});
bot.on('callback_query',async (query) => {
  const chatId = query.message.chat.id;
  const buttonClicked = query.data.split('_')[0];
  const number = query.data.split('_')[1]
 
});
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});