if (localStorage['user']) {
    let user = JSON.parse(localStorage['user']);

    $('.salary').text(user.salario);
    $('.taxex').text(user.gastos.impuestos);
    $('.mortgage').text(user.gastos.hipoteca);
    $('.school').text(user.gastos.colegio);
    $('.car').text(user.gastos.automovil);
    $('.credit-card').text(user.gastos.tarjeta);
    $('.minors').text(user.gastos.menores);
    $('.other').text(user.gastos.otros);

    if (user.gastos.hijos) {
        let plantilla = `
            <tr>
                <td>Gasto Niños</td>
                <td>$ <span class="children">0</span></td>
            </tr>
        `;
        $('.tr-other').after(plantilla);
        $('.children').text(user.gastos.hijos);
    }

    //Mostrar Ingresos Pasivos
    if (user.ingresos && user.ingresos != 0) {
        $('.table-incomes').html('');

        //Titulo
        let plantillaTitle = `
                <tr class="thead-primary thead-incomes">
                    <td colspan="2">Ingresos Pasivos</td>
                </tr>
            `;
        $('.table-incomes').append(plantillaTitle);

        //Lista de Acciones
        for (let i = 0; i < user.ingresos.length; i++) {
            const ingreso = user.ingresos[i];
            let plantilla = `
                    <tr class="tr-incomes">
                        <td>` + ingreso.descripcion + `</td>
                        <td>$ ` + ingreso.pasivo + `</td>
                    </tr>
                `;
            $('.table-incomes').append(plantilla);

            let incomes = 0;
            for (let key in user.ingresos) {
                incomes += parseInt(user.ingresos[key].pasivo);
            }
            $('.total-incomes').text(incomes + parseInt(user.salario));
        }
    } else {
        $('.table-incomes').html('');
        $('.total-incomes').text(parseInt(user.salario));
    }

    if (user.gastos.prestamos && user.gastos.prestamos != 0) {
        $('.table-expenses').html('');

        //Titulo
        let plantillaTitle = `
                <tr class="thead-primary thead-expenses">
                    <td colspan="2">Intereses</td>
                </tr>
            `;
        $('.table-expenses').append(plantillaTitle);

        //Lista de Acciones
        for (let i = 0; i < user.gastos.prestamos.length; i++) {
            const ingreso = user.gastos.prestamos[i];
            let plantilla = `
                    <tr class="tr-expenses">
                        <td>Prestamo ` + (i+1) + `</td>
                        <td>$ ` + ingreso + `</td>
                    </tr>
                `;
            $('.table-expenses').append(plantilla);
        }

        let loans = 0;
        for (let key in user.gastos.prestamos) {
            if(key != 0) loans += parseInt(user.gastos.prestamos[key]);
        }
        let expenses = 0;
        for (let key in user.gastos) {
            expenses += parseInt(user.gastos[key]);
        }
        $('.total-expenses').text(expenses +loans);

    } else {
        $('.table-expenses').html('');

        let expenses = 0;
        for (let key in user.gastos) {
    
            expenses += parseInt(user.gastos[key]);
        }
        $('.total-expenses').text(expenses);

    }
}
