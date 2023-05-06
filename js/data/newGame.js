$('.btn-start').click(function() {

    //Variables
    let _name = $('#username');
    let _profession = $('#professions');

    //Validacion
    let nameValidation = inputValidation(_name);
    let professionValidation = selectValidation(_profession);
    if(nameValidation && professionValidation) {
        //Obtener datos del JSON
        let professions;
        $.ajaxSetup({
            async: false
        });
        $.getJSON('./json/professions.json', function(data) {
            professions =  data;
        });

        //Asignando profesion
        let profession = professions[parseInt(_profession.val())];

        //Creando el user
        let user = {
            "name": _name.val(),
            "profession": profession.profession,
            "cash": 0,
            "savings": profession.savings,
            "incomes": {
                "salary": profession.salary,
                "properties": []
            },
            "expenses": {
                "default": [
                    profession.expenses.taxes,
                    profession.expenses.mortgage,
                    profession.expenses.school,
                    profession.expenses.car,
                    profession.expenses.credit,
                    profession.expenses.minors,
                    profession.expenses.others
                ],
                "children": {
                    "cost": profession.children,
                    "number": 0
                },
                "loans": []
            },
            "assets": {
                "shares": [],
                "properties": []
            },
            "passives": {
                "default": [
                    profession.passives.mortgage,
                    profession.passives.school,
                    profession.passives.car,
                    profession.passives.credit,
                    profession.passives.minors,
                ],
                "properties": [],
                "loans": []
            }
        }

        //Guardar objeto
        setData('user', user);

        //Sonido de Inicio
        cargarSonido('./audio/start.mp3');

        //Pintar
        financialData();

        //Modal
        closeModal();
        openModalSuccess(2, 'Completado', 'La partida se inicio correctamente ¡A Jugar!');
    }
});