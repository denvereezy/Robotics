var socket = io();
$(document).ready(function() {
    socket.on('motion', function(data) {
        $(".motionData").html("<h2>" + data.distance + "</h2>");
    });
    socket.on('color-red', function() {
        $('.motionData').addClass('redMotion');
        $('.motionData').removeClass('greenMotion');
        $('.motionData').removeClass('orangeMotion');
        $('#red').addClass('redShade');
        $('#orange').removeClass('orangeShade');
        $('#logo').removeClass('logo');
        $('#green').removeClass('greenShade');
        $('#x1').removeClass('hiddenx');
        $('#x2').addClass('hiddenx');
        $('#x3').addClass('hiddenx');
    });
    socket.on('color-orange', function() {
        $('.motionData').addClass('orangeMotion');
        $('.motionData').removeClass('greenMotion');
        $('.motionData').removeClass('redMotion');
        $('#orange').addClass('orangeShade');
        $('#red').removeClass('redShade');
        $('#logo').removeClass('logo');
        $('#green').removeClass('greenShade');
        $('#x1').addClass('hiddenx');
        $('#x2').removeClass('hiddenx');
        $('#x3').addClass('hiddenx');
    });
    socket.on('color-green', function() {
        $('.motionData').addClass('greenMotion');
        $('.motionData').removeClass('orangeMotion');
        $('.motionData').removeClass('redMotion');
        $('#green').addClass('greenShade');
        $('#red').removeClass('redShade');
        $('#logo').addClass('logo');
        $('#orange').removeClass('orangeShade');
        $('#x1').addClass('hiddenx');
        $('#x2').addClass('hiddenx');
        $('#x3').removeClass('hiddenx');
    });
});
