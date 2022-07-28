
function insert (num) {

    document.querySelector('.resultado').innerHTML += num;
    document.querySelector

}

function clean() {
    
    document.querySelector('.resultado').innerHTML = '';
}

function apagar (){

    let apagar = document.querySelector('.resultado').innerHTML;
    document.querySelector('.resultado').innerHTML = apagar.substring(0, apagar.length -1)
}

function calcular() {

    let resultado = document.querySelector('.resultado'). innerHTML;

    if(resultado){
        document.querySelector('.resultado').innerHTML = eval(resultado);
    }
}