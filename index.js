let maintenanceMode = false //Modo de manutenção do website que bloqueia todas os páginas e exibe um slide informativo.

const express = require("express")
const app = express()
const porta = 8080 //Porta em que o servidor vai iniciar

app.set('view engine', 'ejs') //setando a engine de vizualização do express para trabalhar com o nosso famijerado "EJS"

const path = require('path')
app.use('/assets', express.static(path.join(__dirname, 'public')))

app.use('/data-delivery', express.static(path.join(__dirname, 'server/data')))

switch (maintenanceMode) {
    case false:
        const router = require("./server/router.js")
        router.Router(app)
    break

    case true:
        app.get('/', (request, response) => {
            response.status(200)
            response.render('../server/pages/manutencao')
        })
    break
}

app.listen(porta, () => {
    console.log(`Servidor inciado na porta ${porta}`)
})