document.addEventListener('DOMContentLoaded', function () {
    var controller = new ScrollMagic.Controller();

    var timelineIntro = new TimelineMax();

    timelineIntro
        .from('.main-title', 2, {
            x: 0,
            y: -50,
            opacity: 0,
            ease: Power0.easeOut
        })
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
        .from('#origins-image', 4, {
            opacity: 0,
            ease: Power0.easeOut
        })
        .from('#origins-para1', 4, {
            top: "100vh",
            opacity: 0,
            ease: Power0.easeOut
        })
        .from('#origins-para1', 20, {
            top: "80vh",
            opacity: 1,
            ease: Power0.easeOut
        })
        .to('#origins-para1', 20, {
            top: "0vh",
            opacity: 0,
            ease: Power0.easeOut
        })
        .from('#origins-para2', 4, {
            top: "100vh",
            opacity: 0,
            ease: Power0.easeOut
        })
        .from('#origins-para2', 20, {
            top: "80vh",
            opacity: 1,
            ease: Power0.easeOut
        })
        .to('#origins-para2', 20, {
            top: "0vh",
            opacity: 0,
            ease: Power0.easeOut
        })

    var scene2 = new ScrollMagic.Scene({
        triggerElement: '#origins',
        duration: '100%',
        triggerHook: 0,
    }).setTween(timelineOrigin).setPin("#origins").addTo(controller)

    var timelineTheRange = new TimelineMax();
    timelineTheRange
        .from('.tr-timeline', 4, {
            opacity: 0,
            ease: Power0.easeOut
        })
        .from('.tr-pointedLight', 4, {
            opacity: 0,
            ease: Power0.easeOut
        })
        .from('.tr-gridLine', 4, {
            opacity: 0,
            ease: Power0.easeOut
        })
        .from('.tr-txt-4', 4, {
            opacity: 0,
            ease: Power0.easeOut
        })
        .from('.tr-txt-3', 4, {
            opacity: 0,
            ease: Power0.easeOut
        })
        .from('.tr-txt-2', 4, {
            opacity: 0,
            ease: Power0.easeOut
        })
        .from('.tr-splitarrow', 4, {
            opacity: 0,
            x: -10,
            ease: Power0.easeOut
        })
        .from('.tr-txt-1', 4, {
            opacity: 0,
            ease: Power0.easeOut
        })
        .from('.tr-bigbang', 4, {
            opacity: 0,
            ease: Power0.easeOut
        })
        .from('.hubble-grp', 4, {
            opacity: 0,
            y: -50,
            ease: Power0.easeOut
        })
        .from('.webb-grp', 4, {
            opacity: 0,
            y: -50,
            ease: Power0.easeOut
        })

    var scene3 = new ScrollMagic.Scene({
        triggerElement: '.the-range',
        duration: '100%',
        triggerHook: 0,
    }).setTween(timelineTheRange).setPin(".the-range").setClassToggle(".the-range", "active").addTo(controller)

});