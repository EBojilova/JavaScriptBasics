"use strict";
var input = [
    {
        'name' : 'Пешо',
        'score': 91
    },
    {
        'name' : 'Лилия',
        'score': 290
    },
    {
        'name' : 'Алекс',
        'score': 343
    },
    {
        'name' : 'Габриела',
        'score': 400
    },
    {
        'name' : 'Жичка',
        'score': 70
    }
];

//add 10% to every score
// print if score is more then 100
var havePassedStudents=[];
for (var i = 0; i < input.length; i++) {
    input[i].score += input[i].score * 10 / 100;
    if (input[i].score > 100) {
        input[i].hasPassed = "true";
        havePassedStudents.push(input[i]);
    }
}

//sort by array by keyname
havePassedStudents.sort(function(a, b) {
    var nameA = a.name.toLowerCase(), nameB = b.name.toLowerCase()
    if (nameA < nameB) //sort string ascending
    {
        return -1
    }
    if (nameA > nameB) {
        return 1
    }
    return 0; //default return value (no sorting)
});

console.log(havePassedStudents);

var inputLoDash = [
    {
        'name' : 'Пешо',
        'score': 91
    },
    {
        'name' : 'Лилия',
        'score': 290
    },
    {
        'name' : 'Алекс',
        'score': 343
    },
    {
        'name' : 'Габриела',
        'score': 400
    },
    {
        'name' : 'Жичка',
        'score': 70
    }
];

_.map(inputLoDash, function(o) {
    return o.score += o.score * 10 / 100;
});
var passedExam = _.filter(inputLoDash, function(o) {
    if (o.score > 100) {
        o.hasPassed = "true";
    }
    return o.hasPassed === "true";
});
console.log(_.orderBy(passedExam, ['name', 'score'], ['asc', 'desc']));