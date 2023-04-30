const { v4: uuidv4 } = require('uuid');

class Person {
    constructor(name) {
        this.id = uuidv4();
        this.name = name;
    };
}

module.exports = {
    Person
};