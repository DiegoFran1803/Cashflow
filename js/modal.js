function closeModal() {
    $('.modal-inputs > input').val('');
    $('.modal-inputs > input').css('outline', 'none');
    $('.body-modal > input').val('');
    $('.body-modal > input').css('outline', 'none');
    $('.body-modal > select').val('-1');
    $('.body-modal > select').css('outline', 'none');
    $('.modal--container').css('display', 'none');
    $('body').css('overflow', 'scroll');
    
}

function openModal(x) {
    x.css('display', 'flex');
    $('body').css('overflow', 'hidden');

    $('body, html').animate({
        scrollTop: '0px'
    }, 300);
}

function openModalSuccess(lvl, title, msg) {
    let color;
    let plantilla;
    if(lvl == 0) {
        color = 'var(--danger)';
        plantilla = `
            <i class="icon-alert fas fa-times-circle"></i>
        `;
    } else if(lvl == 1) {
        color = 'var(--warning)';
        plantilla = `
            <i class="icon-alert fas fa-exclamation-triangle"></i>
        `;
    } 
    else if(lvl == 2) {
        color = 'var(--success)';
        plantilla = `
            <i class="icon-alert fas fa-check-circle"></i>
        `;
    }

    $('.icon-alert-container').html(plantilla);
    $('.header-modal-alert').css('background-color', color);
    $('.icon-alert').css('color', color);
    $('.btn-accept-alert').css('background-color', color);
    

    $('.msg-alert').text(msg);
    $('.title-alert').text(title);

    $('.modal--container_alert').css('display', 'flex');
    $('body').css('overflow', 'hidden');

    $('body, html').animate({
        scrollTop: '0px'
    }, 300);
}

//Abrir Modal
$('.btn_new-game').click(function() {
    openModal($('.modal--container_new-game'));
});

$('.btn-add-assets').click(function() {
    openModal($('.modal--container_buy'));
});

$('.btn-add-passives').click(function() {
    openModal($('.modal--container_loan'));
});

$('.btn-savings').click(function() {
    openModal($('.modal--container_savings'));
});

//Cerrar Modal
$('.btn-cancel').click(function() {
    closeModal();
});

$('.btn-accept-alert').click(function() {
    closeModal();
});

//Opciones de Modal
$('#shares').click(function() {
    $('.buy-shares').css('display', 'block');
    $('.buy-property').css('display', 'none');
});

$('#property').click(function() {
    $('.buy-shares').css('display', 'none');
    $('.buy-property').css('display', 'block');
});

$('#withdrawal').click(function() {
    $('.btn-withdrawal').css('display', 'block');
    $('.btn-deposit').css('display', 'none');
});

$('#deposit').click(function() {
    $('.btn-withdrawal').css('display', 'none');
    $('.btn-deposit').css('display', 'block');
});

$('#sell-shares').click(function() {
    $('.sell-shares').css('display', 'block');
    $('.sell-shares-flex').css('display', 'flex');
    $('.edit-shares').css('display', 'none');
    $('.edit-shares-flex').css('display', 'none');
});

$('#edit-shares').click(function() {
    $('.sell-shares').css('display', 'none');
    $('.sell-shares-flex').css('display', 'none');
    $('.edit-shares').css('display', 'block');
    $('.edit-shares-flex').css('display', 'flex');
});

$('#sell-propety').click(function() {
    $('.sell-propety').css('display', 'block');
    $('.sell-propety-flex').css('display', 'flex');
    $('.edit-propety').css('display', 'none');
    $('.edit-propety-flex').css('display', 'none');
});

$('#edit-propety').click(function() {
    $('.sell-propety').css('display', 'none');
    $('.sell-propety-flex').css('display', 'none');
    $('.edit-propety').css('display', 'block');
    $('.edit-propety-flex').css('display', 'flex');
});