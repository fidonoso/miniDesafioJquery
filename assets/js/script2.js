$(document).ready(function() {

    const boton = document.querySelector('button');   
    boton.addEventListener('click', () => {
        $("#menu").slideToggle( "slow" );
    })

})