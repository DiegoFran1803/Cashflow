if(localStorage['user']) {
    //Traer los datos
    let user = getData('user');

    //Variables
    let incomes = additionArrayObject(user.incomes.properties, 'income');
    let expenses = additionArray(user.expenses.default) + (parseInt(user.expenses.children.cost) * parseInt(user.expenses.children.number)) + additionArray(user.expenses.loans);

    //Pintar datos de perfil
    paintData('.name', user.nombre);
    paintData('.ocupation', user.profesion);
    paintData('.missing', (expenses - incomes));
    paintData('.ratio', (Math.trunc((incomes/expenses) * 100)));
}