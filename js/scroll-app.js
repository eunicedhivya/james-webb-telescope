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
        .from('#origins-para1', 4, {
            x: 50,
            y: 0,
            opacity: 0,
            ease: Power0.easeOut
        })
        .from('#origins-image', 4, {
            x: -50,
            y: 0,
            opacity: 0,
            ease: Power0.easeOut
        })
        .from('#origins-para2', 4, {
            x: 0,
            y: 150,
            opacity: 0,
            ease: Power0.easeOut
        })

    var scene2 = new ScrollMagic.Scene({
        triggerElement: '#origins',
        duration: '100%',
        triggerHook: 0,
    }).setTween(timelineOrigin).setPin("#origins").addTo(controller)

});