//Info: Caso eu queira avisar todos os usuários do website sobre uma manutenção, eu ativo esse script.


let target = document.getElementById('top-bar-alert')
let test = document.querySelector('div')

//Verificando se o alerta de topo existe no documento html:
if(target){
    target.hidden = true
    target.innerHTML = 'Carregando...'
} else {
    console.error('Erro! Não foi possível encontrar "top-bar-alert" neste documento html.')
}