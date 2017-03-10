// simple bot framework app
var restify = require('restify'); 
var builder = require('botbuilder'); 

// Setup Restify Server
var server = restify.createServer();
server.listen(process.env.PORT || 3000, function() 
{
   console.log('%s listening to %s', server.name, server.url); 
});

// Create chat bot
var connector = new builder.ChatConnector
({ appId: '0b4d6f59-3678-423e-a4f9-5be37bd51e41', appPassword: 'hKSudPVwHxhOOzNsif4kgiw' }); 
var bot = new builder.UniversalBot(connector);
server.post('/API/Messages', connector.listen());

// Create bot dialogs
bot.dialog('/', function (session) {
    session.send("Hello World");
});