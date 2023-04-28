if(localStorage['user']) {
    let user = JSON.parse(localStorage['user']);

    let loans = 0;
    if(user.gastos.prestamos) {
        
        for (let key in user.gastos.prestamos) {
            if(key != 0) loans += parseInt(user.gastos.prestamos[key]);
        }
    }

    let expenses = 0;
    for (let key in user.gastos) {
        
        expenses += parseInt(user.gastos[key]);
    }

    expenses += loans;

    let salary = parseInt(user.salario);
    let incomes = 0;
    let totalIncomes;

    $('.salary').text(user.salario);

    if(user.ingresos) {
        incomes = 0;
        for (let key in user.ingresos) {
            incomes += parseInt(user.ingresos[key].pasivo);
        }
        totalIncomes = incomes + salary;

        $('.passives-incomes').text(incomes);
        $('.incomes').text(totalIncomes);
    }else {
        totalIncomes = salary;
        $('.passives-incomes').text('0');
        $('.incomes').text(salary);
    }
    $('.expenses').text(expenses);
    
    cashflow = totalIncomes - expenses;
    $('.flow').text(cashflow);
}

numberSpace();