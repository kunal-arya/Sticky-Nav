const nav = document.querySelector("#main");
const topOfNav = nav.offsetTop;

function fixNav() {
    // window.scrollY => How much we have scrolled the page till now
    // topOfNav => Navigation Top
    if(window.scrollY >= topOfNav) {
        document.body.style.paddingTop = `${nav.offsetHeight}px`;
        // we are adding class to the body, not to the nav b/c we can use this to change css whenever this class is there
        document.body.classList.add("fixed-nav");
    } else {
        document.body.style.paddingTop = 0;
        document.body.classList.remove("fixed-nav");
    }
}


// Running fixNav() fn every single time when page scroll
window.addEventListener("scroll", fixNav); 