var container, stats;
var camera, controls, scene, renderer, model, raycaster, mouse;
var loader, intersects, modelchildren = [];
var datapoints = [
    { "name": "Spacecraft", "position": { "x": 0.8, "y": 10, "z": 0.8 }, "camerapos": { "x": 3.772, "y": 16.64, "z": 6.577 }, "camerarot": { "x": -1.194, "y": 0.207, "z": 0.481 } },
    { "name": "Fairing", "position": { "x": 0.8, "y": 7, "z": 0.8 }, "camerapos": { "x": 1.188, "y": 13.32, "z": 4.604 }, "camerarot": { "x": -1.238, "y": 0.084, "z": 0.238 } },
    { "name": "Centaur upper stage", "position": { "x": -1, "y": 6, "z": 0.2 }, "camerapos": { "x": -5.770, "y": 10.60, "z": 4.168 }, "camerarot": { "x": -1.196, "y": -0.468, "z": -0.854 } },
    { "name": "RL-10-1 Engine", "position": { "x": -1, "y": 4, "z": 0 }, "camerapos": { "x": -6.228, "y": 7.526, "z": -1.478 }, "camerarot": { "x": -1.764, "y": -0.682, "z": -1.872 } },
    { "name": "Atlas V Booster", "position": { "x": -1, "y": 1.01, "z": 0 }, "camerapos": { "x": -3.319, "y": 1.894, "z": 6.176 }, "camerarot": { "x": -0.297, "y": -0.474, "z": -0.139 } },
    { "name": "Solid Rocket Booster", "position": { "x": -1, "y": -5, "z": 0.785 }, "camerapos": { "x": -11.384, "y": -5.384, "z": 2.114 }, "camerarot": { "x": 1.196, "y": -1.100, "z": 1.155 } },
    { "name": "RD-180 Engine", "position": { "x": 0, "y": -11, "z": 1 }, "camerapos": { "x": -2.663, "y": -16.983, "z": 6.234 }, "camerarot": { "x": 1.218, "y": -0.146, "z": 0.377 } },
]

// x: , y: , z: 
var instrumentdata = {
    "Spacecraft": { "subname": "Spacecraft", "desc": "The spacecraft is the protective \"spaceship\" that enables the precious cargo (that is, the Perseverance rover!) to travel between Earth and Mars. It is separate from the launch vehicle that carries the spacecraft and the rover outside of Earth's atmosphere and gravitational pull. The spacecraft includes the mechanical units that safely carry and maneuver the rover through the Martian atmosphere to a landing on Mars." },
    "Fairing": { "subname": "Payload Fairing", "desc": "The spacecraft rides into the sky inside a protective payload fairing atop the Centaur stage. With the payload fairing on top, the vehicle stands approximately 191 feet (58 meters) tall when it is ready for launch." },
    "Centaur upper stage": { "subname": "Fuel and oxidizer", "desc": "Fuel and oxidizer and the vehicle's \"brains\" fires twice, once to insert the vehicle-spacecraft stack into low Earth orbit and then again to accelerate the spacecraft out of Earth orbit and on its way towards Mars. Two interstage adaptors connect the first stage of the Atlas with its Centaur upper stage. The Centaur's has a restartable RL-10 engine from Pratt & Whitney Rocketdyne. This engine uses liquid hydrogen and liquid oxygen and can provide up to about 22,300 pounds (99,200 newtons) of thrust. The Centaur can control its orientation precisely, which is important for managing the direction of thrust while its engine is firing. It carries its own flight control computer and can release its payload with the desired attitude and spin rate." },
    "RL-10-1 Engine": { "subname": "Engine", "desc": "The RL10 is a liquid-fuel cryogenic rocket engine built in the United States by Aerojet Rocketdyne that burns cryogenic liquid hydrogen and liquid oxygen propellants. Modern versions produce up to 110 kN (24,729 lbf) of thrust per engine in vacuum. Three RL10 versions are still in production for the Centaur upper stage of the Atlas V and the DCSS of the Delta IV. " },
    "Atlas V Booster": { "subname": "common core booster", "desc": "Centerpiece of the first stage is the common core booster, 106.5 feet (32.46 meters) in length and 12.5 feet (3.81 meters) in diameter. It has a throttleable, RD-180 engine from a joint venture of Pratt & Whitney Rocketdyne, West Palm Beach, Fla., and NPO Energomash, Moscow. Thermally stable kerosene fuel (type RP-1) and liquid oxygen is loaded shortly before launch into cylindrical fuel tanks that make up about half of the total height of the vehicle. The common core booster can provide thrust of up to about 850,000 pounds (3.8 million newtons) at full throttle." },
    "Solid Rocket Booster": { "subname": "Solid Rocket Motors", "desc": "Four solid rocket boosters strapped onto the common core booster add to the thrust produced by the first stage. Each of these boosters is 64 feet (19.5 meters) long and 61 inches (155 centimeters) in diameter, and delivers about 306,000 pounds (1.36 million newtons) of thrust." },
    "RD-180 Engine": { "subname": "Engine", "desc": "The RD-180 is a rocket engine designed and built in Russia. It features a dual combustion chamber, dual-nozzle design and is fueled by a RP-1/LOX mixture. Currently, RD-180 engines are used for the first stage of the Atlas V launch vehicle." }
}



init();
// animate();

function init() {

    var scene = new THREE.Scene();

    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)

    camera.position.set(0, 0, 300)
    camera.rotation.set(0, 0, 0)

    var camHelper = new THREE.CameraHelper(camera);
    scene.add(camHelper);


    renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);

    // set render auto clear false.
    renderer.autoClear = false;

    // initialize global configuration
    THREE.threeDataConfig = { renderer: renderer, camera: camera };


    document.body.appendChild(renderer.domElement);

    var axesHelper = new THREE.AxesHelper(5);
    scene.add(axesHelper);

    var size = 10;
    var divisions = 10;

    var gridHelper = new THREE.GridHelper(size, divisions);
    scene.add(gridHelper);


    // Load the 3D model
    loader = new THREE.GLTFLoader();
    loader.load('https://www.eunicedhivya.com/james-webb-telescope/scene.gltf', function (gltf) {
        model = gltf.scene
        // model.position.set(0, -1, 0)
        model.scale.set(0.3, 0.3, 0.3)
        model.rotation.set(0, 15, 0)
        scene.add(model);
    });

    //add a light
    // function addLight(source, xpos, ypos, zpos) {
    //     var light = source;
    //     light.position.x = xpos;
    //     light.position.y = ypos;
    //     light.position.z = zpos;
    //     scene.add(light);
    // }


    const light = new THREE.PointLight(0xffffff, 1, 15000);
    light.position.set(0, 100, 500);
    scene.add(light);

    const light2 = new THREE.PointLight(0xffffff, 1, 1000);
    light2.position.set(0, -100, 400);
    scene.add(light2);

    const light3 = new THREE.AmbientLight(0xffffff, 1, 50);
    light3.position.set(0, 50, -600);
    scene.add(light3);

    // const pointLightHelper = new THREE.PointLightHelper(light);
    // // const pointLightHelper2 = new THREE.PointLightHelper(light2);
    // scene.add(pointLightHelper);



    // using reusable function addLight(source, xpos, ypos, zpos) 
    // addLight(new THREE.AmbientLight(0xFFFFFF, 1, 500), 0, 0, 0);
    // addLight(new THREE.PointLight(0xFFFFFF, 1, 500), 0, 0, 0);
    // addLight(new THREE.PointLight(0xFFFFFF, 1, 500), -0.409, 40.470, 600);
    // addLight(new THREE.PointLight(0xFFFFFF, 1, 500), -13.785, -17.626, 600);
    // addLight(new THREE.AmbientLight(0xFFFFFF, 1, 200), 33.947, -0.972, 600);
    // addLight(new THREE.PointLight(0xFFFFFF, 1, 500), -20.429, 3.363, -22.666);
    // addLight(new THREE.PointLight(0xFFFFFF, 0.4, 500), -8.801, 34.722, -11.382);
    // addLight(new THREE.PointLight(0xFFFFFF, 1, 500), -0.409, 40.470, 23.343);
    // addLight(new THREE.PointLight(0xFFFFFF, 1, 500), -13.785, -17.626, 12.763);
    // addLight(new THREE.DirectionalLight(0xFFFFFF, 1, 500), 33.947, -0.972, -8.920);



    var controls = new THREE.OrbitControls(camera);
    controls.enableDamping = true;

    // if ($(window).width() < 756) {
    //     controls.enableZoom = false;
    // }
    // else {
    //     controls.enableZoom = true;
    // }

    function zoomModel(isZoomOut, scale) {
        if (isZoomOut) {
            controls.dollyIn(scale);
        } else {
            controls.dollyOut(scale);
        }
    }

    function onZoomIn() {
        // alert("test")
        controls.zoomIn();

    }
    function onZoomOut() {
        // alert("test")
        controls.zoomOut();

    }

    var zoomIn = document.getElementById('zoom-in');
    var zoomOut = document.getElementById('zoom-out');

    zoomIn.addEventListener('click', onZoomIn, false);
    zoomOut.addEventListener('click', onZoomOut, false);


    var render = function () {

        requestAnimationFrame(render);
        renderer.render(scene, camera)

    }

    render()



    var pickPointObject = null;

    $('.close3dmodel').on("click", function () {
        // $('.model3dbox').css('display', 'block');
        // alert("test")
        $('.model3dbox').removeClass('animate__fadeInLeft');
        $('.model3dbox').addClass('animate__fadeOutLeft');
        controls.enabled = false;
        gsap.to(camera.position, {
            duration: 1,
            x: -9.22,
            y: 5.45,
            z: 17.2,
            onUpdate: () => {
                controls.enabled = false;
            },
            onComplete: () => {
                controls.enabled = true;

            }
        });
        // model.rotation.set(0, -30, 0)
        gsap.to(model.rotation, {
            duration: 1,
            x: 0,
            y: -30,
            z: 0,
            onUpdate: () => {
                controls.enabled = false;

            },
            onComplete: () => {
                controls.enabled = true;


            }
        });

    })
    $('#resetCam').on("click", function () {
        controls.enabled = false;
        gsap.to(camera.position, {
            duration: 1,
            x: 0,
            y: 0,
            z: 450,
            onUpdate: () => {
                controls.enabled = false;
                controls.update();
            },
            onComplete: () => {
                controls.enabled = true;
                // controls.reset();
                // camera.lookAt(scene.position);
            }
        });
        gsap.to(camera.rotation, {
            duration: 1,
            x: 0,
            y: 0,
            z: 0,
            onUpdate: () => {
                controls.enabled = false;
                controls.update();

            },
            onComplete: () => {
                controls.enabled = true;
                // controls.reset();
            }
        });


    })

    $('body').on("click", function () {
        $('.warningicon3d').fadeOut("slow");
    })

    // const Boxmesh = new THREE.Mesh(
    //     new THREE.BoxGeometry(400, 400, 400),
    //     new THREE.MeshPhongMaterial({
    //         color: 0x156289,
    //         emissive: 0x072534,
    //         side: THREE.DoubleSide,
    //         shading: THREE.FlatShading
    //     })
    // );
    // scene.add(Boxmesh);

    var spritey = makeTextSprite(" " + "+" + " ", { fontsize: 40, backgroundColor: { r: 255, g: 100, b: 100, a: 1 } });
    spritey.position.set(0, 200, 170);
    scene.add(spritey);

    var spritey2 = makeTextSprite(" " + "+" + " ", { fontsize: 40, backgroundColor: { r: 255, g: 100, b: 100, a: 1 } });
    spritey2.position.set(-80, 80, 220);
    scene.add(spritey2);
    
    var spritey3 = makeTextSprite(" " + "+" + " ", { fontsize: 40, backgroundColor: { r: 255, g: 100, b: 100, a: 1 } });
    spritey3.position.set(-50, 120, 280);
    scene.add(spritey3);

    var spritey4 = makeTextSprite(" " + "+" + " ", { fontsize: 40, backgroundColor: { r: 255, g: 100, b: 100, a: 1 } });
    spritey4.position.set(150, -10, 0);
    scene.add(spritey4);

    var spritey5 = makeTextSprite(" " + "+" + " ", { fontsize: 40, backgroundColor: { r: 255, g: 100, b: 100, a: 1 } });
    spritey5.position.set(0, 0, 0);
    scene.add(spritey5);

    var spritey6 = makeTextSprite(" " + "+" + " ", { fontsize: 40, backgroundColor: { r: 255, g: 100, b: 100, a: 1 } });
    spritey6.position.set(-35, 170, -80);
    scene.add(spritey6);

    var spritey7 = makeTextSprite(" " + "+" + " ", { fontsize: 40, backgroundColor: { r: 255, g: 100, b: 100, a: 1 } });
    spritey7.position.set(0, 0, 0);
    scene.add(spritey7);

    var spritey8 = makeTextSprite(" " + "+" + " ", { fontsize: 40, backgroundColor: { r: 255, g: 100, b: 100, a: 1 } });
    spritey8.position.set(-50, 25, 240);
    scene.add(spritey8);

    var spritey9 = makeTextSprite(" " + "+" + " ", { fontsize: 40, backgroundColor: { r: 255, g: 100, b: 100, a: 1 } });
    spritey9.position.set(30, 15, 200);
    scene.add(spritey9);
    // =======================================================
    // Anotation
    // ==========================================================

    function makeTextSprite(message, parameters) {
        if (parameters === undefined) parameters = {};

        var fontface = parameters.hasOwnProperty("fontface") ?
            parameters["fontface"] : "Arial";

        var fontsize = parameters.hasOwnProperty("fontsize") ?
            parameters["fontsize"] : 24;

        var borderThickness = parameters.hasOwnProperty("borderThickness") ?
            parameters["borderThickness"] : 4;

        var borderColor = parameters.hasOwnProperty("borderColor") ?
            parameters["borderColor"] : { r: 0, g: 0, b: 0, a: 1.0 };

        var backgroundColor = parameters.hasOwnProperty("backgroundColor") ?
            parameters["backgroundColor"] : { r: 255, g: 255, b: 255, a: 1.0 };

        //var spriteAlignment = parameters.hasOwnProperty("alignment") ?
        //	parameters["alignment"] : THREE.SpriteAlignment.topLeft;

        // var spriteAlignment = THREE.SpriteAlignment.topLeft;


        var canvas = document.createElement('canvas');
        var context = canvas.getContext('2d');
        context.font = "Bold " + fontsize + "px " + fontface;

        // get size data (height depends only on font size)
        var metrics = context.measureText(message);
        var textWidth = metrics.width;

        // background color
        context.fillStyle = "rgba(" + backgroundColor.r + "," + backgroundColor.g + ","
            + backgroundColor.b + "," + backgroundColor.a + ")";
        // border color
        context.strokeStyle = "rgba(" + borderColor.r + "," + borderColor.g + ","
            + borderColor.b + "," + borderColor.a + ")";

        context.lineWidth = borderThickness;
        roundRect(context, borderThickness / 2, borderThickness / 2, textWidth + borderThickness, fontsize * 1.4 + borderThickness, 6);
        // 1.4 is extra height factor for text below baseline: g,j,p,q.

        // text color
        context.fillStyle = "rgba(255, 255, 255, 1.0)";
        context.textAlign = "center"

        // context.fillText(message, borderThickness, fontsize + borderThickness);
        context.fillText(message, borderThickness + 30, fontsize + borderThickness + 30);

        // canvas contents will be used for a texture
        var texture = new THREE.Texture(canvas)
        texture.needsUpdate = true;

        var spriteMaterial = new THREE.SpriteMaterial(
            { map: texture, useScreenCoordinates: false, });
        var sprite = new THREE.Sprite(spriteMaterial);
        sprite.scale.set(200, 100, 2.0);
        return sprite;
    }

    function roundRect(ctx, x, y, w, h, r) {
        // ctx.beginPath();
        // ctx.moveTo(x + r, y);
        // ctx.lineTo(x + w - r, y);
        // ctx.quadraticCurveTo(x + w, y, x + w, y + r);
        // ctx.lineTo(x + w, y + h - r);
        // ctx.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
        // ctx.lineTo(x + r, y + h);
        // ctx.quadraticCurveTo(x, y + h, x, y + h - r);
        // ctx.lineTo(x, y + r);
        // ctx.quadraticCurveTo(x, y, x + r, y);
        // ctx.closePath();
        // ctx.fill();
        // ctx.stroke();
        var x = 32;
        var y = 53;
        var radius = 30;
        var startAngle = 0;
        var endAngle = Math.PI * 2;

        ctx.fillStyle = 'rgb(0, 0, 0)';
        ctx.beginPath();
        ctx.arc(x, y, radius, startAngle, endAngle);
        ctx.fill();

        ctx.strokeStyle = 'rgb(255, 255, 255)';
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.arc(x, y, radius, startAngle, endAngle);
        ctx.stroke();
    }




    var domEvents = new THREEx.DomEvents(camera, renderer.domElement)

    domEvents.addEventListener(spritey, 'click', function (event) {
        $(".annotation").html("Text1")
    }, false)
    domEvents.addEventListener(spritey2, 'click', function (event) {
        $(".annotation").html("Text2")
    }, false)
    domEvents.addEventListener(spritey3, 'click', function (event) {
        $(".annotation").html("Text3")
    }, false)
    domEvents.addEventListener(spritey4, 'click', function (event) {
        $(".annotation").html("Text4")
    }, false)
    domEvents.addEventListener(spritey5, 'click', function (event) {
        $(".annotation").html("Text5")
    }, false)
    domEvents.addEventListener(spritey6, 'click', function (event) {
        $(".annotation").html("Text6")
    }, false)
    domEvents.addEventListener(spritey7, 'click', function (event) {
        $(".annotation").html("Text7")
    }, false)
    domEvents.addEventListener(spritey8, 'click', function (event) {
        $(".annotation").html("Text8")
    }, false)
    domEvents.addEventListener(spritey9, 'click', function (event) {
        $(".annotation").html("Text9")
    }, false)




    // =======================================================
    // End of Anotation
    // ==========================================================




} //init()



window.addEventListener('resize', () => {
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.aspect = window.innerWidth / window.innerHeight;

    // camera.updateProjectionMatrix();
})