if(localStorage['user']) {
    //Traer los datos
    let user = getData('user');

    //Variables
    let salary = parseInt(user.incomes.salary);
    let passivesIncomes = additionArrayObject(user.incomes.properties, 'income');
    let incomes = salary + passivesIncomes;
    let expenses = additionArray(user.expenses.default) + (parseInt(user.expenses.children.cost) * parseInt(user.expenses.children.number) + additionArray(user.expenses.loans));
    let cashflow = incomes - expenses;

    //Pintar datos de la billetera
    $('.wallet-cash').text(user.cash);

    //Pintar los datos del flujo de caja
    paintData('.salary', salary);
    paintData('.passives-incomes', passivesIncomes);
    paintData('.incomes', incomes);
    paintData('.expenses', expenses);
    paintData('.flow', cashflow);
}

