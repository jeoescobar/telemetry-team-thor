const express = require('express');
const engine = require('ejs-mate');
const path = require('path');
const serialport = require('serialport');
const http = require('http');
const socketIo = require('socket.io')
const osutils = require('os-utils');

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

const port = new serialport(
    'COM5',
    {baudRate: 115200}
);

const parser = new serialport.parsers.Readline();
port.pipe(parser);





let tick = 0;
let tick2 = 0;
io.on('connection', client =>{
    
    parser.on('data', (line) =>{
        console.log('Data : ' + line);
        console.log("Primer caracter"+ line.substring(30,38))
        
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
        

    });


    /*
    setInterval(()=>{
        //Evento
        osutils.cpuUsage((cpuPercent) =>{
            client.emit('cpu',{
                name: tick++,
                value: cpuPercent});
        });
        //console.log("Works");
    },1000);
    */
});



// Routing

app.use('/',require('./routes/routes'));



//starting server
server.listen(app.get('port'), ()=>{
    console.log("Server on port ", app.get('port'));

});