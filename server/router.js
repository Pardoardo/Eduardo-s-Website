//Esse script serve para redirecionar o usuário para rota possível do website
function Router(app) {
    app.get('/', (request, response) => {
        response.send('Hello Worl')
    })
}


module.exports = {
    Router
}