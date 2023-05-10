// someTHING!
var imgmovement = document.getElementsByClassName("thing");
var debounceTimer;

for (var i = 0; i < imgmovement.length; i++) {
  imgmovement[i].style.transition = "all 0.2s ease-in-out"; // add transition to all images
  imgmovement[i].style.pointerEvents = "none"; // make the images click-through
}

document.onmousemove = function(event) {
  clearTimeout(debounceTimer);
  debounceTimer = setTimeout(function() {
    var x = event.clientX * 100 / window.innerWidth + "%";
    var y = event.clientY * 100 / window.innerHeight + "%";

    for (var i = 0; i < imgmovement.length; i++) {
      imgmovement[i].style.left = x;
      imgmovement[i].style.top = y;
      imgmovement[i].style.transform = "translate(-" + x + ",-" + y + ")";
    }
  }, 10); // debounce time in milliseconds
};