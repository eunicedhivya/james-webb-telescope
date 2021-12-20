document.getElementById('close3D').addEventListener("click", function () {
    document.getElementById('cover-3d').style.display = "none";
})


var video = document.getElementsByTagName('video')[0];
var videoDuration;


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
        .from('.tr-timeline', 5000, {
            opacity: 0,
            ease: Power0.easeOut
        })
        .from('.tr-pointedLight', 5000, {
            opacity: 0,
            ease: Power0.easeOut
        })
        .from('.tr-gridLine', 5000, {
            opacity: 0,
            ease: Power0.easeOut
        })
        .from('.tr-txt-4', 5000, {
            opacity: 0,
            ease: Power0.easeOut
        })
        .from('.tr-txt-3', 5000, {
            opacity: 0,
            ease: Power0.easeOut
        })
        .from('.tr-txt-2', 5000, {
            opacity: 0,
            ease: Power0.easeOut
        })
        .from('.tr-splitarrow', 5000, {
            opacity: 0,
            x: -10,
            ease: Power0.easeOut
        })
        .from('.tr-txt-1', 5000, {
            opacity: 0,
            ease: Power0.easeOut
        })
        .from('.tr-bigbang', 5000, {
            opacity: 0,
            ease: Power0.easeOut
        })
        .from('.hubble-grp', 5000, {
            opacity: 0,
            y: -50,
            ease: Power0.easeOut
        })
        .from('.webb-grp', 5000, {
            opacity: 0,
            y: -50,
            ease: Power0.easeOut
        })
        .from('#range-para1', 20000, {
            delay: 0,
            top: "150vh",
            ease: Power0.easeOut
        })
        .to('#range-para1', 20000, {
            top: "-150vh",
            ease: Power0.easeOut
        })
        .from('#range-para2', 20000, {
            top: "150vh",
            ease: Power0.easeOut
        })
        .to('#range-para2', 20000, {
            top: "-150vh",
            ease: Power0.easeOut
        })

    var scene3 = new ScrollMagic.Scene({
        triggerElement: '#telescope-range',
        duration: '100%',
        triggerHook: 0,
    }).setTween(timelineTheRange).setPin("#telescope-range").setClassToggle("#telescope-range", ".active").addTo(controller)


    var timelineTheLegrange = new TimelineMax();
    timelineTheLegrange
        .from('#lagrange-para1', 15000, {
            delay: 0,
            top: "150vh",
            ease: Power0.easeOut
        })
        .to('#lagrange-para1', 15000, {
            top: "-150vh",
            ease: Power0.easeOut
        })

    var scene4 = new ScrollMagic.Scene({
        triggerElement: '#the-lagrange',
        duration: '100%',
        triggerHook: 0,
    }).setTween(timelineTheLegrange).setPin("#the-lagrange").setClassToggle("#the-lagrange", "active").addTo(controller)


    // Grab the target video duration
    videoDuration = video.duration;
    console.log(video.duration * 1000);

    // Tween the video from beginning to end
    var videoTween = TweenMax.to(video, 1, {
        currentTime: videoDuration,
        ease: Quad.easeOut,
        overwrite: true,
        pause: true
    });

    // Build ScrollMagic Scene
    var scene5 = new ScrollMagic.Scene({ triggerElement: "#telescope", duration: videoDuration * 1000, offset: 0 })
        .setTween(videoTween) // Add tween to the scene
        .addIndicators({ name: "video play" }) // Add indicators to the scrollbar							
        .setPin("#telescope") // Add indicators to the scrollbar	
        .setClassToggle("#telescope", "active")
        .addTo(controller); // Add scene to the controller

    var scene6 = new ScrollMagic.Scene({
        triggerElement: '#jwst-deployment',
        duration: '100%',
        triggerHook: 0,
    }).setTween().setPin("#jwst-deployment").setClassToggle("#jwst-deployment", "active").addTo(controller)

});