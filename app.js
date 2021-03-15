// SWUP init
const swup = new Swup();



// GSAP

// Hero anim
gsap.from('#svg-phone', {opacity: 0, duration: 3, x: 1550, ease: "power3.out"});
gsap.from('#svg-monitor', {opacity: 0, duration: 2, x: 550, ease: "power3.out"});
gsap.from('.hero-text', {opacity: 0, duration: 2, y: -200, ease: "power1. out"});
gsap.from('.hero-tagline', {opacity: 0, duration: 2, y: -50, ease: "power3.out"});
gsap.from('.hero-cta', {opacity: 0, duration: 2, x: -500, ease: "power3.out", delay: 1});
gsap.from('.hero-buttons', {opacity: 0, duration: 2, y: -50, ease: "power1.out", delay: 1});

