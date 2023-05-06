//Pintar los datos finacieros
function financialData() {
    //Comprobar si existe el user
    if(localStorage['user']) {
        //Traer los datos
        let user = getData('user');

        //Pintar los datos
        paintData('.name', user.name);
        paintData('.profession', user.profession);
        paintData('.salary', user.incomes.salary);
        paintData('.children', user.expenses.children.number);
    }
}

//Llamar funcion
financialData();