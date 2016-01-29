//C:\Users\Elena>cd WebstormProjects
//C:\Users\Elena\WebstormProjects>cd "1. JavaScript-Development-Introduction-Homework"
//C:\Users\Elena\WebstormProjects\1. JavaScript-Development-Introduction-Homework>cd 1.CurrentTime
//C:\Users\Elena\WebstormProjects\1. JavaScript-Development-Introduction-Homework\1.CurrentTime>node time.js
// https://softuni.bg/trainings/resources/video/7247/video-4-january-2015-nikolay-bankin-javascript-basics-january-2016 -from 4th minute onwards

function printCurrentTime() {
    //Mon, 09 Mar 2015 12:25:12 GMT
    //http://www.w3schools.com/jsref/jsref_obj_date.asp
    var date = new Date();
    //var dayOfMonth=date.getDate();
    //var dayOfWeek=date.getDay();
    //var month=date.getMonth();
    //var year=date.getFullYear();
    //var hours = date.getHours();
    //var minutes = date.getMinutes();
    //
    //if (minutes < 10){
    //    console.log(hours + ":" + 0 + minutes);
    //} else {
    //    console.log(hours + ":" + minutes);
    //}

    console.log(date.toUTCString());
}

printCurrentTime();