let version = 'Alpha 1.1.1';
$('.version-code').text(version);

function invertirCadena(cad) {
    // Paso 1. Usa el método split() para devolver un nuevo arreglo
    var separarCadena = cad.split(""); // var separarCadena = "hola".split("");
    // ["h", "o", "l", "a"]
 
    // Paso 2. Usa el método reverse() para invertir el nuevo arreglo creado
    var invertirArreglo = separarCadena.reverse(); // var invertirArreglo = ["h", "o", "l", "a"].reverse();
    // ["a", "l", "o", "h"]
 
    // Paso 3. Usa el método join() para unir todos los elementos del arreglo en una cadena
    var unirArreglo = invertirArreglo.join(""); // var unirArreglo = ["a", "l", "o", "h"].join("");
    // "aloh"
    
    //Paso 4. Devolver la cadena invertida
    return unirArreglo; // "aloh"
}

function numberSpace() {
    $('span').each(function(i) {
        let numeros = invertirCadena($(this).text());
        numeros = numeros.toString();
        let espacio = ' ';
        let nuevoNumero = '';
    
        for (let j = (numeros.length - 1); j >= 0; j--) {
            const numero = numeros[j];
            if((j + 1) % 3 == 0) {
                nuevoNumero += (espacio + numero);
            }else {
                nuevoNumero += numero;
            }
        }
        $(this).text(nuevoNumero);
    });
}