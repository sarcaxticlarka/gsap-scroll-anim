var tl = gsap.timeline()
tl.from(".nav ", {
    y: -80,
    duration:0.5,
    delay:0.4, 
})


gsap.from(".text img", {
    scale: 0.2,
    stagger: 0.5,
    delay: 1,
    duration: 0.6,

    scrollTrigger: {
        trigger: ".slide",
        start: "top 10%",
        end: "bottom -90%",
        scrub: 0.3,
        markers: true,


    }
})

 

// var tl = gsap.timeline({
//     repeat: -1
// })

// tl.to(".slides1", {
//     transform: 'translateX(-100%)',
//     duration:2,
//     ease:"power4"
// }, "+=1")
// tl.to(".slides2", {
//     transform: 'translateX(-200%)',
//     duration:2,
//     ease:"power4"
// }, "+=1")