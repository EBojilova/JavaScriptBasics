var people = [
    {
        firstname    : 'George',
        lastname     : 'Kolev',
        age          : 32,
        hasSmartphone: false
    },
    {
        firstname    : 'Vasil',
        lastname     : 'Kovachev',
        age          : 40,
        hasSmartphone: true
    },
    {
        firstname    : 'Bay',
        lastname     : 'Ivan',
        age          : 81,
        hasSmartphone: true
    },
    {
        firstname    : 'Baba',
        lastname     : 'Ginka',
        age          : 40,
        hasSmartphone: false
    }
];

function hasSmartphone(o) {
    return o.hasSmartphone;
}

function findYoungestWithSmartphone(persons) {
    persons.sort(function(first, second) {
        return first.age - second.age;
    });
    console.log('The youngest person with smartphone is %s %s', persons[0].firstname, persons[0].lastname);

}

var peopleHaveSmartphone = people.filter(hasSmartphone);

findYoungestWithSmartphone(peopleHaveSmartphone);