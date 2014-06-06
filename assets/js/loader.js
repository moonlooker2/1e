function startLoader() {
    setTimeout(function(){
        $('#startLoader').hide();
        $('body').css({'overflow':'auto'});
    }, 7000);
}

$(window).on('load', function() {
    startLoader();
});
