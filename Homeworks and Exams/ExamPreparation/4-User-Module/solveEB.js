function sulsUserModule(args) {

    // level and as second condition by id
    function sortStudentByLevel(student1, student2) {
        if (student1.level !== student2.level) {
            return student1.level < student2.level;
        }
        if (student1.id !== student2.id) {
            return student1.id < student2.id;
        }
    }

    function sortStudentByName(student1, student2) {
        if (student1.firstname !== student2.firstname) {
            return student1.firstname.localeCompare(student2.firstname);
        }
        if (student1.lastname !== student2.lastname) {
            return student1.lastname.localeCompare(student2.lastname);
        }
    }

    function sortTrainerByCourses(trainer1, trainer2) {
        var fCourses = trainer1.courses.length,
            sCourses = trainer2.courses.length;
        if (fCourses !== sCourses) {
            return fCourses - sCourses;
        }
        return trainer1.lecturesPerDay - trainer2.lecturesPerDay;

    }

    function dispatchSort(sortArgs, studentArr, trainerArr) {
        if (sortArgs[0] === 'level') {
            studentArr.sort(sortStudentByLevel);
        }
        else if (sortArgs[0] === 'name') {
            studentArr.sort(sortStudentByName);
        }
        if (sortArgs[1] === 'courses') {
            trainerArr.sort(sortTrainerByCourses);
        }
    }

    function printStudents(arr) {
        var output = [];
        arr.forEach(function(student) {
            var student = {
                id          : student.id,
                firstname   : student.firstname,
                lastname    : student.lastname,
                averageGrade: avg(student.grades)
                .toFixed(2),
                certificate : student.certificate
            };
            output.push(student);
        });

        return output;
    }

    function printTrainers(arr) {
        var output = [];
        arr.forEach(function(trainer) {
            var trainer = {
                id            : trainer.id,
                firstname     : trainer.firstname,
                lastname      : trainer.lastname,
                courses       : trainer.courses,
                lecturesPerDay: trainer.lecturesPerDay
            };
            output.push(trainer);
        });

        return output;
    }

    function avg(arr) {
        var sum = 0;
        arr.forEach(function(el) {
            sum += parseFloat(el);
        });

        return sum / arr.length;
    }

    var sortArguments = args[0].split('^'),
        trainers      = [],
        students      = [];

    for (var i = 1; i < args.length; i++) {
        var currentLine = args[i],
            objLine     = JSON.parse(currentLine);

        if (objLine.role.trim() === 'student') {
            students.push(objLine);
        }
        else if (objLine.role.trim() === 'trainer') {
            trainers.push(objLine);
        }
    }
    dispatchSort(sortArguments, students, trainers);
    var trainerOutput = printTrainers(trainers);
    var studentOutput = printStudents(students);
    var result = {
        'students': studentOutput,
        'trainers': trainerOutput
    };
    console.log(JSON.stringify(result));
}

// ------------------------------------------------------------
// Read the input from the console as array and process it
// Remove all below code before submitting to the judge system!
// ------------------------------------------------------------

var arr = [];
require('readline')
.createInterface({
                     input : process.stdin,
                     output: process.stdout
                 })
.on('line', function(line) {
    arr.push(line);
})
.on('close', function() {
    sulsUserModule(arr);
});