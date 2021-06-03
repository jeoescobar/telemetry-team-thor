var mqtt = require('mqtt')

const passwordC='Wiasfosa232!'
const usernameC='2092'
var i = 1;
var client  = mqtt.connect('mqtt://cansat.info:1883', {
                              username: usernameC, 
                              password: passwordC
              });
//setup the callbacks
client.on('connect', function () {
    console.log('Connected');
});

client.on('error', function (error) {
    console.log(error);
});

client.on('message', function (topic, message) {
    //Called each time a message is received
    console.log('Received message:', topic, message.toString());
});

// subscribe to topic 'my/test/topic'
client.subscribe('teams/2092');

// publish message 'Hello' to topic 'my/test/topic'
client.publish('teams/2092', '2092,23:52:01,81,C,F,R,N,422,25.6,8.8,23:52:01,37.2314,80.4264,422.6,7,RELEASE_1,73,0,CX-ON');
client.publish('teams/2092', '2092,23:52:02,83,C,F,R,N,415,15.7,8.8,23:52:02,37.2315,80.6265,418.2,7,RELEASE_1,74,0,CX-ON');
client.publish('teams/2092', '2092,23:52:01,81,C,F,R,N,422,25.6,8.8,23:52:01,37.2314,80.4264,422.6,7,RELEASE_1,73,0,CX-ON');
client.publish('teams/2092', '2092,23:52:01,82,SP1,272.6,29.6,0,,,,,,,,,,,,');
