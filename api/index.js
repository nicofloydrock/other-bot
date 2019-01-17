var RtmClient = require('../@slack/client').RtmClient;
var CLIENT_EVENTS = require('../@slack/client').CLIENT_EVENTS;


var rtm = new RtmClient('xoxb-306201327650-525937939813-gAHr5SQCpHiF5BE8lVdqzVG2');
rtm.start();


let channel;

rtm.on(CLIENT_EVENTS.RTM.AUTHENTICATED, (rtmStartData) => {
    for (const c of rtmStartData.channels) {
        if (c.is_member && c.name ==='other-bot') { channel = c.id }
    }
    console.log(`Logged in as ${rtmStartData.self.name} of team ${rtmStartData.team.name}`);
  });

  rtm.on(CLIENT_EVENTS.RTM.RTM_CONNECTION_OPENED, function () {
    rtm.sendMessage("Hello!", channel);
  });