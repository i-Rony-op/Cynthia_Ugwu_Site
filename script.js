const scroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,
});

function circleMouseFollower() {
  var minicircle = document.querySelector("#mini-circle");
  window.addEventListener("mousemove", function (dets) {
    minicircle.style.transform = `translate(${dets.clientX}px, ${dets.clientY}px`;
  });
}
circleMouseFollower();

function firstpgAnime() {
  var tl = gsap.timeline();
  tl.from("#nav", {
    y: "10",
    opacity: 0,
    duration: 1.4,
    ease: Expo.easeInOut,
  });
  gsap.to(".bounding-elem", {
    y: 0,
    ease: Expo.easeInOut,
    duration: 2,
    stagger: 0.2,
    delay: -0.5,
  });
  gsap.from("#herofooter", {
    y: 10,
    opacity: 0,
    ease: Expo.easeInOut,
    duration: 1.5,
  });
}
firstpgAnime();

document.querySelectorAll(".elem").forEach(function (elem) {
  elem.addEventListener("mousemove", function (details) {
    console.log(elem.getBoundingClientRect());
    gsap.to(elem.querySelector("img"), {
      opacity: 1,
      ease: Power1,
    });
  });
});
