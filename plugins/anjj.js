let handler = async (m, { conn }) => {
let caption = `*Mntap Toxic🗿*`

conn.sendButton( m.chat, caption, `©️ MoonBot`, `anjay amlok`, `.trigger`, m)

       }
       
handler.customPrefix = /^(peler|njig|anj|babi|bab1|ngentod|sial|anjir|anjirt|kontol|goblok|pantek|jahanam|ngentod|ngewe|bodoh|memek|ewe|ewek|pepek|asu|asuk|asw)/i
handler.command = new RegExp
module.exports = handler
