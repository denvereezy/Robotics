var http = require('http');
var express =require('express'),
    app = module.exports.app = express(),
    io = require('socket.io'),
    fs = require('fs'),
    five = require('johnny-five'),
    board,ping,led1,led2,led3;


var server =http.createServer(app);
var io = require('socket.io').listen(server);
server.listen(8060);


board = new five.Board();

app.use(express.static('public'));

board.on("ready", function() {

  ping = new five.Ping(7);
  red = new five.Led(11);
  orange = new five.Led(12);
  green = new five.Led(13);
 
 
  console.log("Board is Ready")

         ping.on('change',function(value){
          console.log("DIstance:"+this.in)
         
            var distance ="object" + " " + this.in + " " + "inches away";
            io.emit('motion',{distance:distance})

	if(this.in < 4 ){
            var redlight = this.in < 4; 
            red.on();
            green.off();
            orange.off();
            io.emit('color-red',{redlight:redlight})
            console.log("light is red");
        }

        else if(this.in > 4 && this.in < 11 ){
            var orangeLight = this.in == 11;
            orange.on();
            red.off();
            green.off();
            io.emit('color-orange', {orangeLight:orangeLight})
            console.log("light is orange");
        }

        else if(this.in >= 11.33){
            var greenLight = this.in >= 11.33;
            orange.off();
            red.off();
            green.on();
            io.emit('color-green', {greenLight:greenLight})
            console.log("light is green");
        }
         })
 });

