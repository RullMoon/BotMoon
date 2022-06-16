let fetch = require('node-fetch')
let { MessageType } = require('@adiwajshing/baileys')
let handler = async(m, { conn }) => {
    let kontol = `
*_📮:Join MoonBot GC_*`.trim()
  const button = {
        buttonText: 'pilih group',
        description: Moon,
        sections:  [{title: "groub pilihan", rows: [
        {title: '⋮☰group MoonBot¹', description: "📣join kuy", rowId:".jarot1"},
       ] }],
        listType: 1
       }
    conn.sendMessage(m.chat, button, MessageType.listMessage, { quoted: m })
}

handler.tags = ['main', 'update']
handler.command = /^(gcbot)$/i
handler.help = ['groupbot']
module.exports = handler
