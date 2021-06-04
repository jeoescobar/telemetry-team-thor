function myFunction2() {

    var str = "TEAM_ID,MISSION_TIME,PACKET_COUNT,PACKET_TYPE,SP_ALTITUDE,SP_TEMP,SP_ROTATION_RATE";
    
    var res = str.split(",");
    
    var TEAMID,MISSIONTIME,PACKETCOUNT,PACKETTYPE,SPALTITUDE,SPTEMP,SPROTATIONRATE;
    
        for (let i = 0; i < res.length; i++) {
            res[i]= res[i].replace("<","");
          res[i]= res[i].replace(">","");
          
          TEAMID = res[0];
          MISSIONTIME = res[1];
          PACKETCOUNT = res[2];
          PACKETTYPE = res[3];
          SPALTITUDE = res[4];
          SPTEMP = res[5];
          SPROTATIONRATE = res[6];

      }
      return{
        TEAMID,
        MISSIONTIME,
        PACKETCOUNT,
        PACKETTYPE,
        SPALTITUDE,
        SPTEMP,
        SPROTATIONRATE
      }
  }

  export {myFunction2};

