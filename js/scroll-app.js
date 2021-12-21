document.getElementById('enable3dwindow').addEventListener("click", function () {
    document.getElementById('cover-3d').style.display = "none";
    document.getElementsByTagName('body')[0].style.overflow = "hidden";
    // document.getElementById('model').style.transform = "scale(1.5)";
    // alert("test");
})
document.getElementById('disable3dwindow').addEventListener("click", function () {
    document.getElementById('cover-3d').style.display = "block";
    document.getElementsByTagName('body')[0].style = "null";
    // document.getElementById('model').style.transform = "scale(1.5)";
    // alert("test");
})

var images = [
    "http://localhost/tv9-interactives/james-webb-telescope/assets/imgs/image-seq/ramped/ezgif-frame-001.jpg",
    "http://localhost/tv9-interactives/james-webb-telescope/assets/imgs/image-seq/ramped/ezgif-frame-002.jpg",
    "http://localhost/tv9-interactives/james-webb-telescope/assets/imgs/image-seq/ramped/ezgif-frame-003.jpg",
    "http://localhost/tv9-interactives/james-webb-telescope/assets/imgs/image-seq/ramped/ezgif-frame-004.jpg",
    "http://localhost/tv9-interactives/james-webb-telescope/assets/imgs/image-seq/ramped/ezgif-frame-005.jpg",
    "http://localhost/tv9-interactives/james-webb-telescope/assets/imgs/image-seq/ramped/ezgif-frame-006.jpg",
    "http://localhost/tv9-interactives/james-webb-telescope/assets/imgs/image-seq/ramped/ezgif-frame-007.jpg",
    "http://localhost/tv9-interactives/james-webb-telescope/assets/imgs/image-seq/ramped/ezgif-frame-008.jpg",
    "http://localhost/tv9-interactives/james-webb-telescope/assets/imgs/image-seq/ramped/ezgif-frame-009.jpg",
    "http://localhost/tv9-interactives/james-webb-telescope/assets/imgs/image-seq/ramped/ezgif-frame-010.jpg",
    "http://localhost/tv9-interactives/james-webb-telescope/assets/imgs/image-seq/ramped/ezgif-frame-011.jpg",
    "http://localhost/tv9-interactives/james-webb-telescope/assets/imgs/image-seq/ramped/ezgif-frame-012.jpg",
    "http://localhost/tv9-interactives/james-webb-telescope/assets/imgs/image-seq/ramped/ezgif-frame-013.jpg",
    "http://localhost/tv9-interactives/james-webb-telescope/assets/imgs/image-seq/ramped/ezgif-frame-014.jpg",
    "http://localhost/tv9-interactives/james-webb-telescope/assets/imgs/image-seq/ramped/ezgif-frame-015.jpg",
    "http://localhost/tv9-interactives/james-webb-telescope/assets/imgs/image-seq/ramped/ezgif-frame-016.jpg",
    "http://localhost/tv9-interactives/james-webb-telescope/assets/imgs/image-seq/ramped/ezgif-frame-017.jpg",
    "http://localhost/tv9-interactives/james-webb-telescope/assets/imgs/image-seq/ramped/ezgif-frame-018.jpg",
    "http://localhost/tv9-interactives/james-webb-telescope/assets/imgs/image-seq/ramped/ezgif-frame-019.jpg",
    "http://localhost/tv9-interactives/james-webb-telescope/assets/imgs/image-seq/ramped/ezgif-frame-020.jpg",
    "http://localhost/tv9-interactives/james-webb-telescope/assets/imgs/image-seq/ramped/ezgif-frame-021.jpg",
    "http://localhost/tv9-interactives/james-webb-telescope/assets/imgs/image-seq/ramped/ezgif-frame-022.jpg",
    "http://localhost/tv9-interactives/james-webb-telescope/assets/imgs/image-seq/ramped/ezgif-frame-023.jpg",
    "http://localhost/tv9-interactives/james-webb-telescope/assets/imgs/image-seq/ramped/ezgif-frame-024.jpg",
    "http://localhost/tv9-interactives/james-webb-telescope/assets/imgs/image-seq/ramped/ezgif-frame-025.jpg",
    "http://localhost/tv9-interactives/james-webb-telescope/assets/imgs/image-seq/ramped/ezgif-frame-026.jpg",
    "http://localhost/tv9-interactives/james-webb-telescope/assets/imgs/image-seq/ramped/ezgif-frame-027.jpg",
    "http://localhost/tv9-interactives/james-webb-telescope/assets/imgs/image-seq/ramped/ezgif-frame-028.jpg",
    "http://localhost/tv9-interactives/james-webb-telescope/assets/imgs/image-seq/ramped/ezgif-frame-029.jpg",
    "http://localhost/tv9-interactives/james-webb-telescope/assets/imgs/image-seq/ramped/ezgif-frame-030.jpg",
    "http://localhost/tv9-interactives/james-webb-telescope/assets/imgs/image-seq/ramped/ezgif-frame-031.jpg",
    "http://localhost/tv9-interactives/james-webb-telescope/assets/imgs/image-seq/ramped/ezgif-frame-032.jpg",
    "http://localhost/tv9-interactives/james-webb-telescope/assets/imgs/image-seq/ramped/ezgif-frame-033.jpg",
    "http://localhost/tv9-interactives/james-webb-telescope/assets/imgs/image-seq/ramped/ezgif-frame-034.jpg",
    "http://localhost/tv9-interactives/james-webb-telescope/assets/imgs/image-seq/ramped/ezgif-frame-035.jpg",
    "http://localhost/tv9-interactives/james-webb-telescope/assets/imgs/image-seq/ramped/ezgif-frame-036.jpg",
    "http://localhost/tv9-interactives/james-webb-telescope/assets/imgs/image-seq/ramped/ezgif-frame-037.jpg",
    "http://localhost/tv9-interactives/james-webb-telescope/assets/imgs/image-seq/ramped/ezgif-frame-038.jpg",
    "http://localhost/tv9-interactives/james-webb-telescope/assets/imgs/image-seq/ramped/ezgif-frame-039.jpg",
    "http://localhost/tv9-interactives/james-webb-telescope/assets/imgs/image-seq/ramped/ezgif-frame-039.jpg",
    "http://localhost/tv9-interactives/james-webb-telescope/assets/imgs/image-seq/ramped/ezgif-frame-040.jpg",
    "http://localhost/tv9-interactives/james-webb-telescope/assets/imgs/image-seq/ramped/ezgif-frame-041.jpg",
    "http://localhost/tv9-interactives/james-webb-telescope/assets/imgs/image-seq/ramped/ezgif-frame-042.jpg",
    "http://localhost/tv9-interactives/james-webb-telescope/assets/imgs/image-seq/ramped/ezgif-frame-043.jpg",
    "http://localhost/tv9-interactives/james-webb-telescope/assets/imgs/image-seq/ramped/ezgif-frame-044.jpg",
    "http://localhost/tv9-interactives/james-webb-telescope/assets/imgs/image-seq/ramped/ezgif-frame-045.jpg",
    "http://localhost/tv9-interactives/james-webb-telescope/assets/imgs/image-seq/ramped/ezgif-frame-046.jpg",
    "http://localhost/tv9-interactives/james-webb-telescope/assets/imgs/image-seq/ramped/ezgif-frame-047.jpg",
    "http://localhost/tv9-interactives/james-webb-telescope/assets/imgs/image-seq/ramped/ezgif-frame-048.jpg",
    "http://localhost/tv9-interactives/james-webb-telescope/assets/imgs/image-seq/ramped/ezgif-frame-049.jpg",
    "http://localhost/tv9-interactives/james-webb-telescope/assets/imgs/image-seq/ramped/ezgif-frame-050.jpg",
    "http://localhost/tv9-interactives/james-webb-telescope/assets/imgs/image-seq/ramped/ezgif-frame-051.jpg",
    "http://localhost/tv9-interactives/james-webb-telescope/assets/imgs/image-seq/ramped/ezgif-frame-052.jpg",
    "http://localhost/tv9-interactives/james-webb-telescope/assets/imgs/image-seq/ramped/ezgif-frame-053.jpg",
    "http://localhost/tv9-interactives/james-webb-telescope/assets/imgs/image-seq/ramped/ezgif-frame-054.jpg",
    "http://localhost/tv9-interactives/james-webb-telescope/assets/imgs/image-seq/ramped/ezgif-frame-055.jpg",
    "http://localhost/tv9-interactives/james-webb-telescope/assets/imgs/image-seq/ramped/ezgif-frame-056.jpg",
    "http://localhost/tv9-interactives/james-webb-telescope/assets/imgs/image-seq/ramped/ezgif-frame-057.jpg",
    "http://localhost/tv9-interactives/james-webb-telescope/assets/imgs/image-seq/ramped/ezgif-frame-058.jpg",
    "http://localhost/tv9-interactives/james-webb-telescope/assets/imgs/image-seq/ramped/ezgif-frame-059.jpg",
    "http://localhost/tv9-interactives/james-webb-telescope/assets/imgs/image-seq/ramped/ezgif-frame-060.jpg",
    "http://localhost/tv9-interactives/james-webb-telescope/assets/imgs/image-seq/ramped/ezgif-frame-061.jpg",
    "http://localhost/tv9-interactives/james-webb-telescope/assets/imgs/image-seq/ramped/ezgif-frame-062.jpg",
    "http://localhost/tv9-interactives/james-webb-telescope/assets/imgs/image-seq/ramped/ezgif-frame-062.jpg",
    "http://localhost/tv9-interactives/james-webb-telescope/assets/imgs/image-seq/ramped/ezgif-frame-063.jpg",
    "http://localhost/tv9-interactives/james-webb-telescope/assets/imgs/image-seq/ramped/ezgif-frame-064.jpg",
    "http://localhost/tv9-interactives/james-webb-telescope/assets/imgs/image-seq/ramped/ezgif-frame-065.jpg",
    "http://localhost/tv9-interactives/james-webb-telescope/assets/imgs/image-seq/ramped/ezgif-frame-066.jpg",
    "http://localhost/tv9-interactives/james-webb-telescope/assets/imgs/image-seq/ramped/ezgif-frame-067.jpg",
    "http://localhost/tv9-interactives/james-webb-telescope/assets/imgs/image-seq/ramped/ezgif-frame-068.jpg",
    "http://localhost/tv9-interactives/james-webb-telescope/assets/imgs/image-seq/ramped/ezgif-frame-069.jpg",
    "http://localhost/tv9-interactives/james-webb-telescope/assets/imgs/image-seq/ramped/ezgif-frame-070.jpg",
    "http://localhost/tv9-interactives/james-webb-telescope/assets/imgs/image-seq/ramped/ezgif-frame-071.jpg",
    "http://localhost/tv9-interactives/james-webb-telescope/assets/imgs/image-seq/ramped/ezgif-frame-072.jpg",
    "http://localhost/tv9-interactives/james-webb-telescope/assets/imgs/image-seq/ramped/ezgif-frame-073.jpg",
    "http://localhost/tv9-interactives/james-webb-telescope/assets/imgs/image-seq/ramped/ezgif-frame-074.jpg",
    "http://localhost/tv9-interactives/james-webb-telescope/assets/imgs/image-seq/ramped/ezgif-frame-075.jpg",
    "http://localhost/tv9-interactives/james-webb-telescope/assets/imgs/image-seq/ramped/ezgif-frame-076.jpg",
    "http://localhost/tv9-interactives/james-webb-telescope/assets/imgs/image-seq/ramped/ezgif-frame-077.jpg",
    "http://localhost/tv9-interactives/james-webb-telescope/assets/imgs/image-seq/ramped/ezgif-frame-078.jpg",
    "http://localhost/tv9-interactives/james-webb-telescope/assets/imgs/image-seq/ramped/ezgif-frame-079.jpg",
    "http://localhost/tv9-interactives/james-webb-telescope/assets/imgs/image-seq/ramped/ezgif-frame-080.jpg",
    "http://localhost/tv9-interactives/james-webb-telescope/assets/imgs/image-seq/ramped/ezgif-frame-081.jpg",
    "http://localhost/tv9-interactives/james-webb-telescope/assets/imgs/image-seq/ramped/ezgif-frame-082.jpg",
    "http://localhost/tv9-interactives/james-webb-telescope/assets/imgs/image-seq/ramped/ezgif-frame-083.jpg",
    "http://localhost/tv9-interactives/james-webb-telescope/assets/imgs/image-seq/ramped/ezgif-frame-084.jpg",
    "http://localhost/tv9-interactives/james-webb-telescope/assets/imgs/image-seq/ramped/ezgif-frame-085.jpg",
    "http://localhost/tv9-interactives/james-webb-telescope/assets/imgs/image-seq/ramped/ezgif-frame-086.jpg",
    "http://localhost/tv9-interactives/james-webb-telescope/assets/imgs/image-seq/ramped/ezgif-frame-087.jpg",
    "http://localhost/tv9-interactives/james-webb-telescope/assets/imgs/image-seq/ramped/ezgif-frame-088.jpg",
    "http://localhost/tv9-interactives/james-webb-telescope/assets/imgs/image-seq/ramped/ezgif-frame-089.jpg",
    "http://localhost/tv9-interactives/james-webb-telescope/assets/imgs/image-seq/ramped/ezgif-frame-090.jpg",
    "http://localhost/tv9-interactives/james-webb-telescope/assets/imgs/image-seq/ramped/ezgif-frame-091.jpg",
    "http://localhost/tv9-interactives/james-webb-telescope/assets/imgs/image-seq/ramped/ezgif-frame-092.jpg",
    "http://localhost/tv9-interactives/james-webb-telescope/assets/imgs/image-seq/ramped/ezgif-frame-093.jpg",
    "http://localhost/tv9-interactives/james-webb-telescope/assets/imgs/image-seq/ramped/ezgif-frame-094.jpg",
    "http://localhost/tv9-interactives/james-webb-telescope/assets/imgs/image-seq/ramped/ezgif-frame-095.jpg",
    "http://localhost/tv9-interactives/james-webb-telescope/assets/imgs/image-seq/ramped/ezgif-frame-096.jpg",
    "http://localhost/tv9-interactives/james-webb-telescope/assets/imgs/image-seq/ramped/ezgif-frame-097.jpg",
    "http://localhost/tv9-interactives/james-webb-telescope/assets/imgs/image-seq/ramped/ezgif-frame-098.jpg",
    "http://localhost/tv9-interactives/james-webb-telescope/assets/imgs/image-seq/ramped/ezgif-frame-099.jpg",
    "http://localhost/tv9-interactives/james-webb-telescope/assets/imgs/image-seq/ramped/ezgif-frame-100.jpg",
    "http://localhost/tv9-interactives/james-webb-telescope/assets/imgs/image-seq/ramped/ezgif-frame-101.jpg",
    "http://localhost/tv9-interactives/james-webb-telescope/assets/imgs/image-seq/ramped/ezgif-frame-102.jpg",
    "http://localhost/tv9-interactives/james-webb-telescope/assets/imgs/image-seq/ramped/ezgif-frame-103.jpg",
    "http://localhost/tv9-interactives/james-webb-telescope/assets/imgs/image-seq/ramped/ezgif-frame-104.jpg",
    "http://localhost/tv9-interactives/james-webb-telescope/assets/imgs/image-seq/ramped/ezgif-frame-105.jpg",
    "http://localhost/tv9-interactives/james-webb-telescope/assets/imgs/image-seq/ramped/ezgif-frame-106.jpg",
    "http://localhost/tv9-interactives/james-webb-telescope/assets/imgs/image-seq/ramped/ezgif-frame-107.jpg",
    "http://localhost/tv9-interactives/james-webb-telescope/assets/imgs/image-seq/ramped/ezgif-frame-108.jpg",
    "http://localhost/tv9-interactives/james-webb-telescope/assets/imgs/image-seq/ramped/ezgif-frame-109.jpg",
    "http://localhost/tv9-interactives/james-webb-telescope/assets/imgs/image-seq/ramped/ezgif-frame-110.jpg",
    "http://localhost/tv9-interactives/james-webb-telescope/assets/imgs/image-seq/ramped/ezgif-frame-111.jpg",
    "http://localhost/tv9-interactives/james-webb-telescope/assets/imgs/image-seq/ramped/ezgif-frame-112.jpg",
    "http://localhost/tv9-interactives/james-webb-telescope/assets/imgs/image-seq/ramped/ezgif-frame-113.jpg",
    "http://localhost/tv9-interactives/james-webb-telescope/assets/imgs/image-seq/ramped/ezgif-frame-114.jpg",
];


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
        .from('#origins-image', 500, {
            opacity: 0,
            ease: Power0.easeOut
        })
        .to('#origins-image', 500, {
            scale: 2,
            ease: Power0.easeOut
        })
        .from('#origins-para1', 1000, {
            y: 20,
            top: "100vh",
            ease: Power0.easeOut
        })
        .to('#origins-para1', 1000, {
            y: -20,
            top: "-100vh",
            ease: Power0.easeOut
        })
        .from('#origins-para2', 1000, {
            y: 20,
            top: "100vh",
            ease: Power0.easeOut
        })
        .to('#origins-para2', 1000, {
            y: -20,
            top: "-100vh",
            ease: Power0.easeOut
        })

    var scene2 = new ScrollMagic.Scene({
        triggerElement: '#origins',
        duration: '200%',
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
        duration: '200%',
        triggerHook: 0,
    }).setTween(timelineTheLegrange).setPin("#the-lagrange").setClassToggle("#the-lagrange", "active").addTo(controller)



    var obj = { curImg: 0 };

    // create tween
    var tweenImg = new TimelineMax();

    var reverseImg = images.reverse()

    tweenImg.to(obj, 0.5,
        {
            curImg: reverseImg.length - 1,	// animate propery curImg to number of images
            roundProps: "curImg",				// only integers so it can be used as an array index
            repeat: 0,									// repeat 3 times
            immediateRender: true,			// load first image automatically
            ease: Linear.easeNone,			// show every image the same ammount of time
            onUpdate: function () {
                $("#myimg").attr("src", reverseImg[obj.curImg]); // set the image source
            }
        }
    );
    // var tweenImg = TweenMax.to(obj, 0.5,
    //     {
    //         curImg: images.length - 1,	// animate propery curImg to number of images
    //         roundProps: "curImg",				// only integers so it can be used as an array index
    //         repeat: 3,									// repeat 3 times
    //         immediateRender: true,			// load first image automatically
    //         ease: Linear.easeNone,			// show every image the same ammount of time
    //         onUpdate: function () {
    //             $("#myimg").attr("src", images[obj.curImg]); // set the image source
    //         }
    //     }
    // );

    var scene5 = new ScrollMagic.Scene({ triggerElement: "#telescope", duration: 5000, triggerHook: 0 })
        .setTween(tweenImg)
        .setPin("#telescope")
        .addIndicators() // add indicators (requires plugin)
        .addTo(controller);


    // // Grab the target video duration
    // videoDuration = video.duration;
    // console.log(video.duration * 1000);

    // // Tween the video from beginning to end
    // var videoTween = TweenMax.to(video, 1, {
    //     currentTime: videoDuration,
    //     ease: Quad.easeOut,
    //     overwrite: true,
    //     pause: true
    // });

    // // Build ScrollMagic Scene
    // var scene5 = new ScrollMagic.Scene({ triggerElement: "#telescope", duration: videoDuration * 1000, offset: 0 })
    //     .setTween(videoTween) // Add tween to the scene
    //     .addIndicators({ name: "video play" }) // Add indicators to the scrollbar							
    //     .setPin("#telescope") // Add indicators to the scrollbar	
    //     .setClassToggle("#telescope", "active")
    //     .addTo(controller); // Add scene to the controller

    // var scene6 = new ScrollMagic.Scene({
    //     triggerElement: '#jwst-deployment',
    //     duration: '100%',
    //     triggerHook: 0,
    // }).setTween().setPin("#jwst-deployment").setClassToggle("#jwst-deployment", "active").addTo(controller)

});