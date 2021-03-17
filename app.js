// SWUP init
const swup = new Swup();


///////////////////////////////
/////////// GSAP ////////////
//////////////////////////////
myWork = document.getElementsByClassName('myWork')

for (var i = 0; i < myWork.length; i++) {
    myWork[i].addEventListener('click', (e) => {
        TweenLite.to(window, 2, {scrollTo:400});
    });
}

// Hero anim
gsap.from('#svg-phone', {opacity: 0, duration: 3, x: 1550, ease: "power3.out", delay: 1.5});
gsap.from('#svg-monitor', {opacity: 0, duration: 2, x: 550, ease: "power3.out", delay: 1});
gsap.from('.hero-text', {opacity: 0, duration: 2, y: -100, delay: 1});
gsap.from('.hero-tagline', {opacity: 0, duration: 2, y: -50, ease: "power3.out", delay: 2});
gsap.from('.hero-cta', {opacity: 0, duration: 2, x: -500, ease: "power3.out", delay: 3.5});
gsap.from('.hero-buttons', {opacity: 0, duration: 2, y: -50, ease: "power1.out", delay: 3.5});
