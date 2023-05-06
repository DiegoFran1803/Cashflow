//Despintar datos
function unpaintData(selector) {
    $(selector).html('');
}

//Pintar un dato
function paintData(selector, data) {
    $(selector).text(data);
}

//Pintar un dato en un input
function paintDataInput(selector, data) {
    $(selector).val(data);
}

//Pintar una imagen
function paintImage(selector, img) {
    $(selector).attr('src', img);
}

//Pintar plantilla de gasto en hijos
function paintChildrenSpending(childrenSpending) {
    let template = `
        <tr>
            <td>Gasto Niños</td>
            <td>$ <span>`+ childrenSpending +`</span></td>
        </tr>
    `;

    $('.table-children').append(template);
}

//Pintar plantilla del titulo de ingresos
function paintTitleIncomes() {
    //Plantilla
    let template = `
        <tr class="thead-primary">
            <td colspan="2">Ingresos Pasivos</td>
        </tr>
    `;

    //Pintar
    $('.table-incomes').append(template);
}

//Pintar plantilla de ingresos
function paintIncomes(incomes) {
    //Despintar todo
    unpaintData('.table-incomes');
    
    //Pintar titulo
    paintTitleIncomes();

    for (let i = 0; i < incomes.length; i++) {
        const income = incomes[i];
        
        //Plantilla
        let template = `
            <tr class="tr-incomes">
                <td>` + income.description + `</td>
                <td>$ ` + income.income + `</td>
            </tr>
        `;

        //Pintar
        $('.table-incomes').append(template);  
    }
}

//Pintar plantilla del titulo de gastos
function paintTitleExpenses() {
    //Plantilla
    let template = `
        <tr class="thead-primary">
            <td colspan="2">Intereses</td>
        </tr>
    `;

    //Pintar
    $('.table-expenses').append(template);
}

//Pintar plantilla de gastos
function paintExpenses(expenses) {
    //Despintar
    unpaintData('.table-expenses');

    //Pintar titulo
    paintTitleExpenses();

    for (let i = 0; i < expenses.length; i++) {
        const expense = expenses[i];
        
        //Plantilla
        let template = `
            <tr class="tr-expenses">
                <td>Prestamo ` + (i + 1) + `</td>
                <td>$ ` + expense + `</td>
            </tr>
        `;

        //Pintar
        $('.table-expenses').append(template);  
    }
}

//Pintar plantilla del titulo de acciones
function paintTitleShares() {
    //Plantilla
    let template = `
        <tr class="thead-primary thead-shares">
            <td colspan="4">Acciones</td>
        </tr>
    `;

    //Pintar
    $('.table-shares').append(template);
}

//Pintar plantilla de acciones
function paintShares(shares) {
    //Despintar
    unpaintData('.table-shares');

    //Pintar titulo
    paintTitleShares();

    for (let i = 0; i < shares.length; i++) {
        const share = shares[i];
        
        //Plantilla
        let template = `
            <tr class="tr-shares">
                <td class="td_icon"><button class="btn-admin-shares"><i class="fas fa-user-cog fa-lg"></i></button></td>
                <td>` + share.description + `</td>
                <td><span>` + share.number  + `</span> und.</td>
                <td>$ <span class="savings">` + share.cost + `</span></td>
            </tr>
        `;

        //Pintar
        $('.table-shares').append(template);  
    }
}

//Pintar plantilla del titulo de propiedades
function paintTitleProperties() {
    //Plantilla
    let template = `
        <tr class="thead-primary thead-property">
            <td colspan="4">Propiedades</td>
        </tr>
    `;

    //Pintar
    $('.table-property').append(template);
}

//Pintar plantilla de propiedades
function paintProperties(properties, mortgages) {
    //Despintar
    unpaintData('.table-property');

    //Pintar titulo
    paintTitleProperties();

    for (let i = 0; i < properties.length; i++) {
        const property = properties[i];
        const mortgage = mortgages[i];

        //Valor total de la propiedad
        let total = (parseInt(mortgage.mortgage) + parseInt(property.entrance));
        
        //Plantilla
        let template = `
            <tr class="tr-property">
                <td class="td_icon"><button class="btn-admin-propety"><i class="fas fa-user-cog fa-lg"></i></button></td>
                <td>` + property.description + `</td>
                <td>$ <span>` + property.entrance  + `</span></td>
                <td>$ <span>` + total + `</span></td>
            </tr>
        `;

        //Pintar
        $('.table-property').append(template);  
    }
}

//Pintar plantilla del titulo de hipotecas
function paintTitleMortgages() {
    //Plantilla
    let template = `
        <tr class="thead-primary thead-mortgage">
            <td colspan="4">Propiedades</td>
        </tr>
    `;

    //Pintar
    $('.table-mortgage').append(template);
}

//Pintar plantilla de hipotecas
function paintMortgages(mortgages) {
    //Despintar
    unpaintData('.table-mortgage');

    //Pintar titulo
    paintTitleMortgages();

    for (let i = 0; i < mortgages.length; i++) {
        const mortgage = mortgages[i];
        
        //Plantilla
        let template = `
            <tr class="tr-mortgage">
                <td class="td_icon"><button class="space-mortgage"></td>
                <td>` + mortgage.description + `</td>
                <td>$ <span>` + mortgage.mortgage + `</span></td>
            </tr>
        `;

        //Pintar
        $('.table-mortgage').append(template);  
    }
}

//Pintar plantilla del titulo de prestamos
function paintTitleLoans() {
    //Plantilla
    let template = `
        <tr class="thead-primary thead-loan">
            <td colspan="4">Prestamos</td>
        </tr>
    `;

    //Pintar
    $('.table-loan').append(template);
}

//Pintar plantilla de prestamos
function paintLoans(loans) {
    //Despintar
    unpaintData('.table-loan');

    //Pintar titulo
    paintTitleLoans();

    for (let i = 0; i < loans.length; i++) {
        const loan = loans[i];
        
        //Plantilla
        let template = `
            <tr class="tr-loan">
                <td class="td_icon"><button class="btn-pay-loan"><i class="fas fa-hand-holding-usd fa-lg"></i></button></td>
                <td>Prestamo ` + (i + 1) + `</td>
                <td>$ <span>` + loan + `</span></td>
            </tr>
        `;

        //Pintar
        $('.table-loan').append(template);  
    }
}