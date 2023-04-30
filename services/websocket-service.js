const WS = require('ws');
const persons = require('./person-service').persons;
const removePerson = require('./person-service').remove;
const messages = require('./message-service').messages;

module.exports.webSocket = null;

module.exports.createWebSocket = (server) => {
    this.webSocket = new WS.Server({
        server
    });

    this.webSocket.on('connection', (ws) => {
        ws.on('message', (e) => {
            const data = JSON.parse(e.toString());
            removePerson(data.personId);
            this.sendData(persons, null);
        });

        this.sendData(persons, messages);
    });

    return this.webSocket;
}

module.exports.sendData = (persons = null, messages = null) => {
    const eventData = JSON.stringify({ persons, messages });

    Array.from(this.webSocket.clients)
        .filter(client => client.readyState === WS.OPEN)
        .forEach(client => client.send(eventData));
    console.log('sended')
}

function send() {
    const eventData = JSON.stringify({ method, persons, messages });

    Array.from(this.webSocket.clients)
        .filter(client => client.readyState === WS.OPEN)
        .forEach(client => client.send(eventData));
}