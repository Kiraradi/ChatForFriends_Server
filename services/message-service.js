const Message = require('../models/Message').Message;
const websocketService = require('./websocket-service');

module.exports.messages = [];

module.exports.add = (personId, text) => {
    const message = new Message(personId, text);
    this.messages.push(message);
    websocketService.sendData(null, this.messages);
    // return message;
}