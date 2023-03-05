// when page is refreshed, the page will be scrolled to the top
window.onbeforeunload = function () {
    window.scrollTo(0, 0);
}

// when scrolled to the bottom of the page, the page will be scrolled to the top
window.onscroll = function(ev) {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
        window.scrollTo(0, 0);
    }
}

// zoom in image when mouse is over the image
function zoomIn() {
    document.getElementById("img").style.transform = "scale(1.5)";
}