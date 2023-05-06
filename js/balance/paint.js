//Pintar el balance general
function balanceSheet() {
    if (localStorage['user']) {
        //Traer los datos
        let user = getData('user');
    
        //Mostrar gastos por defecto
        paintData('.savings', user.savings);
        paintData('.mortgage', user.passives.default[0]);
        paintData('.school', user.passives.default[1]);
        paintData('.car', user.passives.default[2]);
        paintData('.credit-car', user.passives.default[3]);
        paintData('.minors', user.passives.default[4]);
    
        //Mostrar Acciones
        if (user.assets.shares.length != 0) paintShares(user.assets.shares);
        else unpaintData('.table-shares');
        
        //Mostrar Propiedades
        if (user.assets.properties.length != 0) paintProperties(user.assets.properties, user.passives.properties);
        else unpaintData('.table-property');
        
        //Mostrar Hipotecas
        if (user.passives.properties.length != 0) paintMortgages(user.passives.properties);
        else unpaintData('.table-mortgage'); 
        
        //Mostrar Prestamos
        if (user.passives.loans.length != 0) paintLoans(user.passives.loans);
        else unpaintData('.table-loan');

        listButtons();
    }
}

//Llamar funcion
balanceSheet();