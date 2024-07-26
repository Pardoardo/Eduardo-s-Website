const express = require("express")
const app = express()
const porta = 8080 //Porta em que o servidor vai iniciar

const path = require('path')
app.use('/assets', express.static(path.join(__dirname, 'public')))

const router = require("./server/router.js")
router.Router(app)

app.listen(porta, () => {
    console.log(`Servidor inciado na porta ${porta}`)
})