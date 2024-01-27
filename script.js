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
  var rotate = 0;
  var diffrot = 0;

  elem.addEventListener("mouseleave", function (dets) {
    gsap.to(elem.querySelector("img"), {
      opacity: 0,
      ease: Power3,
      duration: 0.5,
    });
  });

  elem.addEventListener("mousemove", function (dets) {
    var diff = dets.clientY - elem.getBoundingClientRect().top;
    diffrot = dets.clientX - rotate;
    rotate = dets.clientX;
    gsap.to(elem.querySelector("img"), {
      opacity: 1,
      ease: Power3,
      top: diff,
      left: dets.clientX,
      rotate: gsap.utils.clamp(-20, 20, diffrot * 0.5),
    });
  });
});
