//Vender acciones
$('.btn-sell-shares').click(function () {
    //Variables
    let costSell = $('#cost-sell');

    //Validacion
    let costSellVal = inputValidation(costSell);
    if (costSellVal) {
        //Traer los datos
        let user = getData('user');
        let cash = parseInt(user.cash);

        //Calcular la ganacia
        let revenue = parseInt(user.assets.shares[iShares].number) * parseInt(costSell.val());
        
        //Realizar el pago
        cash += revenue;
        user.cash = cash;

        //Eliminar la accion
        user.assets.shares.splice(iShares, 1);

        //Subir los datos
        setData('user', user);

        //Efectos de sonido
        cargarSonido('./audio/register.mp3');

        //Volver a pintar los datos
        balanceSheet();

        //Modal
        closeModal();
        openModalSuccess(2, 'Completado', '¡Felicidades! Vendiste tus acciones');
    }
});

//Aditar acciones
$('.btn-edit-shares').click(function () {
    //Variables
    let description = $('#description-shares');
    let number = $('#quantity-shares');

    //Validacion
    let descriptionVal = inputValidation(description);
    let numberVal = inputValidation(number);
    if (descriptionVal && numberVal) {
        //Traer los datos
        let user = getData('user');

        //Reemplazar los datos
        user.assets.shares[iShares].description = description.val();
        user.assets.shares[iShares].number = number.val();

        //Subir los datos
        setData('user', user);

        //Efectos de sonido
        cargarSonido('./audio/pencil.mp3');

        //Volver a pintar los datos
        balanceSheet();

        //Modal
        closeModal();
        openModalSuccess(2, 'Completado', 'Se edito la descripcion y la cantidad de acciones');
    } else if (descriptionVal) {
        //Traer los datos
        let user = getData('user');

        //Reemplazar los datos
        user.assets.shares[iShares].description = description.val();

        //Subir los datos
        setData('user', user);

        //Efectos de sonido
        cargarSonido('./audio/pencil.mp3');

        //Volver a pintar los datos
        balanceSheet();

        //Modal
        closeModal();
        openModalSuccess(2, 'Completado', 'Se edito la descripcion');
    } else if (numberVal) {
        //Traer los datos
        let user = getData('user');

        //Reemplazar los datos
        user.assets.shares[iShares].number = number.val();

        //Subir los datos
        setData('user', user);

        //Efectos de sonido
        cargarSonido('./audio/pencil.mp3');

        //Volver a pintar los datos
        balanceSheet();

        //Modal
        closeModal();
        openModalSuccess(2, 'Completado', 'Se edito la cantidad de acciones');
    }
});

//Vender propiedades
$('.btn-sell-propety').click(function () {
    //Variables
    let sellPrice = $('#sell-price');

    //Validacion
    let sellPriceVal = inputValidation(sellPrice);
    if (sellPriceVal) {
        //Traer los datos
        let user = getData('user');
        let cash = parseInt(user.cash);

        //Calcular la ganancia
        let revenue = parseInt(sellPrice.val()) - parseInt(user.passives.properties[iProperty].mortgage);

        //Comprobar si hay ganancia
        if (revenue >= 0) {
            //Realizar el pago
            cash += revenue;
            user.cash = cash;

            //Eliminar la propiedad
            user.assets.properties.splice(iProperty, 1);
            user.incomes.properties.splice(iProperty, 1);
            user.passives.properties.splice(iProperty, 1);

            //Subir los datos
            setData('user', user);

            //Efectos de sonido
            cargarSonido('./audio/register.mp3');

            //Volver a pintar los datos
            balanceSheet();

            //Modal
            closeModal();
            openModalSuccess(2, 'Completado', '¡Felicidades! Vendiste tus acciones');
        } else {
            //Efectos de sonido
            cargarSonido('./audio/warning.mp3');

            //Modal
            closeModal();
            openModalSuccess(1, 'Advertencia', 'Vender esta propiedad a este precio hara pierdas dinero');
        }
    }
});

$('.btn-edit-propety').click(function () {
    //Variables
    let description = $('#description-propety');
    let passivesIncomes = $('#passives-incomes-propety');

    //Validacion
    let descriptionVal = inputValidation(description);
    let passivesIncomesVal = inputValidation(passivesIncomes);
    if (descriptionVal && passivesIncomesVal) {
        //Traer los datos
        let user = getData('user');

        //Reemplazar los datos
        user.assets.properties[iProperty].description = description.val();
        user.incomes.properties[iProperty].description = description.val();
        user.passives.properties[iProperty].description = description.val();
        user.incomes.properties[iProperty].income = passivesIncomes.val();

        //Subir datos
        setData('user', user);

        //Efectos de sonido
        cargarSonido('./audio/pencil.mp3');

        //Volver a pintar el modal
        balanceSheet();

        //Modal
        closeModal();
        openModalSuccess(2, 'Completado', 'Se edito la descripcion y los ingresos pasivos');
    } else if (descriptionVal) {
        //Traer los datos
        let user = getData('user');

        //Reemplazar los datos
        user.assets.properties[iProperty].description = description.val();
        user.incomes.properties[iProperty].description = description.val();
        user.passives.properties[iProperty].description = description.val();

        //Subir datos
        setData('user', user);

        //Efectos de sonido
        cargarSonido('./audio/pencil.mp3');

        //Volver a pintar el modal
        balanceSheet();

        //Modal
        closeModal();
        openModalSuccess(2, 'Completado', 'Se edito la descripcion');
    } else if (passivesIncomesVal) {
        //Traer los datos
        let user = getData('user');

        //Reemplazar los datos
        user.incomes.properties[iProperty].income = passivesIncomes.val();

        //Subir datos
        setData('user', user);

        //Efectos de sonido
        cargarSonido('./audio/pencil.mp3');

        //Volver a pintar el modal
        balanceSheet();

        //Modal
        closeModal();
        openModalSuccess(2, 'Completado', 'Se edito los ingresos pasivos');
    }
});

$('.btn-payment').click(function () {
    //Traer los datos
    let user = getData('user');
    let cash = parseInt(user.cash);
    let amount = parseInt(user.passives.default[iPay]);

    if (cash >= amount) {
        //Pagar la deuda
        cash -= amount;
        user.cash = cash;

        //Quitar la deuda
        user.passives.default[iPay] = 0;
        user.expenses.default[iPay + 1] = 0;

        //Subir los datos
        setData('user', user);

        //Efectos de sonido
        cargarSonido('./audio/applause.mp3');

        //Volver a pintar los datos
        balanceSheet();

        //Modal
        closeModal();
        openModalSuccess(2, 'Completado', '¡Felicidades! Has pagado tu deuda');
    } else {
        //Efectos de sonido
        cargarSonido('./audio/fail.mp3');

        //Modal
        closeModal();
        openModalSuccess(0, 'Error', 'Uy! Parece que no cuentas con suficiente saldo para realizar esta operacion');
    }
});

$('.btn-payment-loan').click(function () {
    //Traer los datos
    let user = getData('user');
    let cash = parseInt(user.cash);
    let amount = parseInt(user.passives.loans[iLoan]);

    if (cash >= amount) {
        //Pagar la deuda
        cash -= amount;
        user.cash = cash;

        //Quitar la deuda
        user.passives.loans.splice(iLoan, 1);
        user.expenses.loans.splice(iLoan, 1);

        //Subir los datos
        setData('user', user);

        //Efectos de sonido
        cargarSonido('./audio/applause.mp3');

        //Volver a pintar los datos
        balanceSheet();

        //Modal
        closeModal();
        openModalSuccess(2, 'Completado', '¡Felicidades! Has pagado tu deuda');
    } else {
        //Efectos de sonido
        cargarSonido('./audio/fail.mp3');

        //Modal
        closeModal();
        openModalSuccess(0, 'Error', 'Uy! Parece que no cuentas con suficiente saldo para realizar esta operacion');
    }
});