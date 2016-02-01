function solve(arr) {
    var inputLine, student, course, points, bonus, grade, courses = [], courseForAverage, average = 0;

    courseForAverage = arr[arr.length - 1].trim();
    arr.pop();

    arr.forEach(function(line) {
        inputLine = line.split(' ')
                        .filter(function(value) {
                            return value !== '';
                        });
        student = inputLine[0].trim();
        course = inputLine[1].trim();
        points = Number(inputLine[2].trim());
        bonus = Number(inputLine[3].trim());

        if (!courses[course]) {
            courses[course] = [];
        }
        courses[course].push(points);

        if (points >= 100) {
            points = (points * 20) / 100;
            points += bonus;

            grade = ((points / 80) * 4) + 2;
            if (grade > 6) {
                grade = 6;
            }

            console.log(student + ': Exam - "' + course + '"; Points - ' + Number(points.toFixed(2))
                        .toString() + '; Grade - ' + grade.toFixed(2));
        }
        else {
            console.log(student + ' failed at "' + course + '"');
        }
    });

    courses[courseForAverage].forEach(function(el) {
        average += el;
    });

    average = average / courses[courseForAverage].length;

    console.log('"' + courseForAverage + '" average points -> ' + Number(average.toFixed(2))
                .toString());
}
