let press_button = true

function randomValue(x) {
    return Math.floor(Math.random() * x) + 1;
}

function changeAnimation(x) {
    let c = 0;
    var change = setInterval(function(){
        let random = randomValue(x);
        $('.dices-number').text(random.toString());
        c++;

        if (c > 6){
            press_button = true;
            clearInterval(change);
        }
    }, 200);
}

$('.btn_throw').click(function() {
    if (press_button) {
        press_button = false;
        cargarSonido('./audio/dice.mp3');
        changeAnimation(6);
    }
});

$('.btn_double-throw').click(function() {
    if (press_button) {
        press_button = false;
        cargarSonido('./audio/dice.mp3');
        changeAnimation(12);
    }
});

