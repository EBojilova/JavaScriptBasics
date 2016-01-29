//declare the variables
var arr = [200, 120, 23, 67, 350, 420, 170, 212, 401, 615, -1];
var scoreArr = [];

//push only valid score numbers to a new array [0 < x < 400]
function isValidExamScore(score) {
    return score >= 0 && score <= 400;
}
scoreArr=arr.filter(isValidExamScore);

//scale them downwards -20%
function scoreDown20percents(score) {
    //return scoree*=0.8; vrasta  [18.400000000000002, 53.6, 96, 136, 160, 169.60000000000002, 280]
    return score  -= 20/100 * score;
}
scoreArr=scoreArr.map(scoreDown20percents);

//sort in ascending order
function sortNumber(a,b){
    return a - b;
}
scoreArr.sort(sortNumber);

//print the array
console.log(scoreArr);