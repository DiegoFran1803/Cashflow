if(localStorage['cash']) $('.wallet-cash').text(localStorage['cash']);

$('.btn-income').click(function() {
    if($('.card--input').val() != '' && $('.card--input').val() != ' '){
        let cash = parseInt($('.wallet-cash').text()) + parseInt($('.card--input').val());
        localStorage.setItem('cash', cash);
        $('.wallet-cash').text(cash.toString());
        $('.card--input').val('');
        cargarSonido('./audio/register.mp3');
        
    }
});

$('.btn-expense').click(function() {
    if($('.card--input').val() != '' && $('.card--input').val() != ' '){
        let cash = parseInt($('.wallet-cash').text()) - parseInt($('.card--input').val());
        if(cash >= 0) {
            localStorage.setItem('cash', cash);
            $('.wallet-cash').text(cash.toString());
            cargarSonido('./audio/fail.mp3');
        }else {
            localStorage.setItem('cash', 0);
            $('.wallet-cash').text('0');
            cargarSonido('./audio/fail.mp3');
        }
        $('.card--input').val('');
        
    }
});

$('.btn-trash').click(function() {
    localStorage.setItem('cash', 0);
    $('.wallet-cash').text('0');
    cargarSonido('./audio/trash.mp3');
});

$('.btn-cashflow').click(function() {
    let cash = parseInt($('.wallet-cash').text()) + parseInt($('.flow').text());
    localStorage.setItem('cash', cash);
    $('.wallet-cash').text(cash);
    cargarSonido('./audio/register.mp3');
});