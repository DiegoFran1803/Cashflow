//Extension Modal
function extensionModal() {
    $('.btn-admin-shares').each(function (i) {
        $(this).click(function () {
            openModal($('.modal--container_admin-shares'));

            $('.btn-sell-shares').click(function () {
                let costSell = $('#cost-sell');

                let costSellVal = inputValidation(costSell);

                if (costSellVal && localStorage['user'] && localStorage['cash']) {
                    let user = JSON.parse(localStorage['user']);
                    let cash = localStorage['cash'];
                    let revenue = parseInt(user.activos.acciones[i].cantidad) * parseInt(costSell.val());

                    user.activos.acciones.splice(i, 1);
                    cash = parseInt(cash) + revenue;

                    localStorage.setItem('user', JSON.stringify(user));
                    localStorage.setItem('cash', cash);

                    closeModal();
                    openModalSuccess(2, 'Completado', '¡Felicidades! Vendiste tus acciones');
                    balanceSheet();
                }
            });

            $('.btn-edit-shares').click(function() {
                let descriptionShares = $('#description-shares');
                let quantityShares = $('#quantity-shares');

                let descriptionSharesVal = inputValidation(descriptionShares);
                let quantitySharesVal = inputValidation(quantityShares);

                if(localStorage['user']){
                    let user = JSON.parse(localStorage['user']);
                    if(descriptionSharesVal && quantitySharesVal) {
                        user.activos.acciones[i].descripcion = descriptionShares.val();
                        user.activos.acciones[i].cantidad = quantityShares.val();
                        localStorage.setItem('user', JSON.stringify(user));
                        closeModal();
                        openModalSuccess(2, 'Completado', 'Se edito la descripcion y la cantidad de acciones');
                        balanceSheet();
                    }else if(descriptionSharesVal) {
                        user.activos.acciones[i].descripcion = descriptionShares.val();
                        localStorage.setItem('user', JSON.stringify(user));
                        closeModal();
                        openModalSuccess(2, 'Completado', 'Se edito la descripcion');
                        balanceSheet();
                    }else if (quantitySharesVal) {
                        user.activos.acciones[i].cantidad = quantityShares.val();
                        localStorage.setItem('user', JSON.stringify(user));
                        closeModal();
                        openModalSuccess(2, 'Completado', 'Se edito la cantidad de acciones');
                        balanceSheet();
                    }
                }
            });
        });
    });

    $('.btn-admin-propety').each(function (i) {
        $(this).click(function () {
            openModal($('.modal--container_admin-propety'));

            $('.btn-sell-propety').click(function () {
                let sellPrice = $('#sell-price');

                let sellPriceVal = inputValidation(sellPrice);

                if (sellPriceVal && localStorage['user'] && localStorage['cash']) {
                    let user = JSON.parse(localStorage['user']);
                    let cash = localStorage['cash'];
                    let revenue = parseInt(sellPrice.val()) - parseInt(user.pasivos.hipotecas[i].hipoteca);

                    if (revenue >= 0) {
                        user.activos.propiedades.splice(i, 1);
                        user.ingresos.splice(i, 1);
                        user.pasivos.hipotecas.splice(i, 1);
                        cash = parseInt(cash) + revenue;

                        localStorage.setItem('user', JSON.stringify(user));
                        localStorage.setItem('cash', cash);

                        closeModal();
                        openModalSuccess(2, 'Completado', '¡Felicidades! Vendiste tus acciones');
                        balanceSheet();
                    } else {
                        closeModal();
                        openModalSuccess(1, 'Advertencia', 'Vender esta propiedad a este precio hara pierdas dinero');
                        balanceSheet();
                    }

                }
            });

            $('.btn-edit-propety').click(function() {
                let descriptionPropety = $('#description-propety');
                let passivesIncomesPropety = $('#passives-incomes-propety');

                let descriptionPropetyVal = inputValidation(descriptionPropety);
                let passivesIncomesPropetyVal = inputValidation(passivesIncomesPropety);

                if(localStorage['user']){
                    let user = JSON.parse(localStorage['user']);
                    if(descriptionPropetyVal && passivesIncomesPropetyVal) {
                        user.activos.propiedades[i].descripcion = descriptionPropety.val();
                        user.ingresos[i].descripcion = descriptionPropety.val();
                        user.pasivos.hipotecas[i].descripcion = descriptionPropety.val();
                        user.ingresos[i].pasivo = passivesIncomesPropety.val();
                        localStorage.setItem('user', JSON.stringify(user));
                        closeModal();
                        openModalSuccess(2, 'Completado', 'Se edito la descripcion y los ingresos pasivos');
                        balanceSheet();
                    }else if(descriptionPropetyVal) {
                        user.activos.propiedades[i].descripcion = descriptionPropety.val();
                        user.ingresos[i].descripcion = descriptionPropety.val();
                        user.pasivos.hipotecas[i].descripcion = descriptionPropety.val();
                        localStorage.setItem('user', JSON.stringify(user));
                        closeModal();
                        openModalSuccess(2, 'Completado', 'Se edito la descripcion');
                        balanceSheet();
                    }else if (passivesIncomesPropetyVal) {
                        user.ingresos[i].pasivo = passivesIncomesPropety.val();
                        localStorage.setItem('user', JSON.stringify(user));
                        closeModal();
                        openModalSuccess(2, 'Completado', 'Se edito los ingresos pasivos');
                        balanceSheet();
                    }
                }
            });
        });
    });

    $('.btn-pay').each(function(i) {
        $(this).click(function () {
            openModal($('.modal--container_pay'));

            $('.btn-payment').click(function() {
                if(localStorage['user'] && localStorage['cash']){
                    let user = JSON.parse(localStorage['user']);
                    let cash = localStorage['cash'];

                    let toPay = ["hipoteca", "colegio", "automovil", "tarjeta", "menores"];
                    if(parseInt(user.pasivos[toPay[i]]) <= parseInt(cash)) {
                        cash = parseInt(cash) - parseInt(user.pasivos[toPay[i]]);
                        user.pasivos[toPay[i]] = 0;
                        user.gastos[toPay[i+1]] = 0;

                        localStorage.setItem('user', JSON.stringify(user));
                        localStorage.setItem('cash', cash);

                        closeModal();
                        openModalSuccess(2, 'Completado', '¡Felicidades! Has pagado tu deuda');
                        balanceSheet();
                    }else {
                        closeModal();
                        openModalSuccess(0, 'Error', 'Uy! Parece que no cuentas con suficiente saldo para realizar esta operacion');
                        balanceSheet();
                    }
                }
            });
        });
    });

    $('.btn-pay-loan').each(function(i) {
        $(this).click(function () {
            openModal($('.modal--container_pay'));

            $('.btn-payment').click(function() {
                if(localStorage['user'] && localStorage['cash']){
                    let user = JSON.parse(localStorage['user']);
                    let cash = localStorage['cash'];

                    if(parseInt(user.pasivos.prestamos[i]) <= parseInt(cash)) {
                        cash = parseInt(cash) - parseInt(user.pasivos.prestamos[i]);
                        user.pasivos.prestamos.splice(i, 1);
                        user.gastos.prestamos.splice(i, 1);

                        if(user.pasivos.prestamos.length == 0) delete user.pasivos.prestamos;
                        if(user.gastos.prestamos.length == 0) delete user.gastos.prestamos;

                        localStorage.setItem('user', JSON.stringify(user));
                        localStorage.setItem('cash', cash);

                        closeModal();
                        openModalSuccess(2, 'Completado', '¡Felicidades! Has pagado tu deuda');
                        balanceSheet();
                    }else {
                        closeModal();
                        openModalSuccess(0, 'Error', 'Uy! Parece que no cuentas con suficiente saldo para realizar esta operacion');
                        balanceSheet();
                    }
                }
            });
        });
    });

    return null;
}

function invalidInput(e) {
    e.css('outline', 'solid 2px var(--danger)');
}

function validInput(e) {
    e.css('outline', 'solid 2px var(--success)');
}

function inputValidation(e) {
    if (e.val() != '' && e.val() != ' ') {
        validInput(e);
        return true;
    } else {
        invalidInput(e);
        return false;
    }
}

let user;

function balanceSheet() {
    if (localStorage['user']) {
        user = JSON.parse(localStorage['user']);
        $('.savings').text(user.ahorros);
        $('.mortgage').text(user.pasivos.hipoteca);
        $('.school').text(user.pasivos.colegio);
        $('.car').text(user.pasivos.automovil);
        $('.credit-car').text(user.pasivos.tarjeta);
        $('.minors').text(user.pasivos.menores);
        $('.savings').text(user.ahorros);

        //Mostrar Acciones
        if (user.activos && user.activos.acciones && user.activos.acciones.length != 0) {
            //Reinicio
            $('.table-shares').html('');

            //Titulo
            let plantillaTitle = `
                <tr class="thead-primary thead-shares">
                    <td colspan="4">Acciones</td>
                </tr>
            `;
            $('.table-shares').append(plantillaTitle);

            //Lista de Acciones
            for (let i = 0; i < user.activos.acciones.length; i++) {
                const accion = user.activos.acciones[i];
                let plantilla = `
                    <tr class="tr-shares">
                        <td class="td_icon"><button class="btn-admin-shares"><i class="fas fa-user-cog fa-lg"></i></button></td>
                        <td>` + accion.descripcion + `</td>
                        <td>` + accion.cantidad + ` und.</td>
                        <td>$ <span class="savings">` + accion.costo + `</span></td>
                    </tr>
                `;
                $('.table-shares').append(plantilla);
            }
        } else $('.table-shares').html('');

        //Mostrar Propiedades
        if (user.activos && user.activos.propiedades && user.activos.propiedades.length != 0) {
            //Reinicio
            $('.table-property').html('');

            //Titulo
            let plantillaTitle = `
                <tr class="thead-primary thead-property">
                    <td colspan="4">Propiedades</td>
                </tr>
            `;
            $('.table-property').append(plantillaTitle);

            //Lista de Acciones
            for (let i = 0; i < user.activos.propiedades.length; i++) {
                const propiedad = user.activos.propiedades[i];
                let plantilla = `
                    <tr class="tr-property">
                        <td class="td_icon"><button class="btn-admin-propety"><i class="fas fa-user-cog fa-lg"></i></button></td>
                        <td>` + propiedad.descripcion + `</td>
                        <td>$ ` + propiedad.entrada + `</td>
                        <td>$ <span class="savings">` + (parseInt(user.pasivos.hipotecas[i].hipoteca) + parseInt(propiedad.entrada)) + `</span></td>
                    </tr>
                `;
                $('.table-property').append(plantilla);
            }
        } else $('.table-property').html('');
    }

    //Mostrar Hipotecas
    if (user.pasivos.hipotecas && user.pasivos.hipotecas != 0) {
        $('.table-mortgage').html('');

        //Titulo
        let plantillaTitle = `
            <tr class="thead-primary thead-mortgage">
                <td colspan="4">Propiedades</td>
            </tr>
        `;
        $('.table-mortgage').append(plantillaTitle);

        //Lista de Acciones
        for (let i = 0; i < user.pasivos.hipotecas.length; i++) {
            const hipoteca = user.pasivos.hipotecas[i];
            let plantilla = `
                <tr class="tr-mortgage">
                    <td class="td_icon"><button class="space-mortgage"></td>
                    <td>` + hipoteca.descripcion + `</td>
                    <td>$ ` + hipoteca.hipoteca + `</td>
                </tr>
            `;
            $('.table-mortgage').append(plantilla);
        }
    } else $('.table-mortgage').html('');

    //Mostrar Prestamos
    if (user.pasivos.prestamos && user.pasivos.prestamos != 0) {
        $('.table-loan').html('');

        //Titulo
        let plantillaTitle = `
                <tr class="thead-primary thead-loan">
                    <td colspan="4">Propiedades</td>
                </tr>
            `;
        $('.table-loan').append(plantillaTitle);

        //Lista de Acciones
        for (let i = 0; i < user.pasivos.prestamos.length; i++) {
            const prestamo = user.pasivos.prestamos[i];
            let plantilla = `
                    <tr class="tr-loan">
                        <td class="td_icon"><button class="btn-pay-loan"><i class="fas fa-hand-holding-usd fa-lg"></i></button></td>
                        <td>Prestamo ` + (i+1) + `</td>
                        <td>$ ` + prestamo + `</td>
                    </tr>
                `;
            $('.table-loan').append(plantilla);
        }
    } else $('.table-loan').html('');

    //Reiniciar botones
    extensionModal();
    return null;
}

balanceSheet();

$('.btn-buy-shares').click(function () {
    let description = $('#description');
    let quantity = $('#quantity');
    let cost = $('#cost');
    let descriptioVal = inputValidation(description);
    let quantityVal = inputValidation(quantity);
    let costVal = inputValidation(cost);

    if (descriptioVal && quantityVal && costVal) {
        let total = (parseInt(quantity.val()) * parseInt(cost.val()));

        if (localStorage['user'] && localStorage['cash'] && localStorage['cash'] >= total) {
            let cash = localStorage.getItem('cash');
            let accion = {
                "descripcion": description.val(),
                "cantidad": quantity.val(),
                "costo": cost.val(),
            }

            if (!user.activos) {
                user.activos = {
                    "acciones": [accion]
                };
            } else if (!user.activos.acciones) {
                user.activos.acciones = [];
                user.activos.acciones.push(accion);
            } else {
                user.activos.acciones.push(accion);
            }

            if (localStorage['user']) {
                localStorage.setItem('user', JSON.stringify(user));
            }
            cash = parseInt(cash) - total;
            localStorage.setItem('cash', cash);

            closeModal();
            openModalSuccess(2, 'Completado', '¡Bien! La compra se realizo con exito');
        } else {
            closeModal();
            openModalSuccess(0, 'Error', '¡Uy! Parece que con cuentas con suficiente saldo para realizar esta accion');
        }

        balanceSheet();

    }
});

$('.btn-buy-property').click(function () {
    let description = $('#description');
    let initialPayment = $('#initial-payment');
    let mortgage = $('#mortgage');
    let passivesIncomes = $('#passives-incomes');

    let descriptionVal = inputValidation(description);
    let initialPaymentVal = inputValidation(initialPayment);
    let mortgageVal = inputValidation(mortgage);
    let passivesIncomesVal = inputValidation(passivesIncomes);

    if (descriptionVal && initialPaymentVal && mortgageVal && passivesIncomesVal) {
        if (localStorage['user'] && localStorage['cash'] && parseInt(localStorage['cash']) >= parseInt(initialPayment.val())) {
            let cash = localStorage.getItem('cash');
            let propiedad = {
                "descripcion": description.val(),
                "entrada": initialPayment.val()
            }

            if (!user.activos) {
                user.activos = {
                    "propiedades": [propiedad]
                };
            } else if (!user.activos.propiedades) {
                user.activos.propiedades = [];
                user.activos.propiedades.push(propiedad);
            } else {
                user.activos.propiedades.push(propiedad);
            }

            let hipoteca = {
                "descripcion": description.val(),
                "hipoteca": mortgage.val()
            }

            if (!user.pasivos.hipotecas) {
                user.pasivos.hipotecas = [];
                user.pasivos.hipotecas.push(hipoteca);
            } else {
                user.pasivos.hipotecas.push(hipoteca);
            }

            let ingreso = {
                "descripcion": description.val(),
                "pasivo": passivesIncomes.val()
            }

            if (!user.ingresos) {
                user.ingresos = [];
                user.ingresos.push(ingreso);
            } else {
                user.ingresos.push(ingreso);
            }

            if (localStorage['user']) {
                localStorage.setItem('user', JSON.stringify(user));
            }

            cash = parseInt(cash) - parseInt(initialPayment.val());
            localStorage.setItem('cash', cash);

            closeModal();
            openModalSuccess(2, 'Completado', '¡Bien! La compra se realizo con exito');
        } else {
            closeModal();
            openModalSuccess(0, 'Error', '¡Uy! Parece que con cuentas con suficiente saldo para realizar esta accion');
        }

        balanceSheet();
    }
});

$('.btn-loan').click(function () {
    let amount = $('#amount');
    let amountVal = inputValidation(amount);

    if (localStorage['cash'] && localStorage['user'] && amountVal) {
        if (parseInt(amount.val()) >= 1000 && (parseInt(amount.val()) % 10) == 0) {
            let cash = localStorage.getItem('cash');
            let prestamo = parseInt(amount.val());
            if (!user.pasivos.prestamos) {
                user.pasivos.prestamos = [];
                user.pasivos.prestamos.push(prestamo);
            } else {
                user.pasivos.prestamos.push(prestamo);
            }
    
            if (!user.gastos.prestamos) {
                user.gastos.prestamos = [];
                user.gastos.prestamos.push(prestamo * 0.1);
            } else {
                user.gastos.prestamos.push(prestamo * 0.1);
            }
    
            cash = parseInt(cash) + prestamo;
            localStorage.setItem('cash', cash);
            localStorage.setItem('user', JSON.stringify(user));
    
            closeModal();
            openModalSuccess(2, 'Completado', 'Prestamo realizado');
        } else {
            closeModal();
            openModalSuccess(0, 'Error', 'Solo puede hacer prestamos con un monto mayor de $ 1000 y en multiplos de 10');
        }
    }

    balanceSheet();
})