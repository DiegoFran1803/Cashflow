if (localStorage['user']) {
    //Traer los datos
    let user = getData('user');

    //Variables
    let salary = user.incomes.salary;
    let incomes = parseInt(user.incomes.salary) + additionArrayObject(user.incomes.properties, 'income');
    let childrenSpending = parseInt(user.expenses.children.cost) * parseInt(user.expenses.children.number); 
    let expenses = additionArray(user.expenses.default) + childrenSpending + additionArray(user.expenses.loans);

    //Pintar ingresos
    paintData('.salary', salary);
    
    if (user.incomes.properties.length != 0) paintIncomes(user.incomes.properties);
    else unpaintData('.table-incomes');
    paintData('.total-incomes', incomes);

    //Pintar gastos
    paintData('.taxex', user.expenses.default[0]);
    paintData('.mortgage', user.expenses.default[1]);
    paintData('.school', user.expenses.default[2]);
    paintData('.car', user.expenses.default[3]);
    paintData('.credit-card', user.expenses.default[4]);
    paintData('.minors', user.expenses.default[5]);
    paintData('.other', user.expenses.default[6]);

    //Pintat gasto por hijos
    if (childrenSpending != 0) paintChildrenSpending(childrenSpending);

    //Pintar pago de prestamos
    if (user.expenses.loans.length != 0) paintExpenses(user.expenses.loans)
    else unpaintData('.table-expenses');
    paintData('.total-expenses', expenses);
}

