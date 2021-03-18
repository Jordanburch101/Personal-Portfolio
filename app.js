


///////////////////////////////
/////////// GSAP ////////////
//////////////////////////////
function heroAnimation() {
    console.log('DOM fully loaded and parsed');
    gsap.from('#svg-phone', {opacity: 0, duration: 3, x: 1550, ease: "power3.out", delay: 3});
    gsap.from('#svg-monitor', {opacity: 0, duration: 3, x: 550, ease: "power3.out", delay: .5});
    gsap.from('.hero-text', {opacity: 0, duration: 2, y: -100, delay: .2});
    gsap.from('.hero-tagline', {opacity: 0, duration: 2, y: -50, ease: "power3.out", delay: 1});
    gsap.from('.hero-cta', {opacity: 0, duration: 2, x: -500, ease: "power3.out", delay: 2});
    gsap.from('.hero-buttons', {opacity: 0, duration: 2, y: -50, ease: "power1.out", delay: 1.5});

}
function contactAnimation() {
    
}


///////////////////////////////
/////////// SWUP ////////////
//////////////////////////////

document.addEventListener("DOMContentLoaded", () => {
    function init() {
        // Get Page Name
        const path = window.location.pathname;
        const page = path.split("/").pop();
        console.log( page );

        if(page === "index.html") {
            heroAnimation();
        }
        if(page === "contact.html") {
            contactAnimation();
        }
    }
    

    const swup = new Swup();
        init();
    swup.on('contentReplaced', init);
});

