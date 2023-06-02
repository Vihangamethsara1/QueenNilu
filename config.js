const fs = require('fs-extra')
if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname+'/config.env' })


//═══════[Required Variables]════════\\
global.password = 'vihanga'
global.owner = process.env.OWNER_NUMBER || ("94761105459") //Your Number
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://nilunilu:janith1234@cluster0.zluxwdv.mongodb.net/?retryWrites=true&w=majority" //Ur Mongodb URI
global.port= process.env.PORT || 5000
global.email = 'Queennilu@gmail.com' // ur Email
global.github = 'https://github.com/Jnaithsadanuwan/QueenNilu' //Github
global.location = 'Wellawaya LK'
global.gurl = 'https://instagram.com/janithsadanuwan' // add your username
global.sudo = process.env.SUDO || '94761105458'
global.devs = '94761105459';
global.website = 'https://janithsadanuwan.tech/QueenNilu' //wa.me/+91000000000000
global.THUMB_IMAGE = process.env.THUMB_IMAGE || 'https://telegra.ph/file/a4f16efb60aec2cd91f42.jpg'
module.exports = {
  NILU: process.env.NILU_PASSWORD === undefined ? 'vihanga' : process.env.NILU_PASSWORD,
  LANG: process.env.THEME|| 'SI', //Change Language 
  botname: process.env.BOT_NAME || '𝑫𝒂𝒓𝒌 𝑪𝒚𝒃𝒆𝒓 𝑩𝒐𝒕', //Bot Name
  alivelogo: process.env.ALIVE_LOGO || 'https://telegra.ph/file/e7df8d458a85466cdc785.jpg', //Alive Logo
  ownername:process.env.OWNER_NAME || 'Vihanga Methsara',
  sessionName: process.env.SESSION_ID || 'eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQUErOW1GUjIxc1BWQVBLM0VlQURLKzBuN1AyWklROXM0eUNOU2NpYWVtTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRU5PY3B1c2JhLzE5Q2Q5dEUyZzArMmFDVVR3bzlGanBnYzh0N2k0SlZVYz0ifX0sInNpZ25lZElkZW50aXR5S2V5Ijp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJJQzdTcFA0SjNBN1dTeWJSNHFic2MxbURXUzhQZXVLdXFXV1ZDWWNURm4wPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI4Y1lDTWZpZVpkaWloT1NBZFgrNXkrMUg3S1p6aDBRL3ZlUjMrSVVFTkJrPSJ9fSwic2lnbmVkUHJlS2V5Ijp7ImtleVBhaXIiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IllFSHpvbkJSdDh1bU9EU2dYMnZwTERrWnhrSWhKYmZzZjRWVVV0K25YMU09In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkRkTWwyRlJFaGM3aTU5Tm5LKzF5cnE3S0NzdWhrNUcvakZjZXRDbmh1bVk9In19LCJzaWduYXR1cmUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ2T1N0ZldqZThnSXhNQmk1dVoxOEZlZDlFRHhCTzNNbjhIbG0wWVZRMVozTUtNL0VyZWwvYXV6cjBMQWVTb2NwdlY0aytUYjVrQmZBNTNxeWhGbWxnQT09In0sImtleUlkIjoxfSwicmVnaXN0cmF0aW9uSWQiOjIyNSwiYWR2U2VjcmV0S2V5IjoiWVNlVUlHVGxubmxISXRLUEMwc1BBTXVrWmpmaTJaMW8rSEFtYXJnYmh4VT0iLCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXMiOltdLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDSlRpcnVrREVOWHk1S01HR0FFPSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJubEZmY2thY2NiRlZQR2NPVnJLcnZKTkVjYWNITS9aM1ZCVitucTRWTlc4PSIsImFjY291bnRTaWduYXR1cmUiOiJrcEtMR2JQMGh4MEtEVUhjREc5OXV2cXZlVXhERG1WV0J4ZUpZL2Z3cW1PN0JhV2t0SDRTb1A4ZFE2NEI0c3BwcTY3YVRXek5lQ21HeEoxY0N4THlDQT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiVzRaK0pwd2dibWo1K2l0MEZTYVVqY0pnU29VYW0wQzZNd3UwcVhxS3QySkxuVlE2c21GNncrdUszdmVEZEpNakxaM2R3eFVFZlgwZVFLSXVZd1p6aVE9PSJ9LCJtZSI6eyJpZCI6IjEzMTU4ODk2NTAyOjNAcy53aGF0c2FwcC5uZXQifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMTMxNTg4OTY1MDI6M0BzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJaNVJYM0pHbkhHeFZUeG5EbGF5cTd5VFJIR25CelAyZDFRVmZwNnVGVFZ2In19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNjg1NjY2MTM3fQ==',
  author: process.env.PACK_INFO || (";")[0] || 'Queen Nilu 💃', 
  auto_read_status : process.env.AUTO_READ_STATUS || 'true',
  packname: process.env.PACK_INFO || (";")[1] || 'Queen Nilu 💃', 
  autoreaction: process.env.AUTO_REACTION || 'on',
  antibadword : process.env.ANTI_BAD_WORD || 'sex',
  alwaysonline: process.env.ALWAYS_ONLINE || 'false',
  antifake : process.env.FAKE_COUNTRY_CODE || '',
  readmessage: process.env.READ_MESSAGE || false,
  HANDLERS: process.env.PREFIX || ['.'],
  warncount : process.env.WARN_COUNT || 3,
  disablepm: process.env.DISABLE_PM || "flase",
  levelupmessage: process.env.LEVEL_UP_MESSAGE || 'false',
  antilink: process.env.ANTILINK_VALUES || 'chat.whatsapp.com',
  antilinkaction: process.env.ANTILINK_ACTION || 'remove',
  BRANCH: 'main',
  ALIVE_MESSAGE: process.env.ALIVE_MESSAGE || '𝑯𝒆𝒚 𝑻𝒉𝒆𝒊𝒓 𝑴𝒚 𝑩𝒐𝒕 𝑰𝒔 𝑨𝒍𝒊𝒗𝒆 𝑵𝒐𝒘...❄️💗🖤           𝑻𝒚𝒑𝒆 [ .𝒎𝒆𝒏𝒖 ] 𝑮𝒆𝒕 𝑩𝒐𝒕 𝑪𝑴𝑫 𝑳𝒊𝒔𝒕 🙃🖤❄️             𝑻𝒉𝒂𝒏𝒌𝒔 𝑭𝒐𝒓 𝑼𝒔𝒊𝒏𝒈 𝑫𝒂𝒓𝒌 𝑪𝒚𝒃𝒆𝒓 𝑩𝒐𝒕💗🌀 ',
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || 'OPENAI_KEY',
  VERSION: process.env.VERSION === undefined ? 'v.2.0.0' : process.env.VERSION,
  WORKTYPE: process.env.WORKTYPE === undefined ? 'public' : process.env.WORKTYPE
};


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update'${__filename}'`)
    delete require.cache[file]
	require(file)
})
