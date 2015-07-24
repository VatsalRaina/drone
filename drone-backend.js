var Cylon = require('cylon');
var ws = require('nodejs-websocket');

Cylon.robot()
    .connection("ardrone", {
        adaptor: 'ardrone',
        port: '192.168.1.1'
    })
    .device("drone", {
        driver: "ardrone",
        connection: "ardrone"
    })
    .device("nav", {
        driver: "ardrone-nav",
        connection: "ardrone"
    })
    .on("ready", fly);

var bot;

// Fly the bot
function fly(robot) {

    bot = robot;

    //bot.drone.config('general:navdata_demo', 'TRUE');
    //
    //bot.nav.on("navdata", function(data) {
    //
    //});
    //
    //
    //bot.nav.on("batteryChange", function(data) {
    //    console.log("Battery level:", data);
    //});

    bot.drone.disableEmergency();
    bot.drone.ftrim();
    bot.drone.takeoff();

    after(5*1000, function(){
        bot.drone.right(0.15);
    });
    after(5.5*1000,function(){
        bot.drone.front(0.15);
    });
    after(6*1000,function(){
        bot.drone.left(0.30);
    });
    after(6.5*1000,function(){
        bot.drone.back(0.15);
    });

    after(7*1000,function(){
        bot.drone.right(0.15);
    });

    after(7.5*1000,function(){
        bot.drone.land();
    });
    after(8*1000,function(){
        bot.drone.stop();
    })
}

Cylon.start();

