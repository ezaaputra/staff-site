window.onscroll = function() {stickyFunction()};

var navbar = document.getElementById("navbar");
var content = document.getElementById("content")
var sticky = navbar.offsetTop;

function stickyFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
    content.classList.add("sticky-content")
  } else {
    navbar.classList.remove("sticky");
    content.classList.remove("sticky-content")
  }
}