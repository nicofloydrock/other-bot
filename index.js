
const { RTMClient } = require('@slack/client');
// An access token (from your Slack app or custom integration - usually xoxb)
const token = 'xoxb-306201327650-547040171525-y41xbycTPUep3O4K2DdjOOGY';// process.env.SLACK_TOKEN;
const CLIENT_EVENTS = require("@slack/client").CLIENT_EVENTS;
// The client is initialized and then started to get an active connection to the platform
const rtm = new RTMClient(token);
rtm.start();



let channel;

rtm.on('authenticated', (connectionData) => {
    console.log('RTMClient authenticated');
  });
  
rtm.on('mensaje ql', (event) => {
    console.log(`Incoming message: ${event.ts}`);
  });


 /*  rtm.on(RTM_EVENTS.MESSAGE, function(message) {
    if (message.channel === channel) {
    if (message.text !== null) {
            var pieces = message.text.split(' ');
             
            if (pieces.length > 1) {
                if (pieces[0] === bot) {
                    var response = '<@' + message.user + '>';
                     
                    switch (pieces[1].toLowerCase()) {
                        case "jump":
                            response += '"Kris Kross will make you jump jump"';
                            break;
                        case "help":
                            response += ', currently I support the following commands: jump';
                            break;
                        default:
                            response += ', sorry I do not understand the command "' + pieces[1] + '". For a list of supported commands, type: ' + bot + ' help';
                            break;
                    }
                     
                    rtm.sendMessage(response, message.channel);
                }
            }
        }
    }
}); */
