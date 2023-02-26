/**@author Zain Alsudani*/

// getting data(json) by using import
import data from '/json/courseContent.json' assert { type: 'json'};

// variable for the course code tag (grade 11)
let theCourseCodeSpecial = document.getElementsByClassName("CourseCodeSpecial")[0];

// variable for the course name tag (grade 11)
let theCourseNameSpecial = document.getElementsByClassName("CourseNameSpecial")[0];

// variable for the course discription tag (grade 11)
let theCourseDiscriptionSpecial = document.getElementsByClassName("CourseDiscriptionSpecial")[0];


// variable for the prev tag
let prev2 = document.getElementById("prev-2");

// variable for the next tag
let next2 = document.getElementById("next-2");


// increases by clicking of next btn and decreases by clicking on prev (counter 11)
let counterSpecial = 0;




// Special functions
prev2.addEventListener("click", () => {
    counterSpecial--;
    if(Math.abs(counterSpecial) < 0) {
        counterSpecial=6;
    }
    console.log(counterSpecial);
    theCourseCodeSpecial.innerHTML = data.special[Math.abs(counterSpecial)].courseCode;
    theCourseNameSpecial.innerHTML = data.special[Math.abs(counterSpecial)].courseName;
    theCourseDiscriptionSpecial.innerHTML = data.special[Math.abs(counterSpecial)].courseDiscription;
});
next2.addEventListener("click", () => {
    counterSpecial++;
    if(Math.abs(counterSpecial) > 6 && counterSpecial > -1) {
        counterSpecial=0;
    }
    console.log(counterSpecial);
    theCourseCodeSpecial.innerHTML = data.special[Math.abs(counterSpecial)].courseCode;
    theCourseNameSpecial.innerHTML = data.special[Math.abs(counterSpecial)].courseName;
    theCourseDiscriptionSpecial.innerHTML = data.special[Math.abs(counterSpecial)].courseDiscription;
});


