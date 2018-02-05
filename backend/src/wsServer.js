var WebSocketServer = require('websocket').server;

var wsServer = new WebSocketServer();
var connections = {};

wsServer.on('request', function(request) {
    var clientId = request.resource.substring(1);
    console.log('Connection requested by client ' + clientId);

    if (clientId.length < 1) {
        request.reject(401, 'No connection ID specified');
        console.log('Rejected client ' + clientId);
    } else {
        var connection = request.accept(null, request.origin);
        connection.clientId = clientId;
        connections[clientId] = connection;
        console.log('Connected client ' + clientId);
    }
});

wsServer.on('close', function (connection, closeReason, description) {
    if (connections.hasOwnProperty(connection.clientId)) {
        delete connections[connection.clientId];
    }
    console.log('Disconnected client ' + connection.clientId + ': ' + closeReason + ' ' + description);
});

function sendMessage(clientId, message) {
    if (connections.hasOwnProperty(clientId) && connections[clientId].connected) {
        var messageString = JSON.stringify(message);

        console.log('Send message to client ' + clientId + ': ' + messageString);
        connections[clientId].send(messageString);
    }
}

module.exports = {
    wsServer: wsServer,
    sendMessage: sendMessage
};