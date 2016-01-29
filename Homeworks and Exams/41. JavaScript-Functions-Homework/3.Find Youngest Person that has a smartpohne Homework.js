var people = [
    {firstname: 'George', lastname: 'Kolev', age: 32, hasSmartphone: false},
    {firstname: 'Vasil', lastname: 'Kovachev', age: 40, hasSmartphone: true},
    {firstname: 'Bay', lastname: 'Ivan', age: 81, hasSmartphone: true},
    {firstname: 'Baba', lastname: 'Ginka', age: 40, hasSmartphone: false}];

function findYoungestPerson(array) {
    var output = array.filter(function (value) {
        return value.hasSmartphone;
    }).sort(function (a, b) {
        return a.age - b.age;
    });
    // If we have more than one youngest person with samrtphone.
    output = output.filter(function (value) {
        if (value.age === output[0].age) {
            return true;
        }
        return false
    });

    // If we have only one youngest person with smartphone.
    // return output[0];

    return output;
};

var youngestPersonsWithSmartPhone = findYoungestPerson(people);
youngestPersonsWithSmartPhone.forEach(function (value) {
    console.log('The youngest person is %s %s', value.firstname, value.lastname);
});
