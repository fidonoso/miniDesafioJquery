$(document).ready(()=>{

    $('#tocame').mouseover(()=>{
        $('.par').css({backgroundColor: 'blue'});
    })
    $('#tocame').mouseleave(()=>{
        $('.par').css({backgroundColor: '#cbd5e0'});
    })
    $('#tocame').mouseover(()=>{
        $('.impar').css({backgroundColor: 'green'});
    })
    $('#tocame').mouseleave(()=>{
        $('.impar').css({backgroundColor: '#cbd5e0'});
    })
});