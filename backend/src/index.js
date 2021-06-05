const express = require('express');
const engine = require('ejs-mate');
const path = require('path');
const serialport = require('serialport');
const http = require('http');
const socketIo = require('socket.io')
const osutils = require('os-utils');
const splitFunction = require('./split');


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





/*
parser.on('data', (line) =>{
    console.log('Data : ' + line);
    console.log("Primer caracter"+ line.substring(30,38))
})
*/
console.log('ENtra')

let tick = 0;
let tick2 = 0;

objTelemetry = [] ;
objTelemetry.push({
    "TEMP" : 28,
    "VOLTAGE": 8,
    "ALTITUDE": 112.5
})
objTelemetry.push({
    "TEMP" : 20,
    "VOLTAGE": 5,
    "ALTITUDE": 80
})

objTelemetry.push({
    "TEMP" : 25,
    "VOLTAGE": 10,
    "ALTITUDE": 100
})


simulacion = "2098,";

simulacion = [];

var TEAMID,MISSIONTIME,PACKETCOUNT,PACKETTYPE,MODE,SP1RELEASED,SP2RELEASED,ALTITUDE,TEMP,VOLTAGE,GPSTIME,GPSLATITUDE,GPSLONGITUDE,GPSALTITUDE,GPSSATS,SOFTWARESTATE,SP1PACKETCOUNT,SP2PACKETCOUNT,CMDECHO;

cad1 = "4784,14:15:20,1,C,CDM,1,1,123,20,4,123,423,234,2,,3,FFF,5,4,CMDECHO";
cad2 = "4784,14:15:20,1,S1,CDM,1,1,123,20,4,123,423,234,2,,3,FFF,5,4,CMDECHO";
cad3 = "4784,14:15:20,1,S2,CDM,1,1,123,20,4,123,423,234,2,,3,FFF,5,4,CMDECHO";
simulacion.push(cad1);
simulacion.push(cad2);
simulacion.push(cad3);


auxcont = 0;

var sp = new  serialport(
    'COM5',
    {
    baudRate: 115200,
    databits: 8,
    parity: 'none',
    stopBits: 1,
    flowControl: false,
    });


    var datosString;
    var objTelemetry;

    
    //sp.on('open', function() {
        
     //   });
    
        io.on('connection', client =>{


            console.log('open');

        /* LEE el puerto serial 
        sp.on('data', function(data) {
            datos = data;
            
            console.log('' + data);
            datosString = datos.toString('utf8');
            console.log(datosString);
            objTelemetry = splitFunction(datosString);
            console.log(objTelemetry);
            
               if(typeof objTelemetry.CMDECHO !== "undefined"){ 
            client.emit('payloadContainer',{
                name: tick++,
                value: objTelemetry});''
            }
            
        }); */


/*
        setInterval(()=>{
            //Evento
            
    
            client.emit('payloadContainer',{
                name: tick++,
                value: objTelemetry[auxcont]
            });
            auxcont++;
            if(auxcont > 2){auxcont=0;}
    
            console.log("Works " + auxcont);
        },5000);
  
        }); 
*/


setInterval(()=>{
    datosString = simulacion[auxcont];
            
    //console.log('' + data);
    //datosString = datos.toString('utf8');
    console.log(datosString);
    objTelemetry = splitFunction(datosString);
    console.log(objTelemetry);
    
       if(typeof objTelemetry.CMDECHO !== "undefined"){ 
    client.emit('payloadContainer',{
        name: tick++,
        value: objTelemetry});
    }


    auxcont++;
            if(auxcont > 2){auxcont=0;}
        },5000);
  
    }); 




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
    },1000);*/
    
 



// Routing

app.use('/',require('./routes/routes'));



//starting server
server.listen(app.get('port'), ()=>{
    console.log("Server on port ", app.get('port'));

});