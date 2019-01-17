
const { RTMClient } = require('@slack/client');
// An access token (from your Slack app or custom integration - usually xoxb)
const token = 'xoxb-306201327650-525937939813-gAHr5SQCpHiF5BE8lVdqzVG2' ;// process.env.SLACK_TOKEN;
const CLIENT_EVENTS = require("@slack/client").CLIENT_EVENTS;
// The client is initialized and then started to get an active connection to the platform
const rtm = new RTMClient(token);
rtm.start();



let channel;

rtm.on('authenticated', (connectionData) => {
    console.log('RTMClient authenticated');
  });
  
  rtm.on('message', (event) => {
    console.log(`Incoming message: ${event.ts}`);
  })
