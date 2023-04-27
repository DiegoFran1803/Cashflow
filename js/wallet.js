if(localStorage['cash']) $('.wallet-cash').text(localStorage['cash']);

$('.btn-income').click(function() {
    if($('.card--input').val() != '' && $('.card--input').val() != ' '){
        let cash = parseInt($('.wallet-cash').text()) + parseInt($('.card--input').val());
        localStorage.setItem('cash', cash);
        $('.wallet-cash').text(cash.toString());
        $('.card--input').val('');
    }
});

$('.btn-expense').click(function() {
    if($('.card--input').val() != '' && $('.card--input').val() != ' '){
        let cash = parseInt($('.wallet-cash').text()) - parseInt($('.card--input').val());
        if(cash >= 0) {
            localStorage.setItem('cash', cash);
            $('.wallet-cash').text(cash.toString());
        }else {
            localStorage.setItem('cash', 0);
            $('.wallet-cash').text('0');
        }
        $('.card--input').val('');
    }
});

$('.btn-trash').click(function() {
    localStorage.setItem('cash', 0);
    $('.wallet-cash').text('0');
});

$('.btn-cashflow').click(function() {
    let cash = parseInt($('.wallet-cash').text()) + parseInt($('.flow').text());
    localStorage.setItem('cash', cash);
    $('.wallet-cash').text(cash);
});