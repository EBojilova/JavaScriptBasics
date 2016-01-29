function Person(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
}

Person.prototype.toString = function toString() {
    return this.firstName + ' ' + this.lastName + '(age ' + this.age + ')';
};

var people = [
    new Person("Scott", "Guthrie", 38),
    new Person("Scott", "Johns", 36),
    new Person("Scott", "Hanselman", 39),
    new Person("Jesse", "Liberty", 57),
    new Person("Jon", "Skeet", 38)
];

function groupBy(argument) {

    var groups = [];

    for (var i in people) {
        var key = 'Group ' + people[i][argument];
        if (typeof(groups[key]) === "undefined") {
            groups[key] = [];
        }
        groups[key].push(people[i].toString());
    }

    return groups;
}
console.log(groupBy('firstName'));
console.log();
console.log(groupBy('lastName'));
console.log();
console.log(groupBy('age'));
