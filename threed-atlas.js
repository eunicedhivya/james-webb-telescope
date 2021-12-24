var container, stats;
var camera, controls, scene, renderer, model, raycaster, mouse;
var loader, intersects, modelchildren = [];




init();
// animate();

function init() {

    var scene = new THREE.Scene();

    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)

    camera.position.set(0, 120, 600)
    camera.rotation.set(0, 0, 0)




    renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);

    // set render auto clear false.
    renderer.autoClear = false;

    // initialize global configuration
    THREE.threeDataConfig = { renderer: renderer, camera: camera };


    document.body.appendChild(renderer.domElement);


    // Load the 3D model
    loader = new THREE.GLTFLoader();
    loader.load('https://www.eunicedhivya.com/james-webb-telescope/assets/3d/scene-light3.gltf', function (gltf) {
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


    var controls = new THREE.OrbitControls(camera);
    controls.enableDamping = true;

    function zoomModel(isZoomOut, scale) {
        if (isZoomOut) {
            controls.dollyIn(scale);
        } else {
            controls.dollyOut(scale);
        }
    }

    function onZoomIn() {
        controls.zoomIn();

    }
    function onZoomOut() {
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
            }
        });


    })
    $('#item1').on("click", function () {
        var html = '<p><strong>The Optical Telescope Element</strong></p> <p>The primary mirror, the secondary mirror and the supporting backplane are together known as OTE. It gathers the light from the objects of study and directs it to the science instruments. </p>'

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

        $(".annotation").html(html)

    })
    $('#item2').on("click", function () {
        var html = '<p><strong>Primary Mirror</strong></p> <p>The segmented primary mirror is made up of beryllium coated with gold, and captures the infrared light coming from distant and faint objects. It bounces the incoming light towards the secondary mirror located at the front. </p>'
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
            }
        });

        $(".annotation").html(html)

    })
    $('#item5').on("click", function () {
        var html = '<p><strong>The spacecraft bus</strong></p> <p>The spacecraft bus houses all the command and control subsystems, and provides electrical power, attitude control, communications, data handling, propulsion and thermal control to the spacecraft. The bus also houses the thrusters and the fuel. </p>'

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

            }
        });

        $(".annotation").html(html)

    })
    $('#item7').on("click", function () {
        var html = '<p><strong>Solar panel</strong></p> <p> Webb\'s 20 foot solar panel is folded up like an accordion at launch, and is designed to provide all the energy requirements of the spacecraft. </p>'

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


    var marker3 = new THREE.Mesh(geometrySphere, materialSphere);
    marker3.position.set(-200, 120, 250);
    // marker1.position.set(0, 200, 80); //original setting
    scene.add(marker3);





} //init()



window.addEventListener('resize', () => {
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.aspect = window.innerWidth / window.innerHeight;

    // camera.updateProjectionMatrix();
})