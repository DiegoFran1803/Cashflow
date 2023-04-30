let version = 'Alpha 1.2.0';
$('.version-code').text(version);

function cargarSonido(fuente) {
    let etiquetaAudio = document.createElement("audio");
    etiquetaAudio.setAttribute("src", fuente);
    etiquetaAudio.play();
};