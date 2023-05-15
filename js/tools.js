//Version del sistema
let version = 'Beta 1.1.1';
$('.version-code').text(version);

//Pintar input de rojo
function invalidInput(e) {
    e.css('outline', 'solid 2px var(--danger)');
}

//Pintar input de verde
function validInput(e) {
    e.css('outline', 'solid 2px var(--success)');
}

//Validacion de inputs
function inputValidation(e) {
    //Comprobar si el input esta vacio
    if(e.val() != '' && e.val() != ' '){
        //Pintar input de verde
        validInput(e);

        return true;
    }else {
        //Pintar input de rojo
        invalidInput(e);

        return false;
    }
}

//Validacion de selects
function selectValidation(e) {
    //Comprobar si el select esta vacio
    if(e.val() != "-1"){
        //Pintar select de verde
        validInput(e);

        return true;
    }else {
        //Pintar select de verde
        invalidInput(e);
        
        return false;
    }
}

//Sumar arreglo
function additionArray(array) {
    //Variables
    let result = 0;

    //Comprobar si el array tiene elementos
    if(array.length > 0) {
        //Iteraciones
        for (let i = 0; i < array.length; i++) {
            //Elementos
            const element = array[i];
    
            //Suma
            result += parseInt(element); 
        }
    }

    return result;
}

//Sumar arreglo de objetos
function additionArrayObject(array, index) {
    //Variables
    let result = 0;

    //Comprobar si el array tiene elementos
    if(array.length > 0) {
        //Iteraciones
        for (let i = 0; i < array.length; i++) {
            //Elementos
            const element = array[i][index];

            //Suma
            result += parseInt(element); 
        }
    }

    return result;
}

//Cargar archivos de audio
function cargarSonido(fuente) {
    let etiquetaAudio = document.createElement("audio");
    etiquetaAudio.setAttribute("src", fuente);
    etiquetaAudio.play();
};