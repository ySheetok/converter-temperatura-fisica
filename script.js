var c = "celsius"
var f = "fahrenheit"
var k = "kelvin"

function converter(){
    var selectvlr = document.querySelector("#grau-vlr");
    var tipovlr = selectvlr.value;
    
    var selectconv = document.querySelector("#grau-cont");
    var tipoconv = selectconv.value;
    
    var valor = document.querySelector("#valor").value;
    
    /*Grau celsius */
    
    if(tipovlr == c) {
        if(tipoconv == k){
            var resultado = parseInt(valor) + 273.15
            document.querySelector(".resultado").innerHTML = (valor + "°C é igual a " + (resultado.toFixed(2)) + "K");
        }
        if(tipoconv == f){
            var resultado = parseInt(valor * 9/5) + 32
            document.querySelector(".resultado").innerHTML = (valor + "°C é igual a " + (resultado.toFixed(2)) + "°F");
        }
        if(tipoconv == c){
            document.querySelector(".resultado").innerHTML = (valor + "°C é igual a " + valor + "°C");
        }
    }
    
    /*Grau fahrenheit */
    
    if(tipovlr == f) {
        if(tipoconv == c){
            var resultado = parseInt(valor - 32) * 5/9 
            document.querySelector(".resultado").innerHTML = (valor + "°F é igual a " + (resultado.toFixed(2)) + "°C");
        }
        if(tipoconv == k){
            var resultado = parseInt(valor - 32) * 5/9 + 273.15
            document.querySelector(".resultado").innerHTML = (valor + "°F é igual a " + (resultado.toFixed(2)) + "K");
        }
        if(tipoconv == f){
            document.querySelector(".resultado").innerHTML = (valor + "°F é igual a " + valor + "°F");
        }
    }
    
    /*Grau que não é grau, é apenas kelvin kk lol */
    
    if(tipovlr == k) {
        if(tipoconv == c){
            var resultado = parseInt(valor) -273.15
            document.querySelector(".resultado").innerHTML = (valor + "K é igual a " + (resultado.toFixed(2)) + "°C");
        }
        if(tipoconv == f){
            var resultado = parseInt(valor - 273.15) * 9/5 + 32
            document.querySelector(".resultado").innerHTML = (valor + "K é igual a " + (resultado.toFixed(2)) + "°F");
        }
        if(tipoconv == k){
            document.querySelector(".resultado").innerHTML = (valor + "K é igual a " + valor + "K");
        }
    }
}
