var tl = gsap.timeline();
tl.from(".container #navbar #nav-part1 img, .container #navbar #nav-part2 .nav-items ",{
    opacity:0,
    y: 10,
    duration:2,
    delay:1,
    scrub:2
})
tl.from("#page1 #mint img, #main #left #main-head, #main #left #main-para2 ",{
    opacity:0,
    x: 100,
    duration:0.5,
    stagger: 0.2,
    scrub:2,
    delay:1,
    scale:1.5
})
tl.from(" #main #left #main-para1, #main #left #main-btn ",{
    scale:1.5,
    scrub:2,
    opacity:0,
    x: -100,
    duration:1,
    delay:0.5,
    stagger: 0.2
})
tl.from(" #main #right img",{
    opacity:0,
    duration:0.5,
    delay:0.5,
    y:100  
})
tl.from(" #page2 #page2-left img ",{
    scale:1.5,
    scrub:2,
    opacity:0,
    // x: -100,
    duration:1,
    delay:0.5,
    scale:0.5,
    stagger: 0.2
})

tl.from("#page2 #page2-right #page2-head, #page2 #page2-right #page2-para2 ",{
    scrub:2,
    opacity:0,
    x: -100,
    duration:1,
    delay:0.5,
    stagger: 0.2
})


tl.from("#page2 #page2-right #page2-para1, #page2 #page2-right #page2-btn ",{
    scrub:2,
    opacity:0,
    x: 100,
    duration:1,
    delay:0.5,
    stagger: 0.2
})

tl.from("#page3 #page3-head  ",{
    scrub:2,
    opacity:0,
    x: 100,
    duration:1,
    delay:0.5,
    stagger: 0.2
})

tl.from("#page3 #page3-para ",{
    scrub:2,
    opacity:0,
    x: -100,
    duration:1,
    delay:0.5,
    stagger: 0.2
})
tl.from("#page3 #menu-card .dish-card:nth-child(1), #page3 #menu-card .dish-card:nth-child(2),  #page3 #menu-card .dish-card:nth-child(3) ",{
    scrub:2,
    opacity:0,
    y: -100,
    duration:1,
    delay:0.5,
    stagger: 0.2
})
tl.from("#page4 #page4-div1",{
    scrub:2,
    opacity:0,
    x: -100,
    duration:1,
    delay:0.2,
    stagger: 0.2
})
tl.from(" #page4 #page4-div2",{
    scrub:2,
    opacity:0,
    scale: 0.5,
    duration:1,
    delay:0.2,
    stagger: 0.2
})
tl.from(" #page4 #page4-div3 #page4-div3-innerdiv1",{
    scrub:2,
    opacity:0,
    x: -200,
    scale: 0.5,
    duration:1,
    delay:0.2,
    stagger: 0.2
})
tl.from(" #page4 #page4-div3 #page4-div3-innerdiv2",{
    scrub:2,
    opacity:0,
    scale: 0.5,
    x: 200,
    duration:.5,
    delay:0.2,
    stagger: 0.2
})
tl.from(" #page5 #page5-para #page5-head1, #page5 #page5-para #page5-para1 ",{
    scrub:2,
    opacity:0,
    scale: 0.5,
    // x: -100,
    duration: .5,
    delay:0.2,
    stagger: 0.2
})
tl.from(" #page5 #page5-input",{
    scrub:2,
    opacity:0,
    scale: 0.5,
    x:-100,
    duration: .5,
    delay:0.2,
    stagger: 0.2
})
tl.from("  #page5  #page5-img ",{
    scrub:2,
    opacity:0,
    scale: 0.5,
    x:100,
    duration: .5,
    delay:0.2,
    stagger: 0.2
})
