const scroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,
});

var minicircle = document.querySelector("#mini-circle");
function circleMouseFollower() {
  window.addEventListener("mousemove", function (dets) {
    minicircle.style.transform = `translate(${dets.clientX}px, ${dets.clientY}px`;
  });
}
circleMouseFollower();
