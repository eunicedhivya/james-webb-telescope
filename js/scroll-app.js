document.getElementById('enable3dwindow').addEventListener("click", function () {
    document.getElementById('cover-3d').style.display = "none";
    document.getElementsByTagName('body')[0].style.overflow = "hidden";
    // document.getElementById('model').style.transform = "scale(1.5)";
    // alert("test");
})
document.getElementById('disable3dwindow').addEventListener("click", function () {
    document.getElementById('cover-3d').style.display = "block";
    document.getElementsByTagName('body')[0].removeAttribute("style")
})

var images = [
    "https://www.eunicedhivya.com/james-webb-telescope/assets/imgs/image-seq/ramped/ezgif-frame-114.jpg",
    "https://www.eunicedhivya.com/james-webb-telescope/assets/imgs/image-seq/ramped/ezgif-frame-113.jpg",
    "https://www.eunicedhivya.com/james-webb-telescope/assets/imgs/image-seq/ramped/ezgif-frame-112.jpg",
    "https://www.eunicedhivya.com/james-webb-telescope/assets/imgs/image-seq/ramped/ezgif-frame-111.jpg",
    "https://www.eunicedhivya.com/james-webb-telescope/assets/imgs/image-seq/ramped/ezgif-frame-110.jpg",
    "https://www.eunicedhivya.com/james-webb-telescope/assets/imgs/image-seq/ramped/ezgif-frame-109.jpg",
    "https://www.eunicedhivya.com/james-webb-telescope/assets/imgs/image-seq/ramped/ezgif-frame-108.jpg",
    "https://www.eunicedhivya.com/james-webb-telescope/assets/imgs/image-seq/ramped/ezgif-frame-107.jpg",
    "https://www.eunicedhivya.com/james-webb-telescope/assets/imgs/image-seq/ramped/ezgif-frame-106.jpg",
    "https://www.eunicedhivya.com/james-webb-telescope/assets/imgs/image-seq/ramped/ezgif-frame-105.jpg",
    "https://www.eunicedhivya.com/james-webb-telescope/assets/imgs/image-seq/ramped/ezgif-frame-104.jpg",
    "https://www.eunicedhivya.com/james-webb-telescope/assets/imgs/image-seq/ramped/ezgif-frame-103.jpg",
    "https://www.eunicedhivya.com/james-webb-telescope/assets/imgs/image-seq/ramped/ezgif-frame-102.jpg",
    "https://www.eunicedhivya.com/james-webb-telescope/assets/imgs/image-seq/ramped/ezgif-frame-101.jpg",
    "https://www.eunicedhivya.com/james-webb-telescope/assets/imgs/image-seq/ramped/ezgif-frame-100.jpg",
    "https://www.eunicedhivya.com/james-webb-telescope/assets/imgs/image-seq/ramped/ezgif-frame-099.jpg",
    "https://www.eunicedhivya.com/james-webb-telescope/assets/imgs/image-seq/ramped/ezgif-frame-098.jpg",
    "https://www.eunicedhivya.com/james-webb-telescope/assets/imgs/image-seq/ramped/ezgif-frame-097.jpg",
    "https://www.eunicedhivya.com/james-webb-telescope/assets/imgs/image-seq/ramped/ezgif-frame-096.jpg",
    "https://www.eunicedhivya.com/james-webb-telescope/assets/imgs/image-seq/ramped/ezgif-frame-095.jpg",
    "https://www.eunicedhivya.com/james-webb-telescope/assets/imgs/image-seq/ramped/ezgif-frame-094.jpg",
    "https://www.eunicedhivya.com/james-webb-telescope/assets/imgs/image-seq/ramped/ezgif-frame-093.jpg",
    "https://www.eunicedhivya.com/james-webb-telescope/assets/imgs/image-seq/ramped/ezgif-frame-092.jpg",
    "https://www.eunicedhivya.com/james-webb-telescope/assets/imgs/image-seq/ramped/ezgif-frame-091.jpg",
    "https://www.eunicedhivya.com/james-webb-telescope/assets/imgs/image-seq/ramped/ezgif-frame-090.jpg",
    "https://www.eunicedhivya.com/james-webb-telescope/assets/imgs/image-seq/ramped/ezgif-frame-089.jpg",
    "https://www.eunicedhivya.com/james-webb-telescope/assets/imgs/image-seq/ramped/ezgif-frame-088.jpg",
    "https://www.eunicedhivya.com/james-webb-telescope/assets/imgs/image-seq/ramped/ezgif-frame-087.jpg",
    "https://www.eunicedhivya.com/james-webb-telescope/assets/imgs/image-seq/ramped/ezgif-frame-086.jpg",
    "https://www.eunicedhivya.com/james-webb-telescope/assets/imgs/image-seq/ramped/ezgif-frame-085.jpg",
    "https://www.eunicedhivya.com/james-webb-telescope/assets/imgs/image-seq/ramped/ezgif-frame-084.jpg",
    "https://www.eunicedhivya.com/james-webb-telescope/assets/imgs/image-seq/ramped/ezgif-frame-083.jpg",
    "https://www.eunicedhivya.com/james-webb-telescope/assets/imgs/image-seq/ramped/ezgif-frame-082.jpg",
    "https://www.eunicedhivya.com/james-webb-telescope/assets/imgs/image-seq/ramped/ezgif-frame-081.jpg",
    "https://www.eunicedhivya.com/james-webb-telescope/assets/imgs/image-seq/ramped/ezgif-frame-080.jpg",
    "https://www.eunicedhivya.com/james-webb-telescope/assets/imgs/image-seq/ramped/ezgif-frame-079.jpg",
    "https://www.eunicedhivya.com/james-webb-telescope/assets/imgs/image-seq/ramped/ezgif-frame-078.jpg",
    "https://www.eunicedhivya.com/james-webb-telescope/assets/imgs/image-seq/ramped/ezgif-frame-077.jpg",
    "https://www.eunicedhivya.com/james-webb-telescope/assets/imgs/image-seq/ramped/ezgif-frame-076.jpg",
    "https://www.eunicedhivya.com/james-webb-telescope/assets/imgs/image-seq/ramped/ezgif-frame-075.jpg",
    "https://www.eunicedhivya.com/james-webb-telescope/assets/imgs/image-seq/ramped/ezgif-frame-074.jpg",
    "https://www.eunicedhivya.com/james-webb-telescope/assets/imgs/image-seq/ramped/ezgif-frame-073.jpg",
    "https://www.eunicedhivya.com/james-webb-telescope/assets/imgs/image-seq/ramped/ezgif-frame-072.jpg",
    "https://www.eunicedhivya.com/james-webb-telescope/assets/imgs/image-seq/ramped/ezgif-frame-071.jpg",
    "https://www.eunicedhivya.com/james-webb-telescope/assets/imgs/image-seq/ramped/ezgif-frame-070.jpg",
    "https://www.eunicedhivya.com/james-webb-telescope/assets/imgs/image-seq/ramped/ezgif-frame-069.jpg",
    "https://www.eunicedhivya.com/james-webb-telescope/assets/imgs/image-seq/ramped/ezgif-frame-068.jpg",
    "https://www.eunicedhivya.com/james-webb-telescope/assets/imgs/image-seq/ramped/ezgif-frame-067.jpg",
    "https://www.eunicedhivya.com/james-webb-telescope/assets/imgs/image-seq/ramped/ezgif-frame-066.jpg",
    "https://www.eunicedhivya.com/james-webb-telescope/assets/imgs/image-seq/ramped/ezgif-frame-065.jpg",
    "https://www.eunicedhivya.com/james-webb-telescope/assets/imgs/image-seq/ramped/ezgif-frame-064.jpg",
    "https://www.eunicedhivya.com/james-webb-telescope/assets/imgs/image-seq/ramped/ezgif-frame-063.jpg",
    "https://www.eunicedhivya.com/james-webb-telescope/assets/imgs/image-seq/ramped/ezgif-frame-062.jpg",
    "https://www.eunicedhivya.com/james-webb-telescope/assets/imgs/image-seq/ramped/ezgif-frame-061.jpg",
    "https://www.eunicedhivya.com/james-webb-telescope/assets/imgs/image-seq/ramped/ezgif-frame-060.jpg",
    "https://www.eunicedhivya.com/james-webb-telescope/assets/imgs/image-seq/ramped/ezgif-frame-059.jpg",
    "https://www.eunicedhivya.com/james-webb-telescope/assets/imgs/image-seq/ramped/ezgif-frame-058.jpg",
    "https://www.eunicedhivya.com/james-webb-telescope/assets/imgs/image-seq/ramped/ezgif-frame-057.jpg",
    "https://www.eunicedhivya.com/james-webb-telescope/assets/imgs/image-seq/ramped/ezgif-frame-056.jpg",
    "https://www.eunicedhivya.com/james-webb-telescope/assets/imgs/image-seq/ramped/ezgif-frame-055.jpg",
    "https://www.eunicedhivya.com/james-webb-telescope/assets/imgs/image-seq/ramped/ezgif-frame-054.jpg",
    "https://www.eunicedhivya.com/james-webb-telescope/assets/imgs/image-seq/ramped/ezgif-frame-053.jpg",
    "https://www.eunicedhivya.com/james-webb-telescope/assets/imgs/image-seq/ramped/ezgif-frame-052.jpg",
    "https://www.eunicedhivya.com/james-webb-telescope/assets/imgs/image-seq/ramped/ezgif-frame-051.jpg",
    "https://www.eunicedhivya.com/james-webb-telescope/assets/imgs/image-seq/ramped/ezgif-frame-050.jpg",
    "https://www.eunicedhivya.com/james-webb-telescope/assets/imgs/image-seq/ramped/ezgif-frame-049.jpg",
    "https://www.eunicedhivya.com/james-webb-telescope/assets/imgs/image-seq/ramped/ezgif-frame-048.jpg",
    "https://www.eunicedhivya.com/james-webb-telescope/assets/imgs/image-seq/ramped/ezgif-frame-047.jpg",
    "https://www.eunicedhivya.com/james-webb-telescope/assets/imgs/image-seq/ramped/ezgif-frame-046.jpg",
    "https://www.eunicedhivya.com/james-webb-telescope/assets/imgs/image-seq/ramped/ezgif-frame-045.jpg",
    "https://www.eunicedhivya.com/james-webb-telescope/assets/imgs/image-seq/ramped/ezgif-frame-044.jpg",
    "https://www.eunicedhivya.com/james-webb-telescope/assets/imgs/image-seq/ramped/ezgif-frame-043.jpg",
    "https://www.eunicedhivya.com/james-webb-telescope/assets/imgs/image-seq/ramped/ezgif-frame-042.jpg",
    "https://www.eunicedhivya.com/james-webb-telescope/assets/imgs/image-seq/ramped/ezgif-frame-041.jpg",
    "https://www.eunicedhivya.com/james-webb-telescope/assets/imgs/image-seq/ramped/ezgif-frame-040.jpg",
    "https://www.eunicedhivya.com/james-webb-telescope/assets/imgs/image-seq/ramped/ezgif-frame-039.jpg",
    "https://www.eunicedhivya.com/james-webb-telescope/assets/imgs/image-seq/ramped/ezgif-frame-038.jpg",
    "https://www.eunicedhivya.com/james-webb-telescope/assets/imgs/image-seq/ramped/ezgif-frame-037.jpg",
    "https://www.eunicedhivya.com/james-webb-telescope/assets/imgs/image-seq/ramped/ezgif-frame-036.jpg",
    "https://www.eunicedhivya.com/james-webb-telescope/assets/imgs/image-seq/ramped/ezgif-frame-035.jpg",
    "https://www.eunicedhivya.com/james-webb-telescope/assets/imgs/image-seq/ramped/ezgif-frame-034.jpg",
    "https://www.eunicedhivya.com/james-webb-telescope/assets/imgs/image-seq/ramped/ezgif-frame-033.jpg",
    "https://www.eunicedhivya.com/james-webb-telescope/assets/imgs/image-seq/ramped/ezgif-frame-032.jpg",
    "https://www.eunicedhivya.com/james-webb-telescope/assets/imgs/image-seq/ramped/ezgif-frame-031.jpg",
    "https://www.eunicedhivya.com/james-webb-telescope/assets/imgs/image-seq/ramped/ezgif-frame-030.jpg",
    "https://www.eunicedhivya.com/james-webb-telescope/assets/imgs/image-seq/ramped/ezgif-frame-029.jpg",
    "https://www.eunicedhivya.com/james-webb-telescope/assets/imgs/image-seq/ramped/ezgif-frame-028.jpg",
    "https://www.eunicedhivya.com/james-webb-telescope/assets/imgs/image-seq/ramped/ezgif-frame-027.jpg",
    "https://www.eunicedhivya.com/james-webb-telescope/assets/imgs/image-seq/ramped/ezgif-frame-026.jpg",
    "https://www.eunicedhivya.com/james-webb-telescope/assets/imgs/image-seq/ramped/ezgif-frame-025.jpg",
    "https://www.eunicedhivya.com/james-webb-telescope/assets/imgs/image-seq/ramped/ezgif-frame-024.jpg",
    "https://www.eunicedhivya.com/james-webb-telescope/assets/imgs/image-seq/ramped/ezgif-frame-023.jpg",
    "https://www.eunicedhivya.com/james-webb-telescope/assets/imgs/image-seq/ramped/ezgif-frame-022.jpg",
    "https://www.eunicedhivya.com/james-webb-telescope/assets/imgs/image-seq/ramped/ezgif-frame-021.jpg",
    "https://www.eunicedhivya.com/james-webb-telescope/assets/imgs/image-seq/ramped/ezgif-frame-020.jpg",
    "https://www.eunicedhivya.com/james-webb-telescope/assets/imgs/image-seq/ramped/ezgif-frame-019.jpg",
    "https://www.eunicedhivya.com/james-webb-telescope/assets/imgs/image-seq/ramped/ezgif-frame-018.jpg",
    "https://www.eunicedhivya.com/james-webb-telescope/assets/imgs/image-seq/ramped/ezgif-frame-017.jpg",
    "https://www.eunicedhivya.com/james-webb-telescope/assets/imgs/image-seq/ramped/ezgif-frame-016.jpg",
    "https://www.eunicedhivya.com/james-webb-telescope/assets/imgs/image-seq/ramped/ezgif-frame-015.jpg",
    "https://www.eunicedhivya.com/james-webb-telescope/assets/imgs/image-seq/ramped/ezgif-frame-014.jpg",
    "https://www.eunicedhivya.com/james-webb-telescope/assets/imgs/image-seq/ramped/ezgif-frame-013.jpg",
    "https://www.eunicedhivya.com/james-webb-telescope/assets/imgs/image-seq/ramped/ezgif-frame-012.jpg",
    "https://www.eunicedhivya.com/james-webb-telescope/assets/imgs/image-seq/ramped/ezgif-frame-011.jpg",
    "https://www.eunicedhivya.com/james-webb-telescope/assets/imgs/image-seq/ramped/ezgif-frame-010.jpg",
    "https://www.eunicedhivya.com/james-webb-telescope/assets/imgs/image-seq/ramped/ezgif-frame-009.jpg",
    "https://www.eunicedhivya.com/james-webb-telescope/assets/imgs/image-seq/ramped/ezgif-frame-008.jpg",
    "https://www.eunicedhivya.com/james-webb-telescope/assets/imgs/image-seq/ramped/ezgif-frame-007.jpg",
    "https://www.eunicedhivya.com/james-webb-telescope/assets/imgs/image-seq/ramped/ezgif-frame-006.jpg",
    "https://www.eunicedhivya.com/james-webb-telescope/assets/imgs/image-seq/ramped/ezgif-frame-005.jpg",
    "https://www.eunicedhivya.com/james-webb-telescope/assets/imgs/image-seq/ramped/ezgif-frame-004.jpg",
    "https://www.eunicedhivya.com/james-webb-telescope/assets/imgs/image-seq/ramped/ezgif-frame-003.jpg",
    "https://www.eunicedhivya.com/james-webb-telescope/assets/imgs/image-seq/ramped/ezgif-frame-002.jpg",
    "https://www.eunicedhivya.com/james-webb-telescope/assets/imgs/image-seq/ramped/ezgif-frame-001.jpg"
];


// var video = document.getElementsByTagName('video')[0];
// var videoDuration;


document.addEventListener('DOMContentLoaded', function () {
    var controller = new ScrollMagic.Controller();

    var timelineIntro = new TimelineMax();

    timelineIntro
        .from('.main-desc', 1, {
            x: 0,
            y: -50,
            opacity: 0,
            ease: Power0.easeOut
        })
        .to('.main-desc', 12, {
            x: 0,
            y: 0,
            opacity: 1,
            ease: Power0.easeOut
        })

    var scene = new ScrollMagic.Scene({
        triggerElement: '#intro',
        duration: '200%',
        triggerHook: 0,
    }).setTween(timelineIntro).setPin("#intro").addTo(controller)


    var timelineOrigin = new TimelineMax();
    timelineOrigin
        .from('#origins-image', 4, {
            opacity: 0,
            ease: Power0.easeOut
        })
        .to('#shine-effect', 2, {
            opacity: 1,
            right: "50%",
            ease: Power0.easeOut
        })
        .to('#shine-effect', 2, {
            opacity: 0,
            right: "-92%",
            ease: Power0.easeOut
        })
        .to('#origins-image', 4, {
            scale: 2,
            ease: Power0.easeOut
        })
        .from('#origins-para1', 8, {
            y: 20,
            top: "100vh",
            ease: Power0.easeOut
        })
        .to('#origins-para1', 8, {
            y: -20,
            top: "-100vh",
            ease: Power0.easeOut
        })
        .to('#shine-effect', 2, {
            opacity: 1,
            right: "50%",
            ease: Power0.easeOut
        })
        .to('#shine-effect', 2, {
            opacity: 0,
            right: "168%",
            ease: Power0.easeOut
        })
        .from('#origins-para2', 4, {
            y: 20,
            top: "100vh",
            ease: Power0.easeOut
        })
        .to('#origins-para2', 8, {
            y: -20,
            top: "-100vh",
            ease: Power0.easeOut
        })
        .to('#shine-effect', 2, {
            opacity: 1,
            right: "50%",
            ease: Power0.easeOut
        })
        .to('#shine-effect', 2, {
            opacity: 0,
            right: "-92%",
            ease: Power0.easeOut
        })
        .to('#origins-image', 4, {
            scale: 0.7,
            opacity: 0,
            ease: Power0.easeOut
        })

    var scene2 = new ScrollMagic.Scene({
        triggerElement: '#origins',
        duration: 10000,
        triggerHook: 0,
    }).setTween(timelineOrigin).setPin("#origins").addTo(controller)

    var timelineTheRange = new TimelineMax();
    timelineTheRange
        .from('.tr-bigbang', 5000, {
            opacity: 0,
            ease: Power0.easeOut
        })
        .from('.tr-pointedLight', 5000, {
            opacity: 0,
            ease: Power0.easeOut
        })
        .from('.levels', 5000, {
            opacity: 0,
            ease: Power0.easeOut
        })
        .from('.tr-gridLine', 5000, {
            opacity: 0,
            ease: Power0.easeOut
        })
        .from('.tr-timeline', 5000, {
            opacity: 0,
            ease: Power0.easeOut
        })
        .from('.tr-txt-4', 5000, { //present day
            opacity: 0,
            ease: Power0.easeOut
        })
        .from('.tr-hubble-icon', 5000, {
            opacity: 0,
            ease: Power0.easeOut
        }, "icons")
        .from('.tr-webb-icon', 5000, {
            opacity: 0,
            ease: Power0.easeOut
        }, "icons")
        .from('.tr-txt-3', 5000, {
            opacity: 0,
            ease: Power0.easeOut
        })
        .from('.tr-txt-2', 5000, {
            opacity: 0,
            ease: Power0.easeOut
        }, "txt2")
        .from('.tr-splitarrow', 5000, {
            opacity: 0,
            x: -10,
            ease: Power0.easeOut
        }, "txt2")
        .from('.tr-txt-1', 5000, {
            opacity: 0,
            ease: Power0.easeOut
        })
        .from('.tr-hubble-limit', 5000, {
            opacity: 0,
            y: -50,
            ease: Power0.easeOut
        })
        .from('.tr-txt-5', 5000, {
            opacity: 0,
            ease: Power0.easeOut
        })
        .from('.tr-webb-limit', 5000, {
            opacity: 0,
            y: -50,
            ease: Power0.easeOut
        })
        .from('.tr-txt-6', 5000, {
            opacity: 0,
            ease: Power0.easeOut
        })
        .to('.the-range', 5000, {
            opacity: 0.4,
            ease: Power0.easeOut
        })
        .from('#range-para1', 5000, {
            delay: 0,
            top: "120vh",
            opacity: 0,
            ease: Power0.easeOut
        })
        .to('#range-para1', 10000, {
            top: "80vh",
            ease: Power0.easeOut
        })
        .to('#range-para1', 10000, {
            top: "40vh",
            ease: Power0.easeOut
        })
        .to('#range-para1', 10000, {
            top: "-120vh",
            opacity: 0,
            ease: Power0.easeOut
        })
        .from('#range-para2', 10000, {
            delay: 0,
            top: "120vh",
            opacity: 0,
            ease: Power0.easeOut
        })
        .to('#range-para2', 10000, {
            top: "80vh",
            ease: Power0.easeOut
        })
        .to('#range-para2', 10000, {
            top: "40vh",
            ease: Power0.easeOut
        })
        .to('#range-para2', 10000, {
            top: "-120vh",
            opacity: 0,
            ease: Power0.easeOut
        })
        .to('.the-range', 5000, {
            opacity: 0,
            ease: Power0.easeOut
        })

    var scene3 = new ScrollMagic.Scene({
        triggerElement: '#telescope-range',
        duration: '500%',
        triggerHook: 0,
    }).setTween(timelineTheRange).setPin("#telescope-range").setClassToggle("#telescope-range", ".active").addTo(controller)


    var timelineTheLegrange = new TimelineMax();
    timelineTheLegrange
        .from('#lagrange-para1', 10000, {
            delay: 1,
            top: "120vh",
            ease: Power0.easeOut
        })
        .to('#lagrange-para1', 10000, {
            top: "80vh",
            ease: Power0.easeOut
        })
        .to('#lagrange-para1', 10000, {
            top: "20vh",
            ease: Power0.easeOut
        })
        .to('#lagrange-para1', 10000, {
            top: "-120vh",
            ease: Power0.easeOut
        })

    var scene4 = new ScrollMagic.Scene({
        triggerElement: '#the-lagrange',
        duration: '500%',
        triggerHook: 0,
    }).setTween(timelineTheLegrange).setPin("#the-lagrange").setClassToggle("#the-lagrange", "active").addTo(controller)



    var obj = { curImg: 0 };

    // create tween
    var tweenImg = new TimelineMax();

    var reverseImg = images.reverse()

    tweenImg.to(obj, 1,
        {
            curImg: images.length - 1,	// animate propery curImg to number of images
            roundProps: "curImg",				// only integers so it can be used as an array index
            repeat: 0,									// repeat 3 times
            immediateRender: true,			// load first image automatically
            ease: Linear.easeNone,			// show every image the same ammount of time
            onUpdate: function (e) {
                $("#myimg").attr("src", images[obj.curImg]); // set the image source
            }
        }
    ).to("#myimg", 0, {
        opacity: 0,
        ease: Power0.easeOut
    }, "t2").to("#step13", 0, {
        opacity: 0,
        ease: Power0.easeOut
    }, "t2")


    var scene5 = new ScrollMagic.Scene({ triggerElement: "#telescope", duration: 28000, triggerHook: 0 })
        .setTween(tweenImg)
        .setClassToggle("#telescope", "active")
        .on("update", function (e) {
            // console.log("start")
            // console.log("start")
            // console.log(controller.info("scrollDirection"));
            // console.log(e.startPos);
            // console.log(e.scrollPos);
            if (controller.info("scrollDirection") === "FORWARD") {
                if ((e.scrollPos > e.startPos + 1800) && (e.scrollPos < e.startPos + 3000)) {
                    $("#step1").css("opacity", 1)
                } else if ((e.scrollPos > e.startPos + 3000) && (e.scrollPos < e.startPos + 4500)) {
                    $("#step1").css("opacity", 0)
                    $("#step2").css("opacity", 1)
                } else if ((e.scrollPos > e.startPos + 4500) && (e.scrollPos < e.startPos + 7500)) {
                    $("#step2").css("opacity", 0)
                    $("#step3").css("opacity", 1)
                } else if ((e.scrollPos > e.startPos + 7500) && (e.scrollPos < e.startPos + 9000)) {
                    $("#step3").css("opacity", 0)
                    $("#step4").css("opacity", 1)
                } else if ((e.scrollPos > e.startPos + 9000) && (e.scrollPos < e.startPos + 10600)) {
                    $("#step4").css("opacity", 0)
                    $("#step5").css("opacity", 1)
                } else if ((e.scrollPos > e.startPos + 10600) && (e.scrollPos < e.startPos + 12206)) {
                    $("#step5").css("opacity", 0)
                    $("#step6").css("opacity", 1)
                } else if ((e.scrollPos > e.startPos + 12600) && (e.scrollPos < e.startPos + 19000)) {
                    $("#step6").css("opacity", 0)
                    $("#step7").css("opacity", 1)
                } else if ((e.scrollPos > e.startPos + 19000) && (e.scrollPos < e.startPos + 21000)) {
                    $("#step7").css("opacity", 0)
                    $("#step8").css("opacity", 1)
                } else if ((e.scrollPos > e.startPos + 21090) && (e.scrollPos < e.startPos + 23000)) {
                    $("#step8").css("opacity", 0)
                    $("#step9").css("opacity", 1)
                } else if ((e.scrollPos > e.startPos + 23144) && (e.scrollPos < e.startPos + 24888)) {
                    $("#step9").css("opacity", 0)
                    $("#step10").css("opacity", 1)
                } else if ((e.scrollPos > e.startPos + 24888) && (e.scrollPos < e.startPos + 26040)) {
                    $("#step10").css("opacity", 0)
                    $("#step11").css("opacity", 1)
                } else if ((e.scrollPos > e.startPos + 26420) && (e.scrollPos < e.startPos + 27380)) {
                    $("#step11").css("opacity", 0)
                    $("#step12").css("opacity", 1)
                } else if ((e.scrollPos > e.startPos + 27380) && (e.scrollPos < e.startPos + 28000)) {
                    $("#step12").css("opacity", 0)
                    $("#step13").css("opacity", 1)
                }
            } else {
                // $(".telescope-steps").css("opacity", 0)
                if ((e.scrollPos > e.startPos + 1800) && (e.scrollPos < e.startPos + 3000)) {
                    $("#step1").css("opacity", 0)
                } else if ((e.scrollPos > e.startPos + 3000) && (e.scrollPos < e.startPos + 4500)) {
                    $("#step1").css("opacity", 1)
                    $("#step2").css("opacity", 0)
                } else if ((e.scrollPos > e.startPos + 4500) && (e.scrollPos < e.startPos + 7500)) {
                    $("#step2").css("opacity", 1)
                    $("#step3").css("opacity", 0)
                } else if ((e.scrollPos > e.startPos + 7500) && (e.scrollPos < e.startPos + 9000)) {
                    $("#step3").css("opacity", 1)
                    $("#step4").css("opacity", 0)
                } else if ((e.scrollPos > e.startPos + 9000) && (e.scrollPos < e.startPos + 10600)) {
                    $("#step4").css("opacity", 1)
                    $("#step5").css("opacity", 0)
                } else if ((e.scrollPos > e.startPos + 10600) && (e.scrollPos < e.startPos + 12206)) {
                    $("#step5").css("opacity", 1)
                    $("#step6").css("opacity", 0)
                } else if ((e.scrollPos > e.startPos + 12600) && (e.scrollPos < e.startPos + 19000)) {
                    $("#step6").css("opacity", 1)
                    $("#step7").css("opacity", 0)
                } else if ((e.scrollPos > e.startPos + 19000) && (e.scrollPos < e.startPos + 21000)) {
                    $("#step7").css("opacity", 1)
                    $("#step8").css("opacity", 0)
                } else if ((e.scrollPos > e.startPos + 21090) && (e.scrollPos < e.startPos + 23000)) {
                    $("#step8").css("opacity", 1)
                    $("#step9").css("opacity", 0)
                } else if ((e.scrollPos > e.startPos + 23144) && (e.scrollPos < e.startPos + 24888)) {
                    $("#step9").css("opacity", 1)
                    $("#step10").css("opacity", 0)
                } else if ((e.scrollPos > e.startPos + 24888) && (e.scrollPos < e.startPos + 26040)) {
                    $("#step10").css("opacity", 1)
                    $("#step11").css("opacity", 0)
                } else if ((e.scrollPos > e.startPos + 26420) && (e.scrollPos < e.startPos + 27380)) {
                    $("#step11").css("opacity", 1)
                    $("#step12").css("opacity", 0)
                } else if ((e.scrollPos > e.startPos + 27380) && (e.scrollPos < e.startPos + 28000)) {
                    $("#step12").css("opacity", 1)
                    $("#step13").css("opacity", 0)
                }
            }

        })
        .setPin("#telescope")
        .addTo(controller);




    var timelineRocket = new TimelineMax();
    timelineRocket
        .to('#myimg2', 1, {
            scale: 2.5,
            opacity: 1,
            ease: Power0.easeOut
        })
        .from('#backtorocket', 4, {
            y: 700,
            opacity: 1,
            ease: Power0.easeOut
        })
        .to('#backtorocket', 4, {
            y: -700,
            opacity: 1,
            ease: Power0.easeOut
        })
        .to('#myimg2', 4, {
            y: -250,
            scale: 0.9,
            ease: Power0.easeOut
        })
        .to('#myimg2', 2, {
            y: -250,
            ease: Power0.easeOut
        })
        .to('#myimg2', 2, {
            y: -180,
            ease: Power0.easeOut
        }, "one")
        .from('#ariane-svg', 1, {
            y: 100,
            opacity: 0,
            ease: Power0.easeOut
        }, "one")
        .to('#ariane-svg', 4, {
            y: -100,
            opacity: 1,
            ease: Power0.easeOut
        }, "one")
        .from('#fairing-left', 4, {
            x: 150,
            y: -10,
            rotation: 45, transformOrigin: "left 100%",
            ease: Power0.easeOut
        }, "one")
        .from('#fairing-right', 4, {
            x: -150,
            y: -10,
            rotation: -45, transformOrigin: "left 100%",
            ease: Power0.easeOut
        }, "one")
        .from('#rocket-body', 4, {
            y: 200,
            ease: Power0.easeOut
        }, "one")
        .to('#fairing-left', 4, {
            x: 0,
            y: 0,
            rotation: 0, transformOrigin: "left 100%",
            ease: Power0.easeOut
        }, "three")
        .to('#fairing-right', 4, {
            x: 0,
            y: 0,
            rotation: 0, transformOrigin: "left 100%",
            ease: Power0.easeOut
        }, "three")
        .from('#backtorocket2', 4, {
            y: 700,
            opacity: 1,
            ease: Power0.easeOut
        })
        .to('#backtorocket2', 4, {
            y: -700,
            opacity: 1,
            ease: Power0.easeOut
        })
        .from('#backtorocket3', 4, {
            y: 700,
            opacity: 1,
            ease: Power0.easeOut
        })
        .to('#backtorocket3', 4, {
            y: -700,
            opacity: 1,
            ease: Power0.easeOut
        })
        .to('#ariane-svg', 0.2, {
            opacity: 0,
            ease: Power0.easeOut
        }, "two")
        .to('#myimg2', 0.2, {
            opacity: 0,
            ease: Power0.easeOut
        }, "two")

    var scene6 = new ScrollMagic.Scene({ triggerElement: "#ariane", duration: 10000, triggerHook: 0 })
        .setTween(timelineRocket)
        .setPin("#ariane")
        .setClassToggle("#ariane", "active")
        .addTo(controller);

});