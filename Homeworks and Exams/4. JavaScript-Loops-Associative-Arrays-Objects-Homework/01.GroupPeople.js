"use strict";

function Person(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
}

//function Person(fName, lName, age) {
//    return {
//        firstName: fName,
//        lastName: lName,
//        age: age,
//        toString: function() {
//            return this.firstName + ' ' + this.lastName + '(age ' + this.age + ')';
//        }
//    }
//}

Person.prototype.toString = function toString() {
    return this.firstName + ' ' + this.lastName + '(age ' + this.age + ')';
};

function group(peoples, key) {
    // http://stackoverflow.com/questions/12073119/using-splice0-to-duplicate-arrays
    var groups  = [],
        persons = peoples.slice(0);

    while (persons.length > 0) {

        var person = persons.pop(),
            index;

        switch (key) {
            case "firstname":
                index = "Group " + person.firstName;
                break;
            case "age":
                index = "Group " + person.age;
                break;
            case "lastname":
                index = "Group " + person.lastName;
                break;
            default:
                return persons;
                break;
        }
        // ako e undefined e false i s ! stava na true
        if (!groups[index]) {
            groups[index] = [];
        }

        groups[index].push(person.toString());
    }

    return groups;
}

var persons = [
    new Person("Scott", "Guthrie", 38),
    new Person("Scott", "Johns", 36),
    new Person("Scott", "Hanselman", 39),
    new Person("Jesse", "Liberty", 57),
    new Person("Jon", "Skeet", 38)
];
//var persons = [];
//persons.push(new Person("Scott", "Guthrie", 38));
//persons.push(new Person("Scott", "Johns", 36));
//persons.push(new Person("Scott", "Hanselman", 39));
//persons.push(new Person("Jesse", "Liberty", 57));
//persons.push(new Person("Jon", "Skeet", 38));

console.log(group(persons, 'firstname'));
console.log();
console.log(group(persons, 'age'));
console.log();
console.log(group(persons, 'lastname'));
