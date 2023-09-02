var cabeçalho = document.getElementById("cabeçalho");
var navegacao = document.getElementById("navegacao");
var content = document.getElementById("content")
var showSidebar = false;

function sidebarr(){
    showSidebar = !showSidebar;
    if(showSidebar){
        navegacao.style.marginLeft = '-10vw';
        navegacao.style.animationName = 'showSidebar';
        content.style.filter = 'blur(2px)';

    }else{
        navegacao.style.marginLeft = '-100vw'
        navegacao.style.animationName = '';
        content.style.filter = '';
    }
}

function closebarr()
{

    if(showSidebar){
        sidebarr();
    }
        
    
}


//Calculadora//
function insert(num)
{
    var numero = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = numero + num;
}
function clean()
{
    document.getElementById('resultado').innerHTML = "";
}
function back()
{
    var resultado = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length -1);
}
function calcular()
{
    var resultado = document.getElementById('resultado').innerHTML;
    if(resultado)
    {
        document.getElementById('resultado').innerHTML = eval(resultado);
    }
    else
    {
        document.getElementById('resultado').innerHTML = "Nada..."
    }
}

