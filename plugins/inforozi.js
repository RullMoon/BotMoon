let handler  = async (m, { conn, usedPrefix }) => { 
conn.reply(m.chat, `
╭═══════════════════════
║╭──❉ 〔 INFO OWNER 〕 ❉────── 
║│➸ ```NAMA``` : Rull
║│➸ ```UMUR``` : Gatau
║│➸ ```ASAL``` : Isekai
║│➸ ```OFFICIAL GRUP``` :
https://chat.whatsapp.com/GcNqdNAWqLE17kmenErzfe
║│➸ ```ISTAGRAM``` : -
║│➸ ```WHATSAPP``` : http://wa.me/6285746030186
╰────────❉
`.trim(), m)
}

handler.help = ['inforull']
handler.tags = ['main', 'utama']
handler.command = /^(inforull)$/i

handler.exp = 150

module.exports = handler
