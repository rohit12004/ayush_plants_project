// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

// Page Load Animations
window.addEventListener('load', () => {

    gsap.registerPlugin(ScrollTrigger);

// Navigation Animations on Page Load
gsap.from("#nav #logo", {
    opacity: 0,
    x: -50,
    duration: 1,
    ease: "power2.out",
    delay: 0.3
});

gsap.from("#nav #opt h3", {
    opacity: 0,
    y: 20,
    duration: 1,
    ease: "power2.out",
    stagger: 0.2,
    delay: 0.5
});

gsap.from("#nav #reg h2", {
    opacity: 0,
    y: 20,
    duration: 1,
    ease: "power2.out",
    stagger: 0.3,
    delay: 0.7
});

// Hover Animations for Nav Items
const navItems = document.querySelectorAll("#nav h3, #nav h2");

navItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
        gsap.to(item, {
            scale: 1.1,
            color: "#ffdd00", // Example hover color
            duration: 0.3,
            ease: "power1.out"
        });
    });

    item.addEventListener('mouseleave', () => {
        gsap.to(item, {
            scale: 1,
            color: "#ffffff", // Reset color to default
            duration: 0.3,
            ease: "power1.in"
        });
    });
});
    // Animation for #page-1
    gsap.from("#page-1 #left", {
        opacity: 0,
        y: 100,
        duration: 1.5,
        ease: "bounce.out",
        delay: 0.3
    });

    gsap.from("#page-1 #right img", {
        opacity: 0,
        scale: 0.5,
        duration: 1.5,
        ease: "back.out(1.7)",
        delay: 0.5
    });

    // Button Hover Animations
    gsap.from("#main button", {
        scale: 1.1,
        opacity: 0,
        duration: 0.5,
        ease: "back.out(1.7)"
    });

    document.querySelectorAll("#main button").forEach(button => {
        button.addEventListener('mouseenter', () => gsap.to(button, { scale: 1.1, opacity: 1, duration: 0.5 }));
        button.addEventListener('mouseleave', () => gsap.to(button, { scale: 1, opacity: 0.9, duration: 0.5 }));
    });
});

// Scroll Animations

gsap.from("#page-2 h4", {
    opacity: 0,
    y: 50,
    duration: 1,
    ease: "power2.out",
    scrollTrigger: {
        trigger: "#page-2",
        start: "top center",
        end: "bottom top",
        scrub: true
    }
});

gsap.from("#page-2 #cards #card", {
    opacity: 0,
    scale: 0.8,
    stagger: 0.3,
    duration: 1.5,
    ease: "power3.out",
    scrollTrigger: {
        trigger: "#page-2",
        start: "top center",
        end: "bottom top",
        scrub: true
    }
});

gsap.from("#page-3 #left img", {
    // opacity: 0,
    x: -100,
    // rotate: 10,
    duration: 1.5,
    ease: "power4.out",
    scrollTrigger: {
        trigger: "#page-3",
        start: "top center",
        end: "bottom top",
        scrub: true
    }
});

gsap.from("#page-3 #right h3", {
    // opacity: 0,
    x: -80,
    duration: 1,
    ease: "power2.out",
    scrollTrigger: {
        trigger: "#page-3",
        start: "top center",
        end: "bottom top",
        scrub: true
    }
});

gsap.from("#page-3 #right p", {
    // opacity: 0,
    x: -80,
    duration: 1,
    ease: "power2.out",
    scrollTrigger: {
        trigger: "#page-3",
        start: "top center",
        end: "bottom top",
        scrub: true
    }
});

gsap.from("#page-3 #right button", {
    // opacity: 0,
    x: -80,
    duration: 1,
    ease: "power2.out",
    scrollTrigger: {
        trigger: "#page-3",
        start: "top center",
        end: "bottom top",
        scrub: true
    }
});



