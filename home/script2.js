var menu = document.querySelector("#nav i")
var cross = document.querySelector("#full i")


var tl = gsap.timeline()

tl.to("#full",{
    right:0,
    duration:0.5,
})

tl.from("#full h3",{
    x:100,
    duration:0.5,
    opacity:0,
    stagger:0.2
})

tl.pause()


menu.addEventListener("click",function(){
    tl.play()
})

cross.addEventListener("click",function(){
    tl.reverse()
})
   
////////// left and right part


function BreakText(){
    var h1 = document.querySelector("#ay")
    
    var h1Text = document.querySelector("#ay").textContent
    
    var splittedText = h1Text.split("")
    var halfValue = splittedText.length/2
    
    var clutter = ""
    
    splittedText.forEach(function(elem,idx){
        if(idx<halfValue){
            clutter += `<span class="a">${elem}</span>`
        }else{
            clutter += `<span class="b">${elem}</span>`
        }
    })
    
    h1.innerHTML = clutter
    
    }


    BreakText()
    


gsap.from("#nav div",{
    y:-100,
    delay:0.2,
    opacity:0,
    duration:0.5,
    stagger:0.3,
})


gsap.from("#left",{
    x:-100,
    delay:0.2,
    opacity:0,
    duration:0.8,
    stagger:0.2
})

// gsap.from("#right",{
//     x:150,
//     delay:0.2,
//     opacity:0,
//     duration:0.8,
// })

gsap.from("h1 .a",{
    y:100,
    duration:0.8,
    delay:0.5,
    opacity:0,
    stagger:0.3
})

gsap.from("h1 .b",{
    y:100,
    duration:0.8,
    delay:0.5,
    opacity:0,
    stagger:-0.3
})

///////////////// page 3

gsap.to("#page3 h3",{
    transform:"translate(-50%)",
    scrollTrigger:{
        trigger:"#page3",
        scroller:"body",
        // markers:true,
        start:"top 0%",
        end:"top -300%",
        scrub:2,
        pin:true
    }
})

gsap.from("#page-3 h3",{
    x:800,
    duration:2,
    scrollTrigger:{
     trigger:"#page-3 h3",
     scroller:"body",
    //  markers:true,
     start:"top 70%",
     end:"top 50%",
     scrub:2
    }
 })

 gsap.from("#page-3 p",{
    x:300,
    duration:2,
    scrollTrigger:{
     trigger:"#page-3 p",
     scroller:"body",
    //  markers:true,
     start:"top 70%",
     end:"top 65%",
     scrub:2
    }
 })

 gsap.from("#page-3 button",{
    x:300,
    duration:2,
    scrollTrigger:{
     trigger:"#page-3 button",
     scroller:"body",
    //  markers:true,
     start:"top 90%",
     end:"top 85%",
     scrub:2
    }
 })

 gsap.from("#page-3 img",{
    x:-800,
    duration:2,
    scrollTrigger:{
     trigger:"#page-3 img",
     scroller:"body",
    //  markers:true,
     start:"top 60%",
     end:"top 50%",
     scrub:2
    }
 })


 //////////////

 let indoor = document.querySelector(".indoorclass")
 indoor.addEventListener("click", function() {
    window.location.href='../indept/indoor.html'
});

 let outdoor = document.querySelector(".outdoorclass")
 outdoor.addEventListener("click", function() {
    window.location.href='../indept/outdoor.html'
});

 let garden = document.querySelector(".gardenclass")
 garden.addEventListener("click", function() {
    window.location.href='../indept/garden.html'
});




