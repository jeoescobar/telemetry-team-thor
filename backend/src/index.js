const express = require('express');
const engine = require('ejs-mate');
const path = require('path');
const serialport = require('serialport');

const app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);
//settings
//ejs
app.set('views', path.join(__dirname,'views'));
app.engine('ejs', engine);
app.set('view engine','ejs');

app.set('port', 3000);

//Serialport


serialport.list(function (err, ports) {

    ports.forEach(function(port) {
    console.log(port.comName);
    });
});


const port = new serialport(
    'COM1',
    {baudRate: 9600}
);

const parser = new serialport.parsers.Readline();
port.pipe(parser);

parser.on('data', (line) =>{
    console.log('Data : ' + line);
});



// Routing

app.use('/',require('./routes/routes'));



//starting server
app.listen(app.get('port'), ()=>{
    console.log("Server on port ", app.get('port'));

});