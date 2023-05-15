if(localStorage['user']) {
    //Traer los datos
    let user = getData('user');

    //Variables
    let incomes = additionArrayObject(user.incomes.properties, 'income');
    let expenses = additionArray(user.expenses.default) + (parseInt(user.expenses.children.cost) * parseInt(user.expenses.children.number)) + additionArray(user.expenses.loans);
    
    let missing = (expenses - incomes);
    if(missing < 0) missing = 0;

    //Pintar datos de perfil
    paintData('.name', user.name);
    paintData('.ocupation', user.profession);
    paintData('.missing', missing);
    paintData('.ratio', ratio);
}