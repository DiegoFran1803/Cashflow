//Subir los datos
function setData(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
}

//Traer los datos
 function getData(key) {
    return JSON.parse(localStorage.getItem(key));
}