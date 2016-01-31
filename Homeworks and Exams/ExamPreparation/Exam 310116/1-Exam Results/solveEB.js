"use strict";
function solve(input) {
    
    var student, course, examPoints, bonuses;
    var inputLine;
    var coursePoints, grade;
    var courses = [];
    
    for (var i = 0; i < input.length - 1; i++) {
        inputLine = input[i].split(' ')
                            .filter(function(value) {
                                return value !== '';
                            });
        student = inputLine[0].trim();
        course = inputLine[1].trim();
        examPoints = Number(inputLine[2].trim());
        bonuses = Number(inputLine[3].trim());
        
        if (courses[course] === undefined) {
            courses[course] = [];
        }
        
        courses[course].push(examPoints);
        
        if (examPoints < 100) {
            console.log('%s failed at \"%s\"', student, course);
            continue;
        }
        
        coursePoints = examPoints / 4 * 0.8 + bonuses;
        
        if (coursePoints >= 80) {
            grade = 6;
        }
        else {
            grade = coursePoints * 4 / 80 + 2;
        }
        
        coursePoints = Number(coursePoints.toFixed(2));
        grade = grade.toFixed(2);
        
        console.log('%s: Exam - \"%s\"; Points - %s; Grade - %s', student, course, coursePoints, grade);
    }

    // ne biah trimnala tuka i zatova mi davashe 75/100
    var courseNameAveragePoints = input[input.length - 1].trim();
    var averageGrade = Number(average(courses[courseNameAveragePoints]));
    console.log('"%s" average points -> %d', courseNameAveragePoints, averageGrade);
    
    function average(arr) {
        var sum = 0;
        for (var i in arr) {
            sum += arr[i];
        }
        var avg = sum / arr.length;
        //http://stackoverflow.com/questions/3612744/remove-insignificant-trailing-zeros-from-a-number
        // parsvaneto na stringa kam Number ste premahne trailing zeros
        avg = Number(avg.toFixed(2));
        return avg;
    }
}

solve([
          'Pesho C#-Advanced 100 3',
          'Gosho Java-Basics 157 3',
          'Tosho HTML&CSS                  317 12',
          'Minka C#-Advanced 57 15',
          'Stanka C#-Advanced 157 15',
          'Kircho C#-Advanced 300 0',
          'Niki C#-Advanced 400 10',
          'C#-Advanced'
      ]);
