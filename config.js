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
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_17_24_05_21_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTIwLFxuICAgICAgICAyMDMsXG4gICAgICAgIDY1LFxuICAgICAgICAyMTQsXG4gICAgICAgIDU3LFxuICAgICAgICA4NCxcbiAgICAgICAgMTA4LFxuICAgICAgICAyMDUsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTY3LFxuICAgICAgICAxMDUsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTQzLFxuICAgICAgICAyNTAsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTkyLFxuICAgICAgICAxMTUsXG4gICAgICAgIDExMCxcbiAgICAgICAgNDQsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjQsXG4gICAgICAgIDM2LFxuICAgICAgICAxMTYsXG4gICAgICAgIDEzOCxcbiAgICAgICAgNzUsXG4gICAgICAgIDg3LFxuICAgICAgICAxMDMsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMyxcbiAgICAgICAgMjEyLFxuICAgICAgICAyNyxcbiAgICAgICAgMTIxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDYzLFxuICAgICAgICA5LFxuICAgICAgICAyNDksXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTc1LFxuICAgICAgICA3LFxuICAgICAgICAyMzksXG4gICAgICAgIDksXG4gICAgICAgIDEyNyxcbiAgICAgICAgODUsXG4gICAgICAgIDIzLFxuICAgICAgICA5LFxuICAgICAgICAxNDEsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTYsXG4gICAgICAgIDEzLFxuICAgICAgICAyMDgsXG4gICAgICAgIDE3OSxcbiAgICAgICAgNDUsXG4gICAgICAgIDMsXG4gICAgICAgIDY2LFxuICAgICAgICAxMzksXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTIxLFxuICAgICAgICAyMDksXG4gICAgICAgIDExMSxcbiAgICAgICAgOCxcbiAgICAgICAgNzUsXG4gICAgICAgIDk1LFxuICAgICAgICAyMjgsXG4gICAgICAgIDE0NyxcbiAgICAgICAgODVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0OCxcbiAgICAgICAgNzAsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTU0LFxuICAgICAgICAyMjEsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTYxLFxuICAgICAgICAxMDgsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjMyLFxuICAgICAgICA0NyxcbiAgICAgICAgNCxcbiAgICAgICAgNDQsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjA5LFxuICAgICAgICAxNjAsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTk3LFxuICAgICAgICAxODksXG4gICAgICAgIDIzLFxuICAgICAgICA2NixcbiAgICAgICAgMTc4LFxuICAgICAgICAxNDgsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTAwLFxuICAgICAgICAxNTIsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjIyLFxuICAgICAgICAyMjUsXG4gICAgICAgIDk4LFxuICAgICAgICA2MixcbiAgICAgICAgODlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQxLFxuICAgICAgICAxODQsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjE5LFxuICAgICAgICAyNDYsXG4gICAgICAgIDk0LFxuICAgICAgICAxLFxuICAgICAgICA3NixcbiAgICAgICAgNDAsXG4gICAgICAgIDczLFxuICAgICAgICAzMyxcbiAgICAgICAgODQsXG4gICAgICAgIDEsXG4gICAgICAgIDYsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTU1LFxuICAgICAgICAxOTQsXG4gICAgICAgIDc4LFxuICAgICAgICAzNSxcbiAgICAgICAgNTksXG4gICAgICAgIDU3LFxuICAgICAgICAxMTYsXG4gICAgICAgIDMyLFxuICAgICAgICAxNTAsXG4gICAgICAgIDE3NSxcbiAgICAgICAgNSxcbiAgICAgICAgMTMzLFxuICAgICAgICAxNTMsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMSxcbiAgICAgICAgMTc0LFxuICAgICAgICA1N1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYsXG4gICAgICAgIDgsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTAzLFxuICAgICAgICA0NixcbiAgICAgICAgNCxcbiAgICAgICAgNDQsXG4gICAgICAgIDE4MyxcbiAgICAgICAgOTIsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTYwLFxuICAgICAgICA5LFxuICAgICAgICAyMzMsXG4gICAgICAgIDIxNyxcbiAgICAgICAgODAsXG4gICAgICAgIDE0NSxcbiAgICAgICAgNjQsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjA3LFxuICAgICAgICAxMTYsXG4gICAgICAgIDMxLFxuICAgICAgICAzMCxcbiAgICAgICAgMTE5LFxuICAgICAgICA5NSxcbiAgICAgICAgMTk5LFxuICAgICAgICAyMzcsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTEyLFxuICAgICAgICAxODksXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTIsXG4gICAgICAgIDc5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTgsXG4gICAgICAgIDAsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMyxcbiAgICAgICAgNzEsXG4gICAgICAgIDIzOCxcbiAgICAgICAgNzgsXG4gICAgICAgIDM5LFxuICAgICAgICA1OSxcbiAgICAgICAgMTU0LFxuICAgICAgICAzNSxcbiAgICAgICAgMTAwLFxuICAgICAgICAyMTIsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjMyLFxuICAgICAgICA0NyxcbiAgICAgICAgODgsXG4gICAgICAgIDE1LFxuICAgICAgICAxMzgsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjQsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTk0LFxuICAgICAgICAxNjksXG4gICAgICAgIDAsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTI0LFxuICAgICAgICAxOTAsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTI3LFxuICAgICAgICA4OVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDExM1xuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDE0XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI2LFxuICAgICAgICAzMixcbiAgICAgICAgNzgsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTE4LFxuICAgICAgICA5NSxcbiAgICAgICAgMzAsXG4gICAgICAgIDIzNixcbiAgICAgICAgMjQ5LFxuICAgICAgICAyMjgsXG4gICAgICAgIDI1LFxuICAgICAgICAxOTcsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTA0LFxuICAgICAgICAxNDMsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTczLFxuICAgICAgICA0MyxcbiAgICAgICAgMjMzLFxuICAgICAgICA5OCxcbiAgICAgICAgMjA1LFxuICAgICAgICAxOTEsXG4gICAgICAgIDUzLFxuICAgICAgICAyNDQsXG4gICAgICAgIDQ1LFxuICAgICAgICAzNSxcbiAgICAgICAgMTQ5LFxuICAgICAgICAzMixcbiAgICAgICAgMTgwLFxuICAgICAgICAxMjMsXG4gICAgICAgIDE5LFxuICAgICAgICAyMTMsXG4gICAgICAgIDE3NixcbiAgICAgICAgNDIsXG4gICAgICAgIDcsXG4gICAgICAgIDM2LFxuICAgICAgICAyMjUsXG4gICAgICAgIDQ0LFxuICAgICAgICAyMjIsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjU1LFxuICAgICAgICAxODQsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTIsXG4gICAgICAgIDU5LFxuICAgICAgICA4OCxcbiAgICAgICAgMjU1LFxuICAgICAgICA1NCxcbiAgICAgICAgMTUsXG4gICAgICAgIDE4LFxuICAgICAgICA2LFxuICAgICAgICAxNSxcbiAgICAgICAgNjksXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjQ3LFxuICAgICAgICAyMjQsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjI0LFxuICAgICAgICAxODEsXG4gICAgICAgIDExNSxcbiAgICAgICAgMjMsXG4gICAgICAgIDIwLFxuICAgICAgICAyNDgsXG4gICAgICAgIDE0M1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjQzLFxuICBcImFkdlNlY3JldEtleVwiOiBcIkl1RlBha2tocXZWMXlieFdiTHpKVUdOQ2hFVWwrQnVjc1Jycy9mZVJRekU9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjM0NzA0MDM0MDQ2N0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiQTc5NTJEMUVGMzdGNUVDNjk3NkJFMENGMDQxNTExOTJcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzE2MzEyMjU2XG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMixcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMixcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcImFUQ0NGWlZJUzdPQUtfSmhVajNlbHdcIixcbiAgXCJwaG9uZUlkXCI6IFwiOTllMzRlOTMtMTc3MC00M2M2LWI1NjYtMzJiOTk2Y2ZlNGYwXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIzNyxcbiAgICAgIDE2NCxcbiAgICAgIDE1LFxuICAgICAgMTQyLFxuICAgICAgMjE4LFxuICAgICAgMTQ2LFxuICAgICAgMTc4LFxuICAgICAgNzcsXG4gICAgICAyMjMsXG4gICAgICAxMTcsXG4gICAgICAxNTEsXG4gICAgICA1OSxcbiAgICAgIDUsXG4gICAgICA4OCxcbiAgICAgIDIzMSxcbiAgICAgIDg5LFxuICAgICAgNzEsXG4gICAgICAyNTEsXG4gICAgICAxNjEsXG4gICAgICAxODNcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjAxLFxuICAgICAgMTYsXG4gICAgICA5OCxcbiAgICAgIDIyMCxcbiAgICAgIDE0NyxcbiAgICAgIDExOCxcbiAgICAgIDExMixcbiAgICAgIDIzNSxcbiAgICAgIDExNSxcbiAgICAgIDE2MixcbiAgICAgIDI0NixcbiAgICAgIDYxLFxuICAgICAgNDksXG4gICAgICAyMTIsXG4gICAgICAxMzUsXG4gICAgICAxNCxcbiAgICAgIDY1LFxuICAgICAgODgsXG4gICAgICAyMTYsXG4gICAgICAxMjBcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiUlhLWDRaSzZcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDcwNDAzNDA0Njc6MTRAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJTSEFEICDiuJkgIFNIT1AhXCIsXG4gICAgXCJsaWRcIjogXCIxNjEyMjQ5MDE3ODc4Njk6MTRAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTGlhL05vSEVLU3hzN0lHR0FrZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJlaXhGSjlTVnNwSHQvZGx4ZlV3RXdsNjdxRm1TS3ZzYVZxRWdWODBpb0JvPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcInpQeGlqT2tDYndPTE91ZjB4UU1aVWlxNFhBeFFET3FjWWxlSGp4S0R1MlZXS01wdWJjbFBjWnltSzljemRKMkZ1WGt0d3EwTzNQbG5tZ3R5TkNiUURBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIldGNXExdE1FNHVaSlI4Z2lNM3EwVlNKdjB4cUhTRDV5MkNvOWhwbWpFa0JwaUcwMlRHYXNaS2tGM3REZHFJbUlING1QZjFPVHRQT0trQnl6OE8xcWpBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDcwNDAzNDA0Njc6MTRAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAzMixcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDI2XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MTYzMTIyMzIsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFJTkxcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUlOTC5qc29uIjoge30KfQ"=  // PUT your SESSION_ID 


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
