//Serial
var serialport = require("serialport");
var SerialPort = serialport.SerialPort;


var sp = new  serialport(
    'COM13',
    {
    baudRate: 115200,
    databits: 8,
    parity: 'none',
    stopBits: 1,
    flowControl: false,
    });
//const parser = new serialport.parsers.Readline();
//port.pipe(parser);
    var datos;
    var datosString;

sp.on('open', function() {
	console.log('open');
	sp.on('data', function(data) {
		datos = data;
		
		console.log('' + data);
		datosString = datos.toString('utf8');
		console.log(datosString);
	});
});