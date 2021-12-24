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

    camera.position.set(0, 120, 600)
    camera.rotation.set(0, 0, 0)

    // var camHelper = new THREE.CameraHelper(camera);
    // scene.add(camHelper);


    renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);

    // set render auto clear false.
    renderer.autoClear = false;

    // initialize global configuration
    THREE.threeDataConfig = { renderer: renderer, camera: camera };


    document.body.appendChild(renderer.domElement);

    // var axesHelper = new THREE.AxesHelper(5);
    // scene.add(axesHelper);

    // var size = 10;
    // var divisions = 10;

    // var gridHelper = new THREE.GridHelper(size, divisions);
    // scene.add(gridHelper);


    // Load the 3D model
    loader = new THREE.GLTFLoader();
    // loader.load('assets/3d/scene-light3.gltf', function (gltf) {
    loader.load('https://www.eunicedhivya.com/james-webb-telescope/scene-light3.gltf', function (gltf) {
        model = gltf.scene
        // model.position.set(0, -1, 0)
        model.scale.set(0.3, 0.3, 0.3)
        model.rotation.set(0, 15, 0)
        scene.add(model);
    });

    //add a light

    var light = new THREE.DirectionalLight(0xffffff, 1, 50000);
    light.position.set(-1.7, 9.9, 10);
    scene.add(light);

    var light2 = new THREE.DirectionalLight(0xffffff, 1, 50000);
    light2.position.set(5, 10, -10);
    scene.add(light2);

    var light3 = new THREE.DirectionalLight(0xffffff, 1, 50000);
    light3.position.set(5, -16.3, 10);
    scene.add(light3);

    var light4 = new THREE.DirectionalLight(0xffffff, 1, 50000);
    light4.position.set(1.3, -0.9, -10);
    scene.add(light4);


    var light5 = new THREE.AmbientLight(0xffffff, 1, 200000);
    light5.position.set(0, 0, 0);
    scene.add(light5);

    // ================ Old
    // const light = new THREE.DirectionalLight(0xffffff, 1, 25000);
    // light.position.set(5, 8, 9);
    // scene.add(light);


    // const light3 = new THREE.AmbientLight(0xffffff, 1, 80000);
    // light3.position.set(1, 3, -28);
    // scene.add(light3);
    // =========================


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
            y: 120,
            z: 600,
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


    })
    $('#item1').on("click", function () {
        var html = '<p><strong>The Optical Telescope Element</strong></p> <p>The primary mirror, the secondary mirror and the supporting backplane are together known as OTE. It gathers the light from the objects of study and directs it to the science instruments. </p>'
        // x: -182.36443795550838, y: 243.78631200069486, z: 299.82279151508703
        controls.enabled = false;
        gsap.to(camera.position, {
            duration: 1,
            x: -182.36,
            y: 243.78,
            z: 299.82,
            onUpdate: () => {
                controls.enabled = false;
                controls.update();
            },
            onComplete: () => {
                controls.enabled = true;
            }
        });
        // var resetColor = new THREE.Color(0xffffff);
        // var targetColor = new THREE.Color(0xff0000);
        // TweenMax.to(marker1.material.color, 2, {
        //     r: targetColor.r,
        //     g: targetColor.g,
        //     b: targetColor.b
        // });

        $(".annotation").html(html)

    })
    $('#item2').on("click", function () {
        var html = '<p><strong>Primary Mirror</strong></p> <p>The segmented primary mirror is made up of beryllium coated with gold, and captures the infrared light coming from distant and faint objects. It bounces the incoming light towards the secondary mirror located at the front. </p>'
        // x: -106.25393666792517, y: 196.95737850335908, z: 314.06028706911445
        controls.enabled = false;
        gsap.to(camera.position, {
            duration: 1,
            x: -106.25,
            y: 196.95,
            z: 314.06,
            onUpdate: () => {
                controls.enabled = false;
                controls.update();
            },
            onComplete: () => {
                controls.enabled = true;
            }
        });

        $(".annotation").html(html)

    })
    $('#item3').on("click", function () {
        var html = '<p><strong>Secondary Mirror</strong></p> <p>the platform which brings together all the support functions: orbit control and maintenance, power supply, thermal control and communications with Earth and between the observatory equipment.</p>'
        //x: -255.37629420972843, y: 129.39370236052773, z: 346.9164668418456
        controls.enabled = false;
        gsap.to(camera.position, {
            duration: 1,
            x: -255.37,
            y: 129.39,
            z: 346.91,
            onUpdate: () => {
                controls.enabled = false;
                controls.update();
            },
            onComplete: () => {
                controls.enabled = true;
            }
        });

        $(".annotation").html(html)

    })
    $('#item4').on("click", function () {
        var html = '<p><strong>ISIM</strong></p> <p>The light captured by the OTE is sent to the ISIM, which is at the back of the spacecraft, behind the backplane. The ISIM is the heart of the observatory. It integrates the four major instruments on Webb, namely, Near-infrared camera, Near-infrared spectrograph, Mid-infrared instrument, Near-infrared imager and slitless spectrograph as well as the supporting subsystems. </p>'
        //x: 273.9136362688889, y: -125.6758405692897, z: -240.5870151590867
        controls.enabled = false;
        gsap.to(camera.position, {
            duration: 1,
            x: 299.84,
            y: 217.51,
            z: -107.22,
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

        $(".annotation").html(html)

    })
    $('#item5').on("click", function () {
        var html = '<p><strong>The spacecraft bus</strong></p> <p>The spacecraft bus houses all the command and control subsystems, and provides electrical power, attitude control, communications, data handling, propulsion and thermal control to the spacecraft. The bus also houses the thrusters and the fuel. </p>'
        //{x: -59.51715535040868, y: -129.57618532092255, z: 212.41952869089585}
        controls.enabled = false;
        gsap.to(camera.position, {
            duration: 1,
            x: -59.51,
            y: -129.57,
            z: 212.41,
            onUpdate: () => {
                controls.enabled = false;
                controls.update();
            },
            onComplete: () => {
                controls.enabled = true;
            }
        });

        $(".annotation").html(html)

    })
    $('#item6').on("click", function () {
        var html = '<p><strong>Sunshield</strong></p> <p>The sunshield is made up of five kite shaped layers that each have a specific thickness, size and material composition to act as a passive radiator. Micrometeorite impacts can tear the layers, so they have rip-stops arranged in grids to prevent the tears from spreading. </p>'
        // x: 18.246989624581754, y: 203.93434046228484, z: 400.48551655551853
        controls.enabled = false;
        gsap.to(camera.position, {
            duration: 1,
            x: 18.24,
            y: 203.93,
            z: 400.48,
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

        $(".annotation").html(html)

    })
    $('#item7').on("click", function () {
        var html = '<p><strong>Solar panel</strong></p> <p> Webb\'s 20 foot solar panel is folded up like an accordion at launch, and is designed to provide all the energy requirements of the spacecraft. </p>'
        // x: 222.55358757985198, y: -86.85289060711541, z: -228.56628236938909
        controls.enabled = false;
        gsap.to(camera.position, {
            duration: 1,
            x: 222.55,
            y: -86.85,
            z: -228.56,
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

        $(".annotation").html(html)

    })

    $('body').on("click", function () {
        $('.warningicon3d').fadeOut("slow");
    })

    var geometrySphere = new THREE.SphereGeometry(6, 32, 32); // (radius, widthSegments, heightSegments)
    var materialSphere = new THREE.MeshBasicMaterial({ color: 0xffffff });

    var marker1 = new THREE.Mesh(geometrySphere, materialSphere);
    marker1.position.set(-50, 250, 0);
    // marker1.position.set(0, 200, 80); //original setting
    scene.add(marker1);

    // var geometrySphere1 = new THREE.SphereGeometry(6, 32, 32); // (radius, widthSegments, heightSegments)
    // var materialSphere1 = new THREE.MeshBasicMaterial({ color: 0xffffff });
    var marker3 = new THREE.Mesh(geometrySphere, materialSphere);
    marker3.position.set(-200, 120, 250);
    // marker1.position.set(0, 200, 80); //original setting
    scene.add(marker3);

    // var geometrySphere3 = new THREE.SphereGeometry(6, 32, 32); // (radius, widthSegments, heightSegments)
    // var materialSphere3 = new THREE.MeshBasicMaterial({ color: 0xffffff });
    // var marker3 = new THREE.Mesh(geometrySphere3, materialSphere3);
    // marker3.position.set(40, 120, 120);
    // scene.add(marker3);

    // var marker4 = new THREE.Mesh(geometrySphere, materialSphere);
    // marker4.position.set(0, -80, 80);
    // scene.add(marker4);

    // var marker5 = new THREE.Mesh(geometrySphere, materialSphere);
    // marker5.position.set(0, 10, 150);
    // scene.add(marker5);

    // var marker6 = new THREE.Mesh(geometrySphere, materialSphere);
    // marker6.position.set(50, 10, 150);
    // scene.add(marker6);

    // var marker7 = new THREE.Mesh(geometrySphere, materialSphere);
    // marker7.position.set(0, 200, 0);
    // scene.add(marker7);

    // var marker8 = new THREE.Mesh(geometrySphere, materialSphere);
    // marker8.position.set(0, 200, 0);
    // scene.add(marker8);

    // var domEvents = new THREEx.DomEvents(camera, renderer.domElement)

    // domEvents.addEventListener(marker1, 'click', function (event) {
    //     $(".annotation").html("Text1")
    // }, false)

    // domEvents.addEventListener(marker2, 'click', function (event) {
    //     // Vector3 {x: -184.55814843743806, y: 219.4443052128568, z: 407.63598495424117}
    //     $(".annotation").html("Text2")
    // }, false)

    // domEvents.addEventListener(marker3, 'click', function (event) {
    //     $(".annotation").html("Text3")
    // }, false)
    // domEvents.addEventListener(marker7, 'click', function (event) {
    //     var html = '<p><strong>ISIM</strong></p> <p> The payload which bears the name ISIM (Integrated Science Instrument Module) and has the shape of a quadrangular box in which are grouped the four scientific instruments which must analyze the infrared radiation collected.</p>'
    //     // x: 516.2102497201661, y: 252.31734295943687, z: -210.3875864344879
    //     controls.enabled = false;
    //     gsap.to(camera.position, {
    //         duration: 1,
    //         x: 516.21,
    //         y: 252.31,
    //         z: -210.38,
    //         onUpdate: () => {
    //             controls.enabled = false;
    //             controls.update();
    //         },
    //         onComplete: () => {
    //             controls.enabled = true;
    //             // controls.reset();
    //             // camera.lookAt(scene.position);
    //         }
    //     });

    //     $(".annotation").html(html)
    // }, false)


    // =======================================================
    // End of Anotation
    // ==========================================================




} //init()



window.addEventListener('resize', () => {
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.aspect = window.innerWidth / window.innerHeight;

    // camera.updateProjectionMatrix();
})