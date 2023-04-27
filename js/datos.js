function financialData() {
    if(localStorage['user']) {
        let user = JSON.parse(localStorage['user']);
        $('.name').text(user.nombre);
        $('.profession').text(user.profesion);
        $('.salary').text(user.salario);
        $('.children').text(user.hijos);

        if(user.gastos.hijos) $('.children-expenses').text(user.gastos.hijos);
        else $('.children-expenses').text('0');
    }
}

financialData();

$('.btn_children-more').click(function() {
    let children = parseInt($('.children').text());
    if(children < 3) {
        
        children++;
        $('.children').text(children);
        
        if(localStorage['user']) {
            let user = JSON.parse(localStorage['user']);
            user.hijos = children;
            user.gastos.hijos = parseInt(user.hijo) * parseInt(user.hijos);
            localStorage.setItem('user', JSON.stringify(user));
        }
    }

});

$('.btn_children-fewer').click(function() {
    let children = parseInt($('.children').text());
    if(children > 0) {
        
        children--;
        $('.children').text(children);
        
        if(localStorage['user']) {
            let user = JSON.parse(localStorage['user']);
            user.hijos = children;
            if(children != 0) user.gastos.hijos = parseInt(user.hijo) * parseInt(user.hijos);
            else if(user.gastos.hijos) delete user.gastos.hijos;
            
            localStorage.setItem('user', JSON.stringify(user));


        }
    }

});