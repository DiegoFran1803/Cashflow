//Boton ingreso
$('.btn-income').click(function() {
    //Traer los datos
    let user = getData('user');
    let cash = parseInt(user.cash)

    //Variables
    let newCash = $('.card--input');

    //Validacion
    let newCashValidation = inputValidation(newCash);
    newCash.css('outline', 'none');
    if(newCashValidation) {
        //Dinero total
        cash += parseInt(newCash.val());

        //Subir datos
        user.cash = cash;
        setData('user', user);

        //Efectos de sonido
        cargarSonido('./audio/register.mp3');

        //Pintar datos
        paintData('.wallet-cash', cash);
        paintDataInput('.card--input', '');
    }
});

//Boton Gasto
$('.btn-expense').click(function() {
    //Traer los datos
    let user = getData('user');
    let cash = parseInt(user.cash)

    //Variables
    let newCash = $('.card--input');

    //Validacion
    let newCashValidation = inputValidation(newCash);
    newCash.css('outline', 'none');
    if(newCashValidation) {
        //Dinero total
        cash -= parseInt(newCash.val());

        //Quitar dinero
        if(cash < 0) cash = 0;

        //Subir datos
        user.cash = cash;
        setData('user', user);

        //Efectos de sonido
        cargarSonido('./audio/fail.mp3');

        //Pintar datos
        paintData('.wallet-cash', cash);
        paintDataInput('.card--input', '');
    }
});

//Boton vaciar
$('.btn-trash').click(function() {
    //Traer los datos
    let user = getData('user');

    //Vaciar billetera
    user.cash = 0;

    //Subir los datos
    setData('user', user);

    //Efectos de sonido
    cargarSonido('./audio/trash.mp3');

    //Pintar datos y e
    paintData('.wallet-cash', 0);
});

//Boton de flujo mensual
$('.btn-cashflow').click(function() {
    //Traer los datos
    let user = getData('user');
    let cash = parseInt(user.cash);
    let incomes = parseInt(user.incomes.salary) + additionArrayObject(user.incomes.properties, 'income');
    let expenses = additionArray(user.expenses.default) + ((parseInt(user.expenses.children.cost) * parseInt(user.expenses.children.number)) + additionArray(user.expenses.loans));

    //Calcular flujo de caja
    let cashflow = incomes - expenses;

    //Agregar el flujo de caja
    cash += cashflow;
    user.cash = cash;

    //Subir los datos
    setData('user', user);

    //Efectos de sonido
    cargarSonido('./audio/register.mp3');

    //Pintar datos
    paintData('.wallet-cash', cash);
});