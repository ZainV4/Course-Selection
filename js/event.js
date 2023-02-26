/**@author Zain Alsudani*/

// variable for the prev tag
let prev2 = document.getElementById("prev-3");

// variable for the next tag
let next2 = document.getElementById("next-3");

// variable for the next tag
let img = document.getElementById("img");

// increases by clicking of next btn and decreases by clicking on prev (counter 11)
let counter = 0;

const imgs = ["./img/event/IMG_3458.jpg", "./img/event/IMG_3463.jpg", "./img/event/IMG_3466.jpg", "./img/event/IMG_3470.jpg", "./img/event/IMG_3471.jpg","./img/event/IMG_3472.jpg","./img/event/IMG_3476.jpg","./img/event/IMG_3480.jpg","./img/event/IMG_3481.jpg", "./img/event/IMG_3490.jpg"];


// Special functions
prev2.addEventListener("click", () => {
    counter--;
    if(Math.abs(counter) < 0  || counter == -11) {
        counter=10;
    }
    img.src = imgs[Math.abs(counter)];
    console.log(counter);

});
next2.addEventListener("click", () => {
    counter++;
    if(Math.abs(counter) > 9) {
        counter=0;
    }
    console.log(counter);
    img.src = imgs[Math.abs(counter)];
});


