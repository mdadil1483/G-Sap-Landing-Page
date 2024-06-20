var tl=gsap.timeline()

tl.from("#nav h2 ,#nav h3,#nav h5,#nav button",{
    y:-100,
    duration:2,
    // delay:1,
    opacity:0,
    stagger:0.2,
})
tl.from("#container img",{
    duration:2,
    // delay:1,
    opacity:0,
    scale:0,
    stagger:0.2,
})
tl.from("#container h1",{
    y:-100,
    duration:2,
    delay:1,
    opacity:0,
    stagger:0.5,
    scale:0,
})
tl.from("#container h4",{
    opacity:0,
    scale:0,
})
tl.to("#container h4",{
    y:30,
    duration:0.7,
    repeat:-1,
    yoyo:true,
})