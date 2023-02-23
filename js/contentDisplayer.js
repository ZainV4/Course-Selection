/**@author Zain Alsudani*/

// getting data(json) by using import
import data from '/json/courseContent.json' assert { type: 'json'};

// variable for the course code tag
let theCourseCode = document.getElementsByClassName("CourseCode")[0];

// variable for the course name tag
let theCourseName = document.getElementsByClassName("CourseName")[0];

// variable for the course discription tag
let theCourseDiscription = document.getElementsByClassName("CourseDiscription")[0];

// variable for the prev tag
let prev = document.getElementById("prev");

// variable for the next tag
let next = document.getElementById("next");

// variable for the toggle tag
let theSwitch = document.getElementById("switch");

// increases by clicking of next btn and decreases by clicking on prev
let increaseCounter = 0;

let switched = false;




theSwitch.addEventListener("click", function() {
    if (switched == true) {
        switched = false;
    } else if (switched == false) {
        switched = true
    }
    console.log(switched);
    console.log("lol");
});

/** */
next.addEventListener("click", increaseFunc);
function increaseFunc() {
    increaseCounter++;

    if(Math.abs(increaseCounter) > 15) {
        increaseCounter=0;
    }

    theCourseCode.innerHTML = data.grade9[increaseCounter].courseCode;
    theCourseName.innerHTML = data.grade9[increaseCounter].courseName;
    theCourseDiscription.innerHTML = data.grade9[increaseCounter].courseDiscription;
}

/** */
prev.addEventListener("click", decreasesFunc);
function decreasesFunc() {
    increaseCounter--;

    if(Math.abs(increaseCounter) == 0) {
        increaseCounter=14;
    }

    theCourseCode.innerHTML = data.grade9[increaseCounter].courseCode;
    theCourseName.innerHTML = data.grade9[increaseCounter].courseName;
    theCourseDiscription.innerHTML = data.grade9[increaseCounter].courseDiscription;
}





//let html = document.getElementById("myP").innerHTML;
console.log(data.grade9[1].courseName);