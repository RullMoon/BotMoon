let axios = require("axios")

let handler = async(m, { conn, usedPrefix, command }) => {

 axios.get(`https://leyscoders-api.herokuapp.com/api/katailham?apikey=MIMINGANZ`).then((res) => {
   let hasil = `${res.data.result}`

    conn.sendButton(m.chat, hasil, '©moonbotz', 'Kata moonbotz', `${usedPrefix + command}`, m)
	})
}
handler.help = ['kata'].map(v => v + 'moonbotz')
handler.tags = ['quotes']
handler.command = /^(katamoonbotz)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 0
handler.limit = false

module.exports = handler
