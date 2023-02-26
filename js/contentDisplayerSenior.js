/**@author Zain Alsudani*/

// getting data(json) by using import
import data from '/json/courseContent.json' assert { type: 'json'};

// variable for the course code tag (grade 11)
let theCourseCode11 = document.getElementsByClassName("CourseCode11")[0];

// variable for the course name tag (grade 11)
let theCourseName11 = document.getElementsByClassName("CourseName11")[0];

// variable for the course discription tag (grade 11)
let theCourseDiscription11 = document.getElementsByClassName("CourseDiscription11")[0];

// variable for the course code tag (grade 12)
let theCourseCode12 = document.getElementsByClassName("CourseCode12")[0];

// variable for the course name tag (grade 12)
let theCourseName12 = document.getElementsByClassName("CourseName12")[0];

// variable for the course discription tag (grade 12)
let theCourseDiscription12 = document.getElementsByClassName("CourseDiscription12")[0];

// variable for the prev tag
let prev1 = document.getElementById("prev-1");

// variable for the next tag
let next1 = document.getElementById("next-1");

// variable for the toggle tag
let theSwitch2 = document.getElementById("switch-2");
// variable which shows the number of the grade
let gradeS = document.getElementById("gradeS");

// variable for grade 11 div
let grade11Box = document.getElementById("grade11Div");
// variable for grade 12 div
let grade12Box = document.getElementById("grade12Div");

// increases by clicking of next btn and decreases by clicking on prev (counter 11)
let counter11 = 0;

// increases by clicking of next btn and decreases by clicking on prev (grade 12)
let counter12 = 0;





theSwitch2.addEventListener("click", function() {
    if(gradeS.innerHTML == 11) {
        gradeS.innerHTML = 12
        grade12Box.style.display = "block";
        grade11Box.style.display = "none";
    } else if (gradeS.innerHTML == 12) {
        gradeS.innerHTML = 11
        grade11Box.style.display = "block";
        grade12Box.style.display = "none";
    }
});

// grade 11 functions
prev1.addEventListener("click", () => {
    counter11--;
    if(Math.abs(counter11) < 0) {
        counter11=27;
    }
    console.log(counter11);
    theCourseCode11.innerHTML = data.grade11[Math.abs(counter11)].courseCode;
    theCourseName11.innerHTML = data.grade11[Math.abs(counter11)].couresName;
    theCourseDiscription11.innerHTML = data.grade11[Math.abs(counter11)].courseDiscription;
});
next1.addEventListener("click", () => {
    counter11++;
    if(Math.abs(counter11) > 27) {
        counter11=0;
    }
    theCourseCode11.innerHTML = data.grade11[Math.abs(counter11)].courseCode;
    theCourseName11.innerHTML = data.grade11[Math.abs(counter11)].couresName;
    theCourseDiscription11.innerHTML = data.grade11[Math.abs(counter11)].courseDiscription;
});


// grade 12 functions
prev1.addEventListener("click", () => {
    counter12--;
    if(Math.abs(counter12) < 0) {
        counter12=24;
    }
    console.log(counter12);
    theCourseCode12.innerHTML = data.grade12[Math.abs(counter12)].courseCode;
    theCourseName12.innerHTML = data.grade12[Math.abs(counter12)].couresName;
    theCourseDiscription12.innerHTML = data.grade12[Math.abs(counter12)].courseDiscription;
});
next1.addEventListener("click", () => {
    counter12++;
    if(Math.abs(counter12) > 14) {
        counter12=0;
    }
    console.log(counter12);
    theCourseCode12.innerHTML = data.grade12[Math.abs(counter12)].courseCode;
    theCourseName12.innerHTML = data.grade12[Math.abs(counter12)].couresName;
    theCourseDiscription12.innerHTML = data.grade12[Math.abs(counter12)].courseDiscription;
});

