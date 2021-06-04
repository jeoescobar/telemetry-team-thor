const express = require('express');
const engine = require('ejs-mate');
const path = require('path');
//const serialport = require('serialport');
const http = require('http');
const socketIo = require('socket.io')
const osutils = require('os-utils');
const splitFunction = require('./split');
//Serial
var serialport = require("serialport");
var SerialPort = serialport.SerialPort;
/*
require('events').EventEmitter.prototype._maxListeners = 70;
require('events').defaultMaxListeners = 70;
*/ 

const app = express();
app.set('port', 4000);
const server = http.createServer(app);
//const io = socketIo.listen(server);

const io = require('socket.io')(server,{
    transports: ['websocket', 'polling']
});


//settings
//ejs
app.set('views', path.join(__dirname,'views'));
app.engine('ejs', engine);
app.set('view engine','ejs');



//Serialport

/*
serialport.list(function (err, ports) {

    ports.forEach(function(port) {
    console.log(port.comName);
    });
});
*/


var sp = new  serialport(
    'COM5',
    {
    baudRate: 115200,
    databits: 8,
    parity: 'none',
    stopBits: 1,
    flowControl: false,
    });

/*
parser.on('data', (line) =>{
    console.log('Data : ' + line);
    console.log("Primer caracter"+ line.substring(30,38))

})
*/
console.log('ENtra')

let tick = 0;
let tick2 = 0;

var datos;
var datosString;
var objTelemetry;


sp.on('open', function() {
console.log('open');
sp.on('data', function(data) {
    datos = data;
    
    console.log('' + data);
    datosString = datos.toString('utf8');
    console.log(datosString);
    objTelemetry = splitFunction(datosString);
    
});
});

io.on('connection', client =>{
    
    /*
    parser.on('data', (line) =>{
        console.log('Data : ' + line);
        console.log("Primer caracter"+ line.substring(30,38))
        
        if(line.split(",").length == 19)
        {

        var objTelemetry = splitFunction.myFunction(line);
        
        
        console.log("Esta es la telemetria " + objTelemetry);



        client.emit('cpu',{
            name: tick++,
            value: line.substring(0,7)});

        client.emit('temper',{
            name: tick2++,
            value: line.substring(24,28)});

        client.emit('segundo',{
            name: tick2++,
            value: line.substring(9,15)});
            
        client.emit('tercero',{
            name: tick2++,
            value: line.substring(17,23)});
        
        client.emit('ultimo',{
            name: tick2++,
            value: line.substring(30,38)});
        }

    });
    */
    console.log(objTelemetry);

    
        console.log("Entra")
        sp.on('open', function() {
        console.log('open');
        sp.on('data', function(data) {
            datos = data;
            
            console.log('' + data);
            datosString = datos.toString('utf8');
            console.log(datosString);

            //if(datosString.split(",") == 19){
            var objTelemetry = splitFunction(datosString);
            
            console.log(objTelemetry);
            
            client.emit('payloadContainer',{
            name: tick++,
            value: objTelemetry});
            //}
            //else if(datosString.split(",") == 7){
                /*
                var objTelemetry = splitFunction(datosString);
            
                console.log(objTelemetry);
                
                client.emit('payloadContainer',{
                name: tick++,
                value: objTelemetry});
                */
            //}


        });
        });





    



    /*    
    
    setInterval(()=>{
        //Evento
        osutils.cpuUsage((cpuPercent) =>{
            client.emit('cpu',{
                name: tick++,
                value: cpuPercent});
        });

        client.emit('payloadContainer',{
            name: tick++,
            value: {"teamname" : "Team Thor", "temperatura": 35, "voltaje": 10}
        });

        

        console.log("Works");
    },1000);
    */


});  



// Routing

app.use('/',require('./routes/routes'));



//starting server
server.listen(app.get('port'), ()=>{
    console.log("Server on port ", app.get('port'));

});