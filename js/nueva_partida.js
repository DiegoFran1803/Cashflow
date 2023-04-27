function invalidInput(e) {
    e.css('outline', 'solid 2px var(--danger)');
}

function validInput(e) {
    e.css('outline', 'solid 2px var(--success)');
}

function inputValidation(e) {
    if(e.val() != '' && e.val() != ' '){
        validInput(e);
        return true;
    }else {
        invalidInput(e);
        return false;
    }
}

function selectValidation(e) {
    if(e.val() != "-1"){
        validInput(e);
        return true;
    }else {
        invalidInput(e);
        return false;
    }
}

$('.btn-start').click(function() {
    let username = $('#username');
    let profession = $('#professions');

    let usernameValidation = inputValidation(username);
    let professionValidation = selectValidation(profession);
    if(usernameValidation && professionValidation) {
        let professions;
        $.ajaxSetup({
            async: false
        });
        $.getJSON('./json/professions.json', function(data) {
            professions =  data;
        });

        let user = professions[parseInt(profession.val())];
        user.nombre = username.val();
        user.hijos = 0;

        localStorage.setItem('user', JSON.stringify(user));
        localStorage.setItem('cash', 0);
        financialData()
        closeModal();
        openModalSuccess(2, 'Completado', 'La partida se inicio correctamente ¡A Jugar!');
    }
});