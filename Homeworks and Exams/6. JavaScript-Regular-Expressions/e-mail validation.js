var pattern = /^[\w-]{4,12}@[\w\-]{2,}\.[a-zA-Z]+$/;
var emails = [
    "dow_jones@gmail.com",
    "spam@nakov",
    "JohnSkeet69@1337.org",
    "ayy lmao@abv.bg"
];
for (var index in emails) {
    console.log(pattern.test(emails[index]));
}
