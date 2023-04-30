const moment = require('moment');
const persons = require('../services/person-service').persons;
class Message {
    constructor(personId, text) {
        this.personId = personId;
        this.personName = persons.find(person => person.id === this.personId).name;
        this.text = text;
        this.creationTime = moment().format('DD.MM.YY hh:mm');
    }
}

module.exports = {
    Message
};