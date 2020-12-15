@@ -1,22 +1,22 @@
var daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wedneday", "Thursday", "Friday", "Saturday"];
var daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var maleAkanNames = {
    "Sunday": "Kwasi",
    "Monday": "Kwadwo",
    "Tuesday": "Kwabena",
    "Wednesday": "Kwaku",
    "Thurday": "Yaw",
    "Friday": "Kofi",
    "Saturday": "Kwame"
    Sunday: "Kwasi",
    Monday: "Kwadwo",
    Tuesday: "Kwabena",
    Wednesday: "Kwaku",
    Thurday: "Yaw",
    Friday: "Kofi",
    Saturday: "Kwame"
};

var femaleAkanNames = {
    "Sunday": "Akosua",
    "Monday": "Adwoa",
    "Tuesday": "Abenaa",
    "Wednesday": "Akua",
    "Thurday": "Yaa",
    "Friday": "Afua",
    "Saturday": "Ama"
    Sunday: "Akosua",
    Monday: "Adwoa",
    Tuesday: "Abenaa",
    Wednesday: "Akua",
    Thurday: "Yaa",
    Friday: "Afua",
    Saturday: "Ama"
};
// form validation function
function validateForm() {
@@ -129,6 +129,9 @@ function getUserDetails() {
    var mdate = parseInt(document.getElementById("day").value);
    var mmonth = parseInt(document.getElementById("month").value);
    var myear = parseInt(document.getElementById("year").value);
    // var mdate = 12;
    // var mmonth = 12;
    // var myear = 2012;
    var i = 0;

    while (i < gender.length) {
@@ -141,20 +144,23 @@ function getUserDetails() {


    var userDetailsObj = {
        mdate: mdate,
        mmonth: mmonth,
        myear: myear,
        mgender: mgender
        date: mdate,
        month: mmonth,
        year: myear,
        gender: mgender
    }

    return userDetailsObj;

}
// function to get the day of the week
function dayOfWkCal() {
    var userDetailsObj = getUserDetails();
    var day = userDetailsObj.mdate;
    var month = userDetailsObj.mmonth;
    var year = userDetailsObj.myear;
    var day = userDetailsObj.date;
    var month = userDetailsObj.month;
    var year = userDetailsObj.year;

    // alert("dd "+day+" mm "+month +" yyyy "+year);

    var a = Math.floor((14 - month) / 12);
    var y = year - a;
@@ -163,15 +169,17 @@ function dayOfWkCal() {
        Math.floor(year / 400) + Math.floor((31 * m) / 12)) % 7;

    var myDay = daysOfWeek[dayOfWk];
    // console.log(myDay);
    // alert(myDay);
    return myDay;

}
// function to get Akan Names
function getAkanName() {
    var userDetailsObj = getUserDetails();
    var gender = userDetailsObj.mgender;
    var gender = userDetailsObj.gender;

    var dayOfBirth = dayOfWkCal();


    if (gender === "male") {
        for (var akanKey in maleAkanNames) {
@@ -192,8 +200,10 @@ function getAkanName() {
        alert("error");
    }

    // alert(myAkanName)

    document.getElementById("results").innerHTML = "Hey Your Akan name would be " + myAkanName;
    document.getElementById("results").innerHTML = "Hey Your Akan name would be " + myAkanName + " since you were born on " + dayOfBirth;
