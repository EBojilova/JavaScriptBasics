// ot https://github.com/naskobogdanov/JavaScript-Basics/blob/master/01.%20JS_Introduction_homework/04.Clock/clock.html
timeNow();

function timeNow() {
    var now = new Date().toTimeString()
                        .replace(/.*(\d{2}:\d{2}:\d{2}).*/, "$1");
    document.getElementById('time').innerHTML = now;
    setTimeout(timeNow, 1000);
}
