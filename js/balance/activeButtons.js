let iShares;
let iProperty;
let iPay;
let iLoan;

//Botones de las listas de las tablas
function listButtons() {
    //Administrar acciones
    $('.btn-admin-shares').each(function (i) {
        $(this).click(function () {
            openModal($('.modal--container_admin-shares'));
            iShares = i;
        });
    });

    //Administrar Propiedades
    $('.btn-admin-propety').each(function (i) {
        $(this).click(function () {
            openModal($('.modal--container_admin-propety'));
            iProperty = i;
        });
    });

    //Pagar una deuda por defecto
    $('.btn-pay').each(function(i) {
        $(this).click(function () {
            openModal($('.modal--container_pay'));
            iPay = i;
        });
    });

    //Pagar un prestamo realizado
    $('.btn-pay-loan').each(function(i) {
        $(this).click(function () {
            openModal($('.modal--container_pay-loan'));
            iLoan = i;
        });
    });
}