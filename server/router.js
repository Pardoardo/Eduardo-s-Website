//Esse script serve para redirecionar o usuário para todas as rotas possíveis dentro do website

const fs = require('fs')
const { get } = require('http')
const path = require('path')

function getJSONPost(postID, callBack) {
    const filePath = path.join(__dirname, './data/posts', `${postID}.json`)
    console.log(filePath)

    fs.readFile(filePath, 'utf-8', (err, dat) => {
        if (err) {
            console.error("[PostDog.js]: Ocorreu um erro ao tentar buscar um post específico! " + err)
            callBack(err, null)
        } else {
            callBack(null, dat)
        }
    })
}

function Router(app) {
    app.set('trust proxy', false)
    app.get('/', (request, response) => {

        //Inicio do "PostDog"
        const url = new URL(request.url, `http://${request.headers.host}`)
        const postParam = url.searchParams.get('post')

        if (postParam) {

            getJSONPost(postParam, (err, data) => {
                if (err) {
                    response.statusCode = 404
                    console.warn(`[PostDog]: Não foi possível encontrar ${postParam} em ${path}`)
                    response.end("Ops!! Parece que esse post foi pro vinagre... :(")
                } else {
                    response.setHeader('Content-Type', 'application/json')
                    response.end(data)
                }
            })
            //Fim do "PostDog" e inicio do Router
        } else {
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

                /*
                default:
                    //página 404
                    response.status(404)
                    response.send('404')
                break
                */
            }
        }
    })
}

module.exports = {
    Router
}