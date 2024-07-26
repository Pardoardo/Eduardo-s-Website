//Esse script serve para redirecionar o usuário para todas as rotas possíveis dentro do website

function Router(app) {
    app.get('/', (request, response) => {
        response.sendFile(__dirname + '/pages/index.html');
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