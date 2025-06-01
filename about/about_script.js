
gsap.from("#intro",{
    x:500,
    scrollTrigger:{
        trigger:"#intro",
        scroller:"body",
        // markers:true,
        start:"top 50%",
        end:"top 20%",
        scrub:2,
    }
})

gsap.from("#mission",{
    x:-500,
    scrollTrigger:{
        trigger:"#mission",
        scroller:"body",
        // markers:true,
        start:"top 50%",
        end:"top 20%",
        scrub:2,
    }
})


gsap.from("#why-garden",{
    x:500,
    scrollTrigger:{
        trigger:"#why-garden",
        scroller:"body",
        // markers:true,
        start:"top 50%",
        end:"top 20%",
        scrub:2,
    }
})


gsap.from("#card1,#card2",{
    x:-500,
    scrollTrigger:{
        trigger:"#why-garden",
        scroller:"body",
        // markers:true,
        start:"top 50%",
        end:"top 20%",
        scrub:2,
    }
})

gsap.from("#card3,#card4",{
    x:500,
    scrollTrigger:{
        trigger:"#why-garden",
        scroller:"body",
        // markers:true,
        start:"top 50%",
        end:"top 20%",
        scrub:2,
    }
})
