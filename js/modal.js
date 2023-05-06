//Funcion cerrar Modal
function closeModal() {
    //Vaciando inputs del modal
    $('.modal-inputs > input').val('');
    $('.modal-inputs > input').css('outline', 'none');
    $('.body-modal > input').val('');
    $('.body-modal > input').css('outline', 'none');
    $('.body-modal > select').val('-1');
    $('.body-modal > select').css('outline', 'none');
    $('.modal--container').css('display', 'none');

    //Desbloquear el scroll
    $('body').css('overflow', 'scroll');
}

//Funcion abrir Modal
function openModal(x) {
    //Abrir modal
    x.css('display', 'flex');

    //Bloquear scroll 
    $('body').css('overflow', 'hidden');
    $('body, html').animate({
        scrollTop: '0px'
    }, 300);
}

//Modal alert (success, warning, danger)
function openModalSuccess(lvl, title, msg) {
    let color;
    let template;

    //Seleccionado tipo de alert
    if(lvl == 0) {
        color = 'var(--danger)';
        template = `
            <i class="icon-alert fas fa-times-circle"></i>
        `;
    } else if(lvl == 1) {
        color = 'var(--warning)';
        template = `
            <i class="icon-alert fas fa-exclamation-triangle"></i>
        `;
    } 
    else if(lvl == 2) {
        color = 'var(--success)';
        template = `
            <i class="icon-alert fas fa-check-circle"></i>
        `;
    }

    //Agrenado color y elementos
    $('.icon-alert-container').html(template);
    $('.header-modal-alert').css('background-color', color);
    $('.icon-alert').css('color', color);
    $('.btn-accept-alert').css('background-color', color);
    $('.msg-alert').text(msg);
    $('.title-alert').text(title);

    //Abrir modal
    $('.modal--container_alert').css('display', 'flex');

    //Bloquear scroll
    $('body').css('overflow', 'hidden');
    $('body, html').animate({
        scrollTop: '0px'
    }, 300);
}

//Abrir Modal, nuevo juego
$('.btn_new-game').click(function() {
    openModal($('.modal--container_new-game'));
});

//Abrir Modal, agregar activos
$('.btn-add-assets').click(function() {
    openModal($('.modal--container_buy'));
});

//Abrir Modal, agregar pasivos
$('.btn-add-passives').click(function() {
    openModal($('.modal--container_loan'));
});

//Abrir Modal, cuenta de ahorros
$('.btn-savings').click(function() {
    openModal($('.modal--container_savings'));
});

//Cerrar Modal
$('.btn-cancel').click(function() {
    closeModal();
});

//Cerrar Modal, alert
$('.btn-accept-alert').click(function() {
    closeModal();
});

//Opciones de Modal, comprar acicones
$('#shares').click(function() {
    $('.buy-shares').css('display', 'block');
    $('.buy-property').css('display', 'none');
});

//Opciones de Modal, comprar propiedades
$('#property').click(function() {
    $('.buy-shares').css('display', 'none');
    $('.buy-property').css('display', 'block');
});

//Opciones de Modal, retiro de ahorros
$('#withdrawal').click(function() {
    $('.btn-withdrawal').css('display', 'block');
    $('.btn-deposit').css('display', 'none');
});

//Opciones de Modal, deposito de ahorros
$('#deposit').click(function() {
    $('.btn-withdrawal').css('display', 'none');
    $('.btn-deposit').css('display', 'block');
});

//Opciones de Modal, vender acciones
$('#sell-shares').click(function() {
    $('.sell-shares').css('display', 'block');
    $('.sell-shares-flex').css('display', 'flex');
    $('.edit-shares').css('display', 'none');
    $('.edit-shares-flex').css('display', 'none');
});

//Opciones de Modal, editar acciones
$('#edit-shares').click(function() {
    $('.sell-shares').css('display', 'none');
    $('.sell-shares-flex').css('display', 'none');
    $('.edit-shares').css('display', 'block');
    $('.edit-shares-flex').css('display', 'flex');
});

//Opciones de Modal, vender propiedades
$('#sell-propety').click(function() {
    $('.sell-propety').css('display', 'block');
    $('.sell-propety-flex').css('display', 'flex');
    $('.edit-propety').css('display', 'none');
    $('.edit-propety-flex').css('display', 'none');
});

//Opciones de Modal, editar propiedades
$('#edit-propety').click(function() {
    $('.sell-propety').css('display', 'none');
    $('.sell-propety-flex').css('display', 'none');
    $('.edit-propety').css('display', 'block');
    $('.edit-propety-flex').css('display', 'flex');
});