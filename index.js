const express = require("express")
const app = express()
const porta = 8080 //Porta em que o servidor vai iniciar

app.get('/', (request, response) => {
    response.send('Hello World!')
})

app.listen(porta, () => {
    console.log(`Servidor inciado na porta ${porta}`)
})