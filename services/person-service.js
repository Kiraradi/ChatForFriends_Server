const Person = require('../models/Person').Person;
const websocketService = require('./websocket-service');

module.exports.persons = [];

module.exports.add = (name) => {
    let person = this.persons.find(person => person.name === name);

    if (person) {
        throw Error('Пользователь уже существует.');
    }

    person = new Person(name);
    this.persons.push(person);
    websocketService.sendData(this.persons, null);
    return person;
}

module.exports.remove = (personId) => {
    let removedIndex = this.persons.findIndex(person => person.id === personId);
    
    if (removedIndex === -1) {
        throw Error('Пользователь не найден');
    }

    this.persons.splice(removedIndex, 1);
}