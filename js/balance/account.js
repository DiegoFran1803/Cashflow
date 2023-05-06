$('.btn-withdrawal').click(function() {
    //Variables
    let amount = $('#banking-operation');

    //Validacion
    let amountValidation = inputValidation(amount);
    if(amountValidation){
        //Traer los datos
        let user = getData('user');
        let cash = parseInt(user.cash);
        let savings = parseInt(user.savings);

        let withdrawal =  parseInt(amount.val());

        if(savings >= withdrawal) {
            savings -= withdrawal;
            user.savings = savings;

            cash += withdrawal;
            user.cash = cash;

            //Subir datos
            setData('user', user);

            //Efectos de sonido
            cargarSonido('./audio/register.mp3');

            //Volver a pintar los datos
            paintData('.savings', savings);

            //Modal
            closeModal();
            openModalSuccess(2, 'Completado', 'La trasferencia se ha completado');
        } else {
            //Modal
            closeModal();
            openModalSuccess(0, 'Error', '¡Uy! Parece que no cuenta con saldo suficient para realizar esta accion');
        } 
    }
});

$('.btn-deposit').click(function() {
    //Variables
    let amount = $('#banking-operation');

    //Validacion
    let amountValidation = inputValidation(amount);
    if(amountValidation){
        //Traer los datos
        let user = getData('user');
        let cash = parseInt(user.cash);
        let savings = parseInt(user.savings);

        let deposit =  parseInt(amount.val());

        if(cash >= deposit) {
            cash -= deposit;
            user.cash = cash;

            savings += deposit;
            user.savings = savings;

            //Subir datos
            setData('user', user);

            //Efectos de sonido
            cargarSonido('./audio/register.mp3');

            //Volver a pintar los datos
            paintData('.savings', savings);

            //Modal
            closeModal();
            openModalSuccess(2, 'Completado', 'La trasferencia se ha completado');
        } else {
            //Modal
            closeModal();
            openModalSuccess(0, 'Error', '¡Uy! Parece que no cuenta con saldo suficient para realizar esta accion');
        } 
    }
});