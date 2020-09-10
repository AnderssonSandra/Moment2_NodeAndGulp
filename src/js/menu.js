//hamburger menu 
function menuFunction() {
    var x = document.getElementById("main-menu");
    if (x.style.display === "block") {
    x.style.display = "none";
    } else {
    x.style.display = "block";
    }
}