const doc = document

let current_url = window.location.pathname

let posts_path = '/data-delivery'

//tabela onde eu guardo os posts destacados na homepage
let front_page_table = {}

//Essa função server para atualizar automaticamente os posts destacados na homepage
function FrontPageUpdateLoop(){
    
    setTimeout(FrontPageUpdateLoop, 2000)
}

function readTextFile(file, callback) {
    var rawFile = new XMLHttpRequest()
    rawFile.overrideMimeType("application/json")
    rawFile.open("GET", file, true)
    rawFile.onreadystatechange = function() {
        if (rawFile.readyState === 4 && rawFile.status == "200") {
            callback(rawFile.responseText)
        }
    }
    rawFile.send(null)
}

function LoadFrontPagePosts(){

    let destaque1 = document.getElementById('post_1')

    readTextFile("/data-delivery/posts.json", function(text){
        var data = JSON.parse(text)
        front_page_table = data
        console.log(data.front_paged.A1.title)
        destaque1.innerHTML = `<header>${data.front_paged.A1.title}<header><p>${data.front_paged.A1.shortdesc}</p><h5>${data.front_paged.A1.birthday}</h5>`
    })
    FrontPageUpdateLoop()
}

switch (current_url) {
    case '/':
        LoadFrontPagePosts()    
    break

    default:
    
    break
}