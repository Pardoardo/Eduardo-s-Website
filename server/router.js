//Esse script serve para redirecionar o usuário para todas as rotas possíveis dentro do website
function Router(app) {
    app.get('/', (request, response) => {
        response.send('Hello World')
    })
    app.get('/sobre', (request, response) => {
        response.send('sobre mim')
    })
    app.get('/posts', (request, response) => {
        response.send('Posts')
    })
}


module.exports = {
    Router
}