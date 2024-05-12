const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2347040340467";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "true";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "true", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_02_46_05_12_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg0LFxuICAgICAgICAxNDAsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTE4LFxuICAgICAgICAzNyxcbiAgICAgICAgMTg1LFxuICAgICAgICAxOTYsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTc0LFxuICAgICAgICAxMDksXG4gICAgICAgIDkwLFxuICAgICAgICAxOTgsXG4gICAgICAgIDk2LFxuICAgICAgICAxNjgsXG4gICAgICAgIDE5MyxcbiAgICAgICAgODgsXG4gICAgICAgIDI1MCxcbiAgICAgICAgOCxcbiAgICAgICAgMTUxLFxuICAgICAgICAyOCxcbiAgICAgICAgMTIxLFxuICAgICAgICAxOTcsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMSxcbiAgICAgICAgMjUzLFxuICAgICAgICAxODAsXG4gICAgICAgIDU4LFxuICAgICAgICAxNjAsXG4gICAgICAgIDQ5LFxuICAgICAgICAyMDEsXG4gICAgICAgIDI0MSxcbiAgICAgICAgOTNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA4LFxuICAgICAgICAxNTAsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTQ3LFxuICAgICAgICAxOTMsXG4gICAgICAgIDE1MyxcbiAgICAgICAgNzYsXG4gICAgICAgIDU4LFxuICAgICAgICAxNzMsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjE5LFxuICAgICAgICAxNDEsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTUxLFxuICAgICAgICA4MCxcbiAgICAgICAgMTI2LFxuICAgICAgICAxMTIsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTc4LFxuICAgICAgICAxMzUsXG4gICAgICAgIDE4NSxcbiAgICAgICAgNDEsXG4gICAgICAgIDY5LFxuICAgICAgICAzMyxcbiAgICAgICAgMjI3LFxuICAgICAgICAxMDYsXG4gICAgICAgIDQ3LFxuICAgICAgICA2MyxcbiAgICAgICAgMjQyLFxuICAgICAgICA0NyxcbiAgICAgICAgMTI0LFxuICAgICAgICA3MVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYwLFxuICAgICAgICAyMzMsXG4gICAgICAgIDIyMCxcbiAgICAgICAgNzAsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMzYsXG4gICAgICAgIDIyNyxcbiAgICAgICAgNTksXG4gICAgICAgIDEyNixcbiAgICAgICAgMTE1LFxuICAgICAgICAxMjYsXG4gICAgICAgIDMxLFxuICAgICAgICA5MSxcbiAgICAgICAgMjQ2LFxuICAgICAgICA2MixcbiAgICAgICAgMTA5LFxuICAgICAgICAxNjcsXG4gICAgICAgIDE2MixcbiAgICAgICAgODUsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjQxLFxuICAgICAgICAxNDgsXG4gICAgICAgIDYyLFxuICAgICAgICAxNTksXG4gICAgICAgIDE5LFxuICAgICAgICA4NSxcbiAgICAgICAgMTI3LFxuICAgICAgICA3OSxcbiAgICAgICAgMTQzLFxuICAgICAgICA5MixcbiAgICAgICAgMTcyLFxuICAgICAgICAxMjJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ4LFxuICAgICAgICAyMTQsXG4gICAgICAgIDE5NixcbiAgICAgICAgOTgsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTYsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMzksXG4gICAgICAgIDQzLFxuICAgICAgICAxMTQsXG4gICAgICAgIDkyLFxuICAgICAgICAxNDgsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjA2LFxuICAgICAgICAxNzgsXG4gICAgICAgIDQxLFxuICAgICAgICAxOTEsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxODgsXG4gICAgICAgIDI1MyxcbiAgICAgICAgNzMsXG4gICAgICAgIDY2LFxuICAgICAgICAyMTIsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMjIxLFxuICAgICAgICA4OSxcbiAgICAgICAgMjUyLFxuICAgICAgICA4NyxcbiAgICAgICAgMjcsXG4gICAgICAgIDE2NCxcbiAgICAgICAgODVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDAsXG4gICAgICAgIDIyLFxuICAgICAgICAxNzYsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTk3LFxuICAgICAgICAxMDYsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTUyLFxuICAgICAgICA1MSxcbiAgICAgICAgMTU2LFxuICAgICAgICAyMTksXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjI0LFxuICAgICAgICA1NSxcbiAgICAgICAgNzgsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjE0LFxuICAgICAgICAxOTMsXG4gICAgICAgIDE1LFxuICAgICAgICAxMDUsXG4gICAgICAgIDUzLFxuICAgICAgICAxNzcsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTkzLFxuICAgICAgICAyNDAsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjA4LFxuICAgICAgICAzOSxcbiAgICAgICAgNzYsXG4gICAgICAgIDI1LFxuICAgICAgICAxNDUsXG4gICAgICAgIDgyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTEzLFxuICAgICAgICAxOCxcbiAgICAgICAgMzMsXG4gICAgICAgIDU2LFxuICAgICAgICA1MixcbiAgICAgICAgMTY4LFxuICAgICAgICAxODcsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTU3LFxuICAgICAgICA5OCxcbiAgICAgICAgMTk2LFxuICAgICAgICAxMzEsXG4gICAgICAgIDEyNCxcbiAgICAgICAgNjEsXG4gICAgICAgIDY5LFxuICAgICAgICAxNzEsXG4gICAgICAgIDEsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTk1LFxuICAgICAgICAxNDIsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMSxcbiAgICAgICAgOTEsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTQsXG4gICAgICAgIDQwLFxuICAgICAgICAxNDcsXG4gICAgICAgIDQ3LFxuICAgICAgICAyNyxcbiAgICAgICAgMzUsXG4gICAgICAgIDEwMFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAxNixcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgODlcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDQ3XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTgsXG4gICAgICAgIDM2LFxuICAgICAgICAyMzAsXG4gICAgICAgIDI2LFxuICAgICAgICA5LFxuICAgICAgICAxMTEsXG4gICAgICAgIDE5OCxcbiAgICAgICAgNjUsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjQ3LFxuICAgICAgICAxNjcsXG4gICAgICAgIDEyNCxcbiAgICAgICAgNCxcbiAgICAgICAgMTA1LFxuICAgICAgICA4LFxuICAgICAgICAxNTAsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTI2LFxuICAgICAgICAzMixcbiAgICAgICAgMzIsXG4gICAgICAgIDIsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjEyLFxuICAgICAgICAyMTEsXG4gICAgICAgIDcyLFxuICAgICAgICA4MSxcbiAgICAgICAgMTExLFxuICAgICAgICAxOCxcbiAgICAgICAgNzQsXG4gICAgICAgIDcyLFxuICAgICAgICA3LFxuICAgICAgICAyNTIsXG4gICAgICAgIDg2LFxuICAgICAgICAyMzAsXG4gICAgICAgIDI0LFxuICAgICAgICAxMTksXG4gICAgICAgIDEzMSxcbiAgICAgICAgNTUsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMixcbiAgICAgICAgMjE4LFxuICAgICAgICAxNzksXG4gICAgICAgIDM1LFxuICAgICAgICAyOSxcbiAgICAgICAgMjM2LFxuICAgICAgICA1MCxcbiAgICAgICAgMTgsXG4gICAgICAgIDQ1LFxuICAgICAgICAyMjAsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjE3LFxuICAgICAgICAxNDYsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTA5LFxuICAgICAgICAxODcsXG4gICAgICAgIDEyNixcbiAgICAgICAgNTYsXG4gICAgICAgIDEzMyxcbiAgICAgICAgOTYsXG4gICAgICAgIDQ4LFxuICAgICAgICAxNTAsXG4gICAgICAgIDIxOSxcbiAgICAgICAgNDcsXG4gICAgICAgIDRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDIzMixcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJ2QktjR29HcVVKRU0ycEUwbkJRZVl5YS9FelV0Mk1Wd3BXWUZZMGhzRGRZPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJrdVlNaDVZZFFJcThtWW5jSUtUWW13XCIsXG4gIFwicGhvbmVJZFwiOiBcIjFhMTU3NjkyLTllNDEtNGEwNy04OTE3LWMyMzllNDAyOTc3YlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNjAsXG4gICAgICA0NyxcbiAgICAgIDE1OSxcbiAgICAgIDEzMSxcbiAgICAgIDE1LFxuICAgICAgMjI3LFxuICAgICAgMjM5LFxuICAgICAgNTIsXG4gICAgICAxMzIsXG4gICAgICA2NyxcbiAgICAgIDE4NSxcbiAgICAgIDE0NyxcbiAgICAgIDk4LFxuICAgICAgMTg4LFxuICAgICAgMTk1LFxuICAgICAgMTA0LFxuICAgICAgNzgsXG4gICAgICAyMTMsXG4gICAgICAyMjYsXG4gICAgICAxODdcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTAxLFxuICAgICAgMjQ4LFxuICAgICAgMTQ0LFxuICAgICAgMTk2LFxuICAgICAgMTgxLFxuICAgICAgNTQsXG4gICAgICAyMDAsXG4gICAgICAxMDcsXG4gICAgICAyMDUsXG4gICAgICAyMSxcbiAgICAgIDU0LFxuICAgICAgNzcsXG4gICAgICAyMDIsXG4gICAgICAyMDIsXG4gICAgICAxNjgsXG4gICAgICAyNyxcbiAgICAgIDI0MyxcbiAgICAgIDEyMyxcbiAgICAgIDIyMixcbiAgICAgIDE2NlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJQTVhSTkwzUFwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0NzA0MDM0MDQ2NzoxMUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIlNIQUQgIOK4mSAgU0hPUCFcIixcbiAgICBcImxpZFwiOiBcIjE2MTIyNDkwMTc4Nzg2OToxMUBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNMaWEvTm9IRVBQYWdMSUdHQVlnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcImVpeEZKOVNWc3BIdC9kbHhmVXdFd2w2N3FGbVNLdnNhVnFFZ1Y4MGlvQm89XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwia2pkZVFMNEhoTnlkL1VZUVV0eHF1eTU4M2dTdnRiYkVvVmM1d0tDcXZreGNYSFE5Z1VFTTRwOGlqUCtYT3RPYmJNOEFndXVRajFsNWtGMzhwZlVjQnc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwicitONUd6c00ybVl5b3J0anpqZHF6ZG5jTVlkbEdEbFJHcnF1TDY2MUJnSlY4di9ENW04OU0wUWxNMlNhRnBkSVBjK2FvVW5DS1gzMHh5Z1pzbmhoQ3c9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0NzA0MDM0MDQ2NzoxMUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICA0NCxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICA3NixcbiAgICAgICAgICA0LFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICA0MixcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMjZcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcxNTQ4MTk3NVxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS11bmRlZmluZWQuanNvbiI6IHt9Cn0"=  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.4"
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "SHAD BOT",
  ownername:process.env.OWNER_NAME|| "SHAD SHOP",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public" pr,
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
