$('.btn-withdrawal').click(function() {
    if($('#banking-operation').val() != '' && $('#banking-operation').val() != ' ' && localStorage['cash'] && localStorage['user'] ){
        let cash = localStorage.getItem('cash');
        let user = JSON.parse(localStorage['user']);
        
        if(parseInt($('#banking-operation').val()) <= parseInt(user.ahorros)){
            user.ahorros = parseInt(user.ahorros) - parseInt($('#banking-operation').val());
            cash = parseInt(cash) + parseInt($('#banking-operation').val());

            localStorage.setItem('cash', cash);
            localStorage.setItem('user', JSON.stringify(user));

            $('.savings').text(user.ahorros);
            $('#banking-operation').val('');

            closeModal();
            openModalSuccess(2, 'Completado', 'La trasferencia se ha completado');
        } else {
            closeModal();
            openModalSuccess(0, 'Error', '¡Uy! Parece que no cuenta con saldo suficient para realizar esta accion');
        }
    }
});