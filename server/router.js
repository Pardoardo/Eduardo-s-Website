//Esse script serve para redirecionar o usuário para todas as rotas possíveis dentro do website

function Router(app) {
    app.set('trust proxy', false)
    app.get('/', (request, response) => {
        switch (request.url) {
            case '/':
                //homepage
                response.status(200)
                response.sendFile(__dirname + '/pages/index.html')
            break

            case '/sobre': 
                response.status(200)
                response.send('sobre mim')
            break

            case '/posts': 
                response.status(200)
                response.send('posts')
            break

            case '/projetos': 
                response.status(200)
                response.send('projetos')
            break

            case '/posts': 
                response.status(200)
                response.send('posts')
            break
        
            default:
                //página 404
                response.status(404)
                response.send('404')
            break
        }
    })
}

module.exports = {
    Router
}