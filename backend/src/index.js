const express = require('express');
const engine = require('ejs-mate');
const path = require('path');
const serialport = require('serialport');
const http = require('http');
const socketIo = require('socket.io')
const osutils = require('os-utils');
const splitFunction = require('./split');
const splitSPS = require('./split2');


var fs = require('fs');
var json2csv = require('json2csv').parse;
//var csv = require('fast-csv');
//var ws = fs.createWriteStream('my.csv',{flag: 'a'});

var newLine = '\r\n';
var i = 1;


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
cad2 = "4784,14:15:20,1,S1,123,20,4";
cad3 = "4784,14:15:20,1,S2,123,20,4";
cad4 = "4784,14:15:20,2,C,CDM,1,1,100,25,3,130,400,234,2,,3,FFF,5,4,CMDECHO";
cad5 = "4784,14:15:20,2,S1,123,32,10";
cad6 = "4784,14:15:20,1,S2,123,30,4";
cad7 = "4784,14:15:20,3,C,CDM,1,1,80,18,5,120,300,234,2,,3,FFF,5,4,CMDECHO";
cad8 = "4784,14:15:20,3,S1,123,18,9";
cad9 = "4784,14:15:20,1,S2,111,23,1";
//var str = "TEAM_ID,MISSION_TIME,PACKET_COUNT,PACKET_TYPE,SP_ALTITUDE,SP_TEMP,SP_ROTATION_RATE";



simulacion.push(cad1);
simulacion.push(cad2);
simulacion.push(cad3);
simulacion.push(cad4);
simulacion.push(cad5);
simulacion.push(cad6);
simulacion.push(cad7);
simulacion.push(cad8);
simulacion.push(cad9);


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

        // LEE el puerto serial 
        sp.on('data', function(data) {
            datos = data;
            
            console.log('' + data);
            datosString = datos.toString('utf8');
            console.log(datosString);
            checkVal = datosString.split(",");
            //objTelemetry = splitFunction(datosString);
            console.log(objTelemetry);


            /*
               if(typeof objTelemetry.CMDECHO !== "undefined"){ 
            client.emit('payloadContainer',{
                name: tick++,
                value: objTelemetry});''
            }
*/
            /***** */
            if(checkVal[3] == 'C'){

                objTelemetry = splitFunction(datosString);
                console.log(objTelemetry);
                console.log(objTelemetry.TEAMID);
            
               if(typeof objTelemetry.CMDECHO !== "undefined"){ 
                client.emit('payloadContainer',{
                name: tick++,
                value: objTelemetry});
                }
        
                /****** CSV */
                
                var fields = ['TEAM_ID','MISSION_TIME','PACKETCOUNT','PACKETTYPE','MODE','SP1RELEASED','SP2RELEASED','ALTITUDE','TEMP','VOLTAGE','GPSTIME','GPSLATITUDE','GPSLONGITUDE','GPSALTITUDE','GPSSATS','SOFTWARESTATE','SP1PACKETCOUNT','SP2PACKETCOUNT','CMDECHO'];
                  
                  var toCSV = [
                    objTelemetry.TEAMID,
                    objTelemetry.MISSIONTIME,
                    objTelemetry.PACKETCOUNT,
                    objTelemetry.PACKETTYPE,
                    objTelemetry.MODE,
                    objTelemetry.SP1RELEASED,
                    objTelemetry.SP2RELEASED,
                    objTelemetry.ALTITUDE,
                    objTelemetry.TEMP,
                    objTelemetry.VOLTAGE,
                    objTelemetry.GPSTIME,
                    objTelemetry.GPSLATITUDE,
                    objTelemetry.GPSLONGITUDE,
                    objTelemetry.GPSALTITUDE,
                    objTelemetry.GPSSATS,
                    objTelemetry.SOFTWARESTATE,
                    objTelemetry.SP1PACKETCOUNT,
                    objTelemetry.SP2PACKETCOUNT,
                    objTelemetry.CMDECHO
        
                      ];
        
                  fs.stat('Flight_2092_C.csv', function (err, stat) {
                      if (err == null) {
                        console.log('File exists, writing new data...');
                       // fs.truncate('team2092.csv', 0, function(){console.log('clear done... ');})
                        //write the actual data and end with newline
                        var csv = toCSV + newLine;
        
                        fs.appendFile('Flight_2092_C.csv', csv, function (err) {
                          if (err) throw err;
                          console.log('The "data to append" was appended to file!');
                        });
                      } else {
                        //write the headers and newline
                        console.log('New file, just writing headers');
                        fields = fields + newLine;
        
                        fs.writeFile('Flight_2092_C.csv', fields, function (err) {
                          if (err) throw err;
                          console.log('file saved');
                        });
                      }
                    });
                  i++;
                    
                /****** CSV */
            }
            else if(checkVal[3] == 'S1'){
                objTelemetry = splitSPS(datosString);
                console.log(objTelemetry);
                console.log(objTelemetry.TEAMID);
        
        
                if(typeof objTelemetry.SPROTATIONRATE !== "undefined"){ 
                    client.emit('payloadSP1',{
                    name: tick++,
                    value: objTelemetry});
                    }
        
                var fields = ['TEAM_ID','MISSION_TIME','PACKETCOUNT','PACKETTYPE','SP_ALTITUDE','SP_TEMP','SP_ROTATION_RATE'];
                  var toCSV = [
                      objTelemetry.TEAMID,
                      objTelemetry.MISSIONTIME,
                      objTelemetry.PACKETCOUNT,
                      objTelemetry.PACKETTYPE,
                      objTelemetry.SPALTITUDE,
                      objTelemetry.SPTEMP,
                      objTelemetry.SPROTATIONRATE
                      ];
        
        
                            fs.stat('Flight_2092_S1.csv', function (err, stat) {
                      if (err == null) {
                        console.log('File exists, writing new data...');
                       // fs.truncate('team2092.csv', 0, function(){console.log('clear done... ');})
                        //write the actual data and end with newline
                        var csv = toCSV + newLine;
        
                        fs.appendFile('Flight_2092_S1.csv', csv, function (err) {
                          if (err) throw err;
                          console.log('The "data to append" was appended to file!');
                        });
                      } else {
                        //write the headers and newline
                        console.log('New file, just writing headers');
                        fields = fields + newLine;
        
                        fs.writeFile('Flight_2092_S1.csv', fields, function (err) {
                          if (err) throw err;
                          console.log('file saved');
                        });
                      }
                    });
                  i++;
            }
            else if(checkVal[3] == 'S2'){
                objTelemetry = splitSPS(datosString);
                console.log(objTelemetry);
                console.log(objTelemetry.TEAMID);
        
                if(typeof objTelemetry.SPROTATIONRATE !== "undefined"){ 
                    client.emit('payloadSP2',{
                    name: tick++,
                    value: objTelemetry});
                    }
        
                var fields = ['TEAM_ID','MISSION_TIME','PACKETCOUNT','PACKETTYPE','SP_ALTITUDE','SP_TEMP','SP_ROTATION_RATE'];
                  var toCSV = [
                      objTelemetry.TEAMID,
                      objTelemetry.MISSIONTIME,
                      objTelemetry.PACKETCOUNT,
                      objTelemetry.PACKETTYPE,
                      objTelemetry.SPALTITUDE,
                      objTelemetry.SPTEMP,
                      objTelemetry.SPROTATIONRATE
                      ];
        
        
                            fs.stat('Flight_2092_S2.csv', function (err, stat) {
                      if (err == null) {
                        console.log('File exists, writing new data...');
                       // fs.truncate('team2092.csv', 0, function(){console.log('clear done... ');})
                        //write the actual data and end with newline
                        var csv = toCSV + newLine;
        
                        fs.appendFile('Flight_2092_S2.csv', csv, function (err) {
                          if (err) throw err;
                          console.log('The "data to append" was appended to file!');
                        });
                      } else {
                        //write the headers and newline
                        console.log('New file, just writing headers');
                        fields = fields + newLine;
        
                        fs.writeFile('Flight_2092_S2.csv', fields, function (err) {
                          if (err) throw err;
                          console.log('file saved');
                        });
                      }
                    });
                  i++;
        
            }



            /*** */
            
        }); 


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