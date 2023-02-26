/**@author Zain Alsudani*/

// getting data(json) by using import
import data from '/json/courseContent.json' assert { type: 'json'};

// variable for the course code tag (grade 9)
let theCourseCode9 = document.getElementsByClassName("CourseCode9")[0];

// variable for the course name tag (grade 9)
let theCourseName9 = document.getElementsByClassName("CourseName9")[0];

// variable for the course discription tag (grade 9)
let theCourseDiscription9 = document.getElementsByClassName("CourseDiscription9")[0];

// variable for the course code tag (grade 10)
let theCourseCode10 = document.getElementsByClassName("CourseCode10")[0];

// variable for the course name tag (grade 10)
let theCourseName10 = document.getElementsByClassName("CourseName10")[0];

// variable for the course discription tag (grade 10)
let theCourseDiscription10 = document.getElementsByClassName("CourseDiscription10")[0];

// variable for the prev tag
let prev = document.getElementById("prev");

// variable for the next tag
let next = document.getElementById("next");

// variable for the toggle tag
let theSwitch = document.getElementById("switch");
// variable which shows the number of the grade
let grade = document.getElementById("grade");

// variable for grade 9 div
let grade9Box = document.getElementById("grade9Div");
// variable for grade 10 div
let grade10Box = document.getElementById("grade10Div");

// increases by clicking of next btn and decreases by clicking on prev (counter 9)
let counter9 = 0;

// increases by clicking of next btn and decreases by clicking on prev (grade 10)
let counter10 = 0;





theSwitch.addEventListener("click", function() {
    if(grade.innerHTML == 9) {
        grade.innerHTML = 10
        grade10Box.style.display = "block";
        grade9Box.style.display = "none";
    } else if (grade.innerHTML == 10) {
        grade.innerHTML = 9
        grade9Box.style.display = "block";
        grade10Box.style.display = "none";
    }
});

// grade 9 functions
prev.addEventListener("click", () => {
    counter9--;
    if(Math.abs(counter9) < 0) {
        counter9=24;
    }
    theCourseCode9.innerHTML = data.grade9[Math.abs(counter9)].courseCode;
    theCourseName9.innerHTML = data.grade9[Math.abs(counter9)].courseName;
    theCourseDiscription9.innerHTML = data.grade9[Math.abs(counter9)].courseDiscription;
});
next.addEventListener("click", () => {
    counter9++;
    if(Math.abs(counter9) > 14) {
        counter9=0;
    }
    console.log(counter9);
    theCourseCode9.innerHTML = data.grade9[Math.abs(counter9)].courseCode;
    theCourseName9.innerHTML = data.grade9[Math.abs(counter9)].courseName;
    theCourseDiscription9.innerHTML = data.grade9[Math.abs(counter9)].courseDiscription;
});


// grade 10 functions
prev.addEventListener("click", () => {
    counter10--;
    if(Math.abs(counter10) < 0) {
        counter9=24;
    }
    console.log(counter9);
    theCourseCode10.innerHTML = data.grade10[Math.abs(counter10)].courseCode;
    theCourseName10.innerHTML = data.grade10[Math.abs(counter10)].courseName;
    theCourseDiscription10.innerHTML = data.grade10[Math.abs(counter10)].courseDiscription;
});
next.addEventListener("click", () => {
    counter10++;
    if(Math.abs(counter10) > 14) {
        counter10=0;
    }
    theCourseCode10.innerHTML = data.grade10[Math.abs(counter10)].courseCode;
    theCourseName10.innerHTML = data.grade10[Math.abs(counter10)].courseName;
    theCourseDiscription10.innerHTML = data.grade10[Math.abs(counter10)].courseDiscription;
});

