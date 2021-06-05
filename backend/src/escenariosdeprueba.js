setInterval(()=>{
    datosString = simulacion[auxcont];
            
    //console.log('' + data);
    //datosString = datos.toString('utf8');
    console.log(datosString);
    checkVal = datosString.split(",");
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




    auxcont++;
            if(auxcont > 8){auxcont=0;}
        },5000); */