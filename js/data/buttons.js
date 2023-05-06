$('.btn_children-more').click(function() {
    //Tomar valor
    let children = parseInt($('.children').text());

    //Comprobar si el numero de hijos es menor que 3
    if(children < 3) {
        //Agregar hijo
        children++;

        //Pintar datos
        paintData('.children', children);
        
        if(localStorage['user']) {
            //Traer los datos
            let user = getData('user');

            //Agregar numero de hijos
            user.expenses.children.number = children;

            //Subir los datos
            setData('user', user);
        }
    }

});

$('.btn_children-fewer').click(function() {
    //Tomar valor
    let children = parseInt($('.children').text());

    //Comprobar si el numero de hijos es mayor que 0
    if(children > 0) {
        //Quitar hijo
        children--;

        //Pintar los datos
        paintData('.children', children);
        
        if(localStorage['user']) {
            //Traer los datos
            let user = getData('user');

            //Agregar numero de hijos
            user.expenses.children.number = children;

            //Subir los datos
            setData('user', user);
        }
    }
});