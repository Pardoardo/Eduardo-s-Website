const express = require("express")
const app = express()
const porta = 8080 //Porta em que o servidor vai iniciar

app.set('view engine', 'ejs') //setando a engine de vizualização do express para trabalhar com o nosso famijerado "EJS"

const path = require('path')
app.use('/assets', express.static(path.join(__dirname, 'public')))

app.use('/data-delivery', express.static(path.join(__dirname, 'server/data')))

const router = require("./server/router.js")
router.Router(app)

app.listen(porta, () => {
    console.log(`Servidor inciado na porta ${porta}`)
})