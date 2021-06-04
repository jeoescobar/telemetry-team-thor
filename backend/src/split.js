function myFunction(str) {
    /*
    var str = "<TEAM_ID>,<MISSION_TIME>,<PACKET_COUNT>,<PACKET_TYPE>,<MODE>,<SP1_RELEASED>,<SP2_RELEASED>,<ALTITUDE>,<TEMP>,<VOLTAGE>,<GPS_TIME>,<GPS_LATITUDE>,<GPS_LONGITUDE>,<GPS_ALTITUDE>,<GPS_SATS>,<SOFTWARE_STATE>,<SP1_PACKET_COUNT>,<SP2_PACKET_COUNT>,<CMD_ECHO>";
    */
   
    var res = str.split(",");
    
    var TEAMID,MISSIONTIME,PACKETCOUNT,PACKETTYPE,MODE,SP1RELEASED,SP2RELEASED,ALTITUDE,TEMP,VOLTAGE,GPSTIME,GPSLATITUDE,GPSLONGITUDE,GPSALTITUDE,GPSSATS,SOFTWARESTATE,SP1PACKETCOUNT,SP2PACKETCOUNT,CMDECHO;
    
        for (let i = 0; i < res.length; i++) {
            res[i]= res[i].replace("<","");
          res[i]= res[i].replace(">","");
          
          TEAMID = res[0];
          MISSIONTIME = res[1];
          PACKETCOUNT = res[2];
          PACKETTYPE = res[3];
          MODE = res[4];
          SP1RELEASED = res[5];
          SP2RELEASED = res[6];
          ALTITUDE = res[7];
          TEMP = res[8];
          VOLTAGE = res[9];
          GPSTIME = res[10];
          GPSLATITUDE = res[11];
          GPSLONGITUDE = res[12];
          GPSALTITUDE = res[13];
          GPSSATS = res[14];
          SOFTWARESTATE = res[15];
          SP1PACKETCOUNT = res[16];
          SP2PACKETCOUNT = res[17];
          CMDECHO = res[18];
      }
      return{
          TEAMID,
          MISSIONTIME,
          PACKETCOUNT,
          PACKETTYPE,
          MODE,
          SP1RELEASED ,
          SP2RELEASED,
          ALTITUDE,
          TEMP,
          VOLTAGE,
          GPSTIME,
          GPSLATITUDE,
          GPSLONGITUDE,
          GPSALTITUDE,
          GPSSATS,
          SOFTWARESTATE,
          SP1PACKETCOUNT,
          SP2PACKETCOUNT,
          CMDECHO
      }
      //document.getElementById("demo").innerHTML = res;
      /**
      console.log(res);
      console.log(TEAMID);
      console.log(MISSIONTIME);
      console.log(PACKETCOUNT);
      console.log(PACKETTYPE);
      console.log(MODE);
      console.log(SP1RELEASED);
      console.log(SP2RELEASED);
      console.log(ALTITUDE);
      console.log(TEMP);
      console.log(VOLTAGE);
      console.log(GPSTIME);
      console.log(GPSLATITUDE);
      console.log(GPSLONGITUDE);
      console.log(GPSALTITUDE);
      console.log(GPSSATS);
      console.log(SOFTWARESTATE);
      console.log(SP1PACKETCOUNT);
      console.log(SP2PACKETCOUNT);
      console.log(CMDECHO);
       */
  }

  module.exports = myFunction;