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
        $('#green').removeClass('greenShade');
    });
    socket.on('color-orange', function() {
        $('.motionData').addClass('orangeMotion');
        $('.motionData').removeClass('greenMotion');
        $('.motionData').removeClass('redMotion');
        $('#orange').addClass('orangeShade');
        $('#red').removeClass('redShade');
        $('#green').removeClass('greenShade');
    });
    socket.on('color-green', function() {
        $('.motionData').addClass('greenMotion');
        $('.motionData').removeClass('orangeMotion');
        $('.motionData').removeClass('redMotion');
        $('#green').addClass('greenShade');
        $('#red').removeClass('redShade');
        $('#orange').removeClass('orangeShade');
    });
});
