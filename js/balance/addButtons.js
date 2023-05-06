//Agregar acciones
$('.btn-buy-shares').click(function() {
    //Traer los datos
    let user = getData('user');
    let cash = parseInt(user.cash);

    //Variables
    let description = $('#description');
    let quantity = $('#quantity');
    let cost = $('#cost');
    
    //Validacion
    let descriptioVal = inputValidation(description);
    let quantityVal = inputValidation(quantity);
    let costVal = inputValidation(cost);
    if (descriptioVal && quantityVal && costVal) {
        //Calcular el pago total
        let pay = (parseInt(quantity.val()) * parseInt(cost.val()));

        if(cash >= pay) {
            //Realizar el pago
            cash -= pay;

            //Crear la accion
            let share = {
                "description": description.val(),
                "number": quantity.val(),
                "cost": cost.val(),
            }

            //Agregar los datos
            user.cash = cash;
            user.assets.shares.push(share);

            //Subir los datos
            setData('user', user);

            //Efectos de sonido
            cargarSonido('./audio/register.mp3');

            //Volver a pintar datos
            balanceSheet();

            //Modal
            closeModal();
            openModalSuccess(2, 'Completado', '¡Bien! La compra se realizo con exito');
        } else {
            //Efectos de sonido
            cargarSonido('./audio/fail.mp3');

            //Modal
            closeModal();
            openModalSuccess(0, 'Error', '¡Uy! Parece que con cuentas con suficiente saldo para realizar esta accion');
        }
    }
});

$('.btn-buy-property').click(function() {
    //Traer los datos
    let user = getData('user');
    let cash = parseInt(user.cash);

    //Variables
    let description = $('#description');
    let initialPayment = $('#initial-payment');
    let mortgage = $('#mortgage');
    let passivesIncomes = $('#passives-incomes');

    //Validacion
    let descriptionVal = inputValidation(description);
    let initialPaymentVal = inputValidation(initialPayment);
    let mortgageVal = inputValidation(mortgage);
    let passivesIncomesVal = inputValidation(passivesIncomes);
    if (descriptionVal && initialPaymentVal && mortgageVal && passivesIncomesVal) {
        //Calcular el pago total
        let pay = parseInt(initialPayment.val());

        if(cash >= pay) {
            //Realizar el pago
            cash -= pay;

            //Crear la propiedad en los activos
            let propertyToAssets = {
                "description": description.val(),
                "entrance": initialPayment.val()
            }

            //Crear la propiedad en los ingresos
            let propertyToIncomes = {
                "description": description.val(),
                "income": passivesIncomes.val()
            }

            //Crear la propiedad en los pasivos
            let propertyToPassives = {
                "description": description.val(),
                "mortgage": mortgage.val()
            }

            //Agregar los datos
            user.cash = cash;
            user.assets.properties.push(propertyToAssets);
            user.incomes.properties.push(propertyToIncomes);
            user.passives.properties.push(propertyToPassives);

            //Subir los datos
            setData('user', user);

            //Efectos de sonido
            cargarSonido('./audio/register.mp3');

            //Volver a pintar datos
            balanceSheet();

            //Modal
            closeModal();
            openModalSuccess(2, 'Completado', '¡Bien! La compra se realizo con exito');
        }else {
            //Subir los datos
            cargarSonido('./audio/fail.mp3');

            //Modal
            closeModal();
            openModalSuccess(0, 'Error', '¡Uy! Parece que con cuentas con suficiente saldo para realizar esta accion');
        }
    }
});

$('.btn-loan').click(function() {
    //Traer los datos
    let user = getData('user');
    let cash = parseInt(user.cash);

    //Variables
    let amount = $('#amount');

    //Validacion
    let amountVal = inputValidation(amount);
    if(amountVal) {
        //Calcular el capital
        let capital = parseInt(amount.val());

        if((capital % 1000) == 0) {
            //Pagar el capital
            cash += capital;

            //Agregar los datos
            user.passives.loans.push(capital);
            user.expenses.loans.push(capital * 0.1);
            user.cash = cash;

            //Subir lso datos
            setData('user', user);

            //Efectos de sonido
            cargarSonido('./audio/register.mp3');

            //Volver a pintar datos
            balanceSheet();

            //Modal
            closeModal();
            openModalSuccess(2, 'Completado', 'Prestamo realizado');
        } else {
            //Efectos de sonido
            cargarSonido('./audio/fail.mp3');

             //Modal
            closeModal();
            openModalSuccess(0, 'Error', 'Solo puede hacer prestamos en unidades de $1000');
        }
    }
});