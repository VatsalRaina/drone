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

    after(2*1000, function(){
        bot.drone.right(0.15);
    });
    after(2.5*1000,function(){
        bot.drone.front(0.15);
    });
    after(3*1000,function(){
        bot.drone.left(0.30);
    });
    after(3.5*1000,function(){
        bot.drone.back(0.15);
    });

    after(4*1000,function(){
        bot.drone.right(0.15);
    });

    after(4.5*1000,function(){
        bot.drone.land();
    });
    after(5*1000,function(){
        bot.drone.stop();
    })
}

Cylon.start();

