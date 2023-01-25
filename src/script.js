import './style.css'
import * as THREE from 'three'
import * as dat from 'lil-gui'
import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader.js';
import { STLLoader } from 'three/examples/jsm/loaders/STLLoader'
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader'
import gsap from 'gsap';

/**
 * Debug
 */

/**
 * Base
 */
// Canvas
const canvas = document.querySelector('canvas.webgl')
// Scene
const scene = new THREE.Scene()

let mixer = null;
let glt = null;

const jobs = {
    1: false,
    2: false,
    3: false,
    4: false
}

//model
const gLoader = new GLTFLoader();
gLoader.load('./models/ripan1.glb', (gltf) => {
    console.log(gltf)
    // gltf.scene.rotation.set(1,1,10)
    // mixer = new THREE.AnimationMixer(gltf.scene);
    // const action = mixer.clipAction(gltf.animations[0])
    // action.play();
    glt = gltf.scene.children[0];
    glt.rotateX(THREE.Math.degToRad(90));
    glt.rotateZ(THREE.Math.degToRad(-5));
    glt.scale.set(2.5,2.5,2.5);
    glt.castShadow = true;
    scene.add(glt);

}
    )

const initial1 = () => {
    console.log("int 1")

    gsap.to(glt.rotation, {
        x: 1.5,
        duration: 1.5,
        onStart: function(){
            hideExperience();
        }
    })
    gsap.to(camera.position, {
        z: 2,
        y: 0,
        x: 2,
        duration: 1.5,
        onStart: function(){
            const ele = window.document.getElementsByClassName('titleContainer');
            ele[0].style.display = 'none';
            jobs[1] = false;
        }
    })
    progBar[0].style.width = 0;
}
const initial2 = () => {
    console.log("int 2");
    gsap.to(camera.rotation, {
        x: 0,
        y: 0,
        z: 0,
        duration: 1,
        onStart: function(){
            const ele = window.document.getElementsByClassName('titleContainer2');
            ele[0].style.display = 'none';
            bdy.className = "stop-scrolling";
            hideProjects();
        }
    })
    gsap.to(camera.position, {
        z: 0.6,
        x: 0.4,
        y: 0.2,
        duration: 1.5,
        onComplete: function(){
            const ele = window.document.getElementsByClassName('titleContainer');
            ele[0].style.display = 'block';
            ele[0].className = 'titleContainer';
            bdy.className = ""
            jobs[2] = false;
        }
    })
    progBar[0].style.width = '30%';
}

const initial3 = () => {
    console.log("int 3");
    // gsap.to(camera.rotation, {
    //     x: 0,
    //     y: 0,
    //     z: 0,
    //     duration: 1,
    //     onStart: function(){
    //         const ele = window.document.getElementsByClassName('titleContainer3');
    //         ele[0].style.display = 'none';
    //         bdy.className = "stop-scrolling";
    //         hideProjects();
    //     }
    // })
    gsap.to(camera.position, {
        z: '0.1',
        x: '-=0.6',
        duration: 1.5,
        onStart: function(){
            const ele = window.document.getElementsByClassName('titleContainer3');
            ele[0].style.display = 'none';
            bdy.className = "stop-scrolling";
            hideHobbies();
        },
        onComplete: function(){
            const ele = window.document.getElementsByClassName('titleContainer2');
            ele[0].style.display = 'block';
            ele[0].className = 'titleContainer2';
            bdy.className = ""
            jobs[3] = false;
        }
    })
    progBar[0].style.width = '60%';
}


const progBar = window.document.getElementsByClassName('progressBar');

const phase1 = () => {
    //console.log("1")
    gsap.to(camera.position, {
        z: 0.6,
        y: 0.2,
        x: 0.4,
        onStart: function(){
            bdy.className = "stop-scrolling";
        },
        duration: 1.5,
    })

    gsap.to(glt.rotation, {
      
        duration: 1.5,
        x: 0.09,
        z: 0,
        onComplete: function(){
            const ele = window.document.getElementsByClassName('titleContainer');
            ele[0].style.display = 'block';
            bdy.className = ""
            jobs[1] = true;
        }
    })

    progBar[0].style.width = '30%';
}
const phase2 = () => {
   // console.log("2")
    gsap.to(camera.rotation, {
        y: '-1',
        x: '0.2',
        duration: 1,
        onStart: function(){
            // gsap.to('.titleContainer', {
            //     opacity: 0,
            //     duration: 0.7
            // })
            bdy.className = "stop-scrolling";
            const ele = window.document.getElementsByClassName('titleContainer');
            ele[0].style.display = 'none';
            hideExperience();
        },
        onComplete: function(){
            const ele = window.document.getElementsByClassName('titleContainer');
            ele[0].style.display = 'none';
        }
    })
    gsap.to(camera.position, {
        z: '0.1',
        x: '+=0.2',
        duration: 1.5,
        onStart: function(){
            const ele = window.document.getElementsByClassName('titleContainer');
            ele[0].style.display = 'none';
        },
        onComplete: function(){
            const ele = window.document.getElementsByClassName('titleContainer2');
            ele[0].style.display = 'block';
            bdy.className = ""
            jobs[2] = true;
        }
    })
    progBar[0].style.width = '60%';
}

const phase3 = () => {
    console.log("3")
    gsap.to(camera.position, {
        z: '-0.1',
        x: '+=0.6',
        duration: 1.5,
        onStart: function(){
            bdy.className = "stop-scrolling";
            const ele = window.document.getElementsByClassName('titleContainer2');
            ele[0].style.display = 'none';
            hideProjects();
        },
        onComplete: function(){
            const ele = window.document.getElementsByClassName('titleContainer3');
            ele[0].style.display = 'block';
            bdy.className = ""
            jobs[3] = true;
        }
    })
    progBar[0].style.width = '100%';
}
let oldValue = 0;
const bdy = window.document.querySelector('body');

window.addEventListener('scroll' , function(e){
    //console.log(window.pageYOffset)
    var newValue = window.pageYOffset;

    if((oldValue - newValue) > 0 && window.pageYOffset <= 100){
       initial1();
    }
    else if((oldValue - newValue) > 0 && window.pageYOffset < 300 && jobs[2]){
        initial2();
    }
    else if((oldValue - newValue) > 0 && window.pageYOffset < 600 && jobs[3]){
        console.log("333")
        initial3();
    }
    else if(window.pageYOffset > 300 && !jobs[1]){
       // console.log("id")
        phase1();
    }
    else if(window.pageYOffset > 600 && !jobs[2]) {
        console.log(camera.rotation);
        console.log(camera.position);
        phase2();
    }
    else if(window.pageYOffset > 900 && !jobs[3]){
        phase3();
    }

    oldValue = newValue;
})
/**
 * Sizes
 */
const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}

window.addEventListener('resize', () =>
{
    // Update sizes
    sizes.width = window.innerWidth
    sizes.height = window.innerHeight

    // Update camera
    camera.aspect = sizes.width / sizes.height
    camera.updateProjectionMatrix()

    // Update renderer
    renderer.setSize(sizes.width, sizes.height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
})

// window.addEventListener("mousemove", (event) => {
//    // console.log(event.pageY/100);
   
//     // glt.rotation.x = event.pageX/1000000;
//    glt.rotation.y = event.pageY/100000;
//     glt.rotation.z = -1*event.pageX/10000;
// })

/**
 * Camera
 */
// Base camera
const camera = new THREE.PerspectiveCamera(80, sizes.width / sizes.height, 0.1, 100)
camera.position.set(2, 0, 2)
scene.add(camera)

scene.background = new THREE.Color( '#D7D7D7' );
/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})

const ambientLight = new THREE.AmbientLight(0xffffff, 5);
//ambientLight.shadow = true;
//scene.add(ambientLight)

const directionalLight = new THREE.DirectionalLight(0xffffff, 4)
directionalLight.castShadow = true

directionalLight.position.set(1, 1, 2);

//scene.add(directionalLight2);
//directionalLight.rotation.z = 10
//directionalLight.shadow = true;

//scene.add( helper );
scene.add(directionalLight)
const axesHelper = new THREE.AxesHelper(5);
//scene.add( axesHelper )
const pLight = new THREE.PointLight('#DFB2F4', 2);
pLight.position.set(2, 0, 0);

const pLight2 = new THREE.PointLight('#DFB2F4', 1);
pLight2.position.set(-2, -1, 0);
scene.add(pLight2);
// const h = new THREE.PointLightHelper(pLight, 5);
// scene.add(h)
scene.add(pLight);
renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

/**
 * Animate
 */
const clock = new THREE.Clock()
let prevT = 0;

const tick = () =>
{
    const elapsedTime = clock.getElapsedTime()
    var delta = elapsedTime - prevT;
    prevT = elapsedTime;

    // if (mixer !== null) mixer.update(delta);
    // Render
    renderer.render(scene, camera)

    // Call tick again on the next frame
    window.requestAnimationFrame(tick)
}

tick()

//utitlity
const hideExperience = () => {
    const ele = window.document.getElementsByClassName('titleContainer');
    ele[0].className = 'titleContainer';
    const ex1 = window.document.getElementsByClassName('ex1');
    ex1[0].className = 'ex1';
    const ex2 = window.document.getElementsByClassName('ex2');
    ex2[0].className = 'ex2';
    const ex3 = window.document.getElementsByClassName('ex3');
    ex3[0].className = 'ex3';
    const expTitle = window.document.getElementsByClassName('expTitle');
    expTitle[0].className = 'title';
}
const hideProjects = () => {
    const ele = window.document.getElementsByClassName('titleContainer2');
    ele[0].className = 'titleContainer2';
    const pr1 = window.document.getElementsByClassName('pr1');
    pr1[0].className = 'pr1';
    const pr2 = window.document.getElementsByClassName('pr2');
    pr2[0].className = 'pr2';
    const pr3 = window.document.getElementsByClassName('pr3');
    pr3[0].className = 'pr3';
    const expTitle = window.document.getElementsByClassName('expTitle');
    expTitle[0].className = 'title';
}
const hideHobbies = () => {
    const ele = window.document.getElementsByClassName('titleContainer3');
    ele[0].className = 'titleContainer3';
    const pr1 = window.document.getElementsByClassName('hb1');
    pr1[0].className = 'hb1';
    const pr2 = window.document.getElementsByClassName('hb2');
    pr2[0].className = 'hb2';
    const pr3 = window.document.getElementsByClassName('hb3');
    pr3[0].className = 'hb3';
    const pr4 = window.document.getElementsByClassName('hb4');
    pr4[0].className = 'hb4';
    const expTitle = window.document.getElementsByClassName('expTitle');
    expTitle[0].className = 'title';
}