$(document).ready(function(){
    $('.carousel').carousel( {
        duration:150,
        dist:-80,
        shift:-20,
        padding:5,
        indicators:true,
        noWrap:false
    });

    $('.parallax').parallax();

    /* Tamaño de la ventana */
    var ventana_ancho = $(window).width();
    var ventana_alto = $(window).height();
    console.log(ventana_ancho);
    console.log(ventana_alto);

    if(ventana_ancho < 500) {
        $('.carousel').carousel( {
        duration:150,
        dist:-40,
        shift:0,
        padding:5,
        numVisible: 5,
        indicators:true,
        noWrap:false
    });
    }

    $('.fancybox').fancybox();
});