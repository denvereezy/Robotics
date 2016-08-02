var http = require('http');
var express = require('express'),
    app = module.exports.app = express(),
    io = require('socket.io'),
    five = require('johnny-five'),
    board, ping;

board = new five.Board();
app.use(express.static('public'));

board.on("ready", function() {

    ping = new five.Ping(7);

    console.log("Board is Ready");

    ping.on('change', function(value) {
        console.log("Distance: " + this.in);

        var distance = "Object " + this.in + " inches away";
        io.emit('motion', {
            distance: distance
        });

        if (this.in < 4) {
            var redlight = this.in < 4;
            io.emit('color-red', {
                redlight: redlight
            });
            console.log("light is red");

        } else if (this.in > 4 && this.in < 11) {
            var orangeLight = this.in == 11;
            io.emit('color-orange', {
                orangeLight: orangeLight
            });
            console.log("light is orange");

        } else if (this.in >= 11.33) {
            var greenLight = this.in >= 11.33;
            io.emit('color-green', {
                greenLight: greenLight
            });
            console.log("light is green");
        };
    });
});

var server = http.createServer(app);
var io = require('socket.io').listen(server);
var port = process.env.port || 8060;
server.listen(port);
console.log('App running on port ', port);
