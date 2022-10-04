let txt_lado = document.getElementById("txt_lado");
let resultado_perimetro = document.getElementById("resultado_perimetro");
let resultado_area = document.getElementById("resultado_area");


function verificar(e) {
    tecla = (document.activeElement) ? e.keyCode : e.which

    //Tecla de retroceso para borrar, siempre la permite
    if (tecla == 8) {
        return true
    }

    // Patrón de entrada
    patron = /[0-9]/
    tecla_final = String.fromCharCode(tecla)
    return patron.test(tecla_final)
}

function multiplicacion(){

    var resultado_multiplicacion = (txt_lado.value * 4)  
    resultado_perimetro.innerHTML = "El perimetro total es: "+ resultado_multiplicacion
    var resultado_area_multiplicacion = (txt_lado.value * txt_lado.value)  
    resultado_area.innerHTML = "El area total es: "+ resultado_area_multiplicacion
}
