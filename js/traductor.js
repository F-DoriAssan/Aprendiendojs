let resultado = document.getElementById("resultado")
function validar(e) {
    tecla = (document.activeElement) ? e.keyCode : e.which

    //Tecla de retroceso para borrar, siempre la permite
    if (tecla == 8) {
        return true
    }

    // Patrón de entrada, en este caso solo acepta numeros y letras
    patron = /[A-Za-z-]/
    tecla_final = String.fromCharCode(tecla)
    return patron.test(tecla_final)
}

function guardarVariable(){
    var valor = document.getElementById("id_txt_palabra").value
    switch(valor) {
        case 'casa':
        case 'Casa':
            resultado.innerHTML = "Casa en ingles es: House" 
         
        break
        case 'mesa':
        case 'Mesa':
            resultado.innerHTML = "Mesa en ingles es: Table" 
          break;
        case 'perro':
        case 'Perro':
            resultado.innerHTML = "Perro en ingles es: Dog" 
          break;
        case 'gato':
        case 'Gato':
            resultado.innerHTML = "Gato en ingles es: Cat" 
          break;
        case 'cas':
        case 'gat':
        case 'pero':
        case 'perr':
        case 'me':
        case 'mes':
            resultado.innerHTML = "Escriba bien la palabra, " + valor + " no existe." 
          break;
        default:
            resultado.innerHTML ="Lo lamentamos, no puede traducir la palabra " + valor + "."
            
    } 
}




