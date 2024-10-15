AOS.init();

gsap.from(".parallax", {
  scrollTrigger: {
    trigger: ".parallax",
    start: "top top",
    scrub: true,
  },
  y: "-50%",
  ease: "none"
});

AOS.init({
duration: 1000,
});

// Add GSAP animation to the text and cards
gsap.from(".container h1", {
opacity: 0,
y: 50,
duration: 1,
ease: "power2.out"
});

AOS.init({
duration: 1000,
once: true
});

// GSAP Parallax
gsap.fromTo("#hero", {opacity: 0}, {opacity: 1, duration: 2});
gsap.to(".hero-content h1", {
scrollTrigger: {
  trigger: "#hero",
  start: "top top",
  scrub: true,
},
y: -100,
ease: "power1.inOut"
});

AOS.init({
duration: 1000,
once: true
});
