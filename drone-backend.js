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
    bot.drone.takeoff(0.3);
    after(8*1000, function(){
        bot.drone.front(0.3);
    });
    after(13*1000,function(){
        bot.drone.land(0.3);
    });
    after(15*1000,function(){
        bot.drone.takeoff(0.3);
    });
    after(19*1000,function(){
        bot.drone.back(0.3);
    });

    after(24*1000,function(){
        bot.drone.land(0.3);
    });

    after(28*1000,function(){
        bot.drone.stop(0.3);
    });
}

Cylon.start();

