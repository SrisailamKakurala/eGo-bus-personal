const main = document.querySelector("#main")
const cursor = document.querySelector("#cursor")

main.addEventListener("mousemove", (dets) => {
    console.log("first")
    if (window.innerWidth >= 1000){
        gsap.to(cursor, {
            x: dets.x+5,
            y: dets.y+5,
            duration: .8,
            ease: "power3.out",
        })
    }
})


document.addEventListener("DOMContentLoaded", () => {
    // Animate each text block
    gsap.fromTo(
        ".gsap-text",
        {
            opacity: 0,
            y: "100%", // Start from below the container
        },
        {
            opacity: 1,
            y: "0%", // End at the original position
            duration: 1.5,
            ease: "power4.out",
            stagger: 0.5, // Delay between title and motto animation
        }
    );
});


document.addEventListener('DOMContentLoaded', function() {
    var lottieContainer = document.getElementById('lottie-bg');
    
    if (lottieContainer) {
        var animation = lottie.loadAnimation({
            container: lottieContainer,  // The container element
            renderer: 'svg',             // Renderer type (svg, canvas, html)
            loop: true,                  // Loop the animation
            autoplay: true,              // Start the animation automatically
            path: './assets/animations/splashScreenAnimation.json'

        });
    } else {
        console.error('Lottie container not found');
    }
});


document.addEventListener('DOMContentLoaded', function () {
    const scroll = new LocomotiveScroll({
        el: document.querySelector('#main'),
        smooth: true,
        smoothMobile: true,
        lerp: 0.1
    });

    console.log(scroll); 

    // Update Locomotive Scroll when resizing the window
    window.addEventListener('resize', () => {
        scroll.update();
    });
});
