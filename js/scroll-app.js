document.addEventListener('DOMContentLoaded', function () {
    var controller = new ScrollMagic.Controller();

    var timelineIntro = new TimelineMax();

    timelineIntro
        .from('.main-desc', 2, {
            x: 0,
            y: -50,
            opacity: 0,
            delay: 1,
            ease: Power0.easeOut
        })

    var scene = new ScrollMagic.Scene({
        triggerElement: '#intro',
        duration: '100%',
        triggerHook: 0,
        offset: '0'
    }).setTween(timelineIntro).setPin("#intro").addTo(controller)


    var timelineOrigin = new TimelineMax();
    timelineOrigin
        .from('#origins-image', 100, {
            opacity: 0,
            ease: Power0.easeOut
        })
        .from('#origins-para1', 500, {
            y: 20,
            top: "100vh",
            ease: Power0.easeOut
        })
        .to('#origins-para1', 500, {
            y: -20,
            top: "-100vh",
            ease: Power0.easeOut
        })
        .from('#origins-para2', 500, {
            y: 20,
            top: "100vh",
            ease: Power0.easeOut
        })
        .to('#origins-para2', 50, {
            y: -20,
            top: "-100vh",
            ease: Power0.easeOut
        })


    var scene2 = new ScrollMagic.Scene({
        triggerElement: '#origins',
        duration: '100%',
        triggerHook: 0,
    }).setTween(timelineOrigin).setPin("#origins").addTo(controller)

    var timelineTheRange = new TimelineMax();
    timelineTheRange
        .from('.tr-timeline', 500, {
            opacity: 0,
            ease: Power0.easeOut
        })
        .from('.tr-pointedLight', 500, {
            opacity: 0,
            ease: Power0.easeOut
        })
        .from('.tr-gridLine', 500, {
            opacity: 0,
            ease: Power0.easeOut
        })
        .from('.tr-txt-4', 500, {
            opacity: 0,
            ease: Power0.easeOut
        })
        .from('.tr-txt-3', 500, {
            opacity: 0,
            ease: Power0.easeOut
        })
        .from('.tr-txt-2', 500, {
            opacity: 0,
            ease: Power0.easeOut
        })
        .from('.tr-splitarrow', 500, {
            opacity: 0,
            x: -10,
            ease: Power0.easeOut
        })
        .from('.tr-txt-1', 500, {
            opacity: 0,
            ease: Power0.easeOut
        })
        .from('.tr-bigbang', 500, {
            opacity: 0,
            ease: Power0.easeOut
        })
        .from('.hubble-grp', 500, {
            opacity: 0,
            y: -50,
            ease: Power0.easeOut
        })
        .from('.webb-grp', 500, {
            opacity: 0,
            y: -50,
            ease: Power0.easeOut
        })
        .from('#range-para1', 15000, {
            delay: 0,
            top: "150vh",
            ease: Power0.easeOut
        })
        .to('#range-para1', 15000, {
            top: "-150vh",
            ease: Power0.easeOut
        })
        .from('#range-para2', 15000, {
            top: "150vh",
            ease: Power0.easeOut
        })
        .to('#range-para2', 15000, {
            top: "-150vh",
            ease: Power0.easeOut
        })

    var scene3 = new ScrollMagic.Scene({
        triggerElement: '#telescope-range',
        duration: '100%',
        triggerHook: 0,
    }).setTween(timelineTheRange).setPin("#telescope-range").setClassToggle("#telescope-range", ".active").addTo(controller)

});