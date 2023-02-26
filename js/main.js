/**@author Zain Alsudani*/

// variable for the main frame/window
let mainWebsite = document.getElementsByClassName("page");
// variable for the title frame/widnow
let titleWebsite = document.getElementsByClassName("title-page-content");


document.getElementById("lol").addEventListener("click", enterWebsite);
/**
 * @function enterWebsite
 * onclick event which will be triggered by clicking the clickMe button.
 * it changes the display attributes
 */
function enterWebsite() {
    titleWebsite[0].style.display="none"; 
    mainWebsite[0].style.display="block"; 
    //console.log(mainWebsite);
    //console.log(titleWebsite);
}
