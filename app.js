// ------------------------------------------------
// BASIC SETUP
// ------------------------------------------------

// Create an empty scene
var scene = new THREE.Scene();
scene.background = new THREE.Color( 0xffffff );

var stats = new Stats();
stats.showPanel( 2 ); // 0: fps, 1: ms, 2: mb, 3+: custom
document.body.appendChild( stats.domElement );

//===================>
/*
stats.setMode(2); // 0: fps, 1: ms, 2memory
stats.domElement.style.position='absolute';
stats.domElement.style.left='100px';
stats.domElement.style.top='10px';
document.getElementById("myStats").appendChild(stats.domElement);
*/
//===================>

var geometry = new THREE.BoxGeometry( 1000, 1, 1000);
var material = new THREE.MeshBasicMaterial( {color: 0xebebeb, side: THREE.DoubleSide} );

// Create a basic perspective camera
var camera = new THREE.PerspectiveCamera( 120, window.innerWidth/window.innerHeight, 0.1, 1000 );


camera.position.z = 50;
camera.position.y = 10;
camera.position.x = 5


// Create a renderer with Antialiasing
var renderer = new THREE.WebGLRenderer({antialias:true});

// Configure renderer clear color
renderer.setClearColor("#000000");

// Configure renderer size
renderer.setSize( window.innerWidth, window.innerHeight );

// Append Renderer to DOM
document.body.appendChild( renderer.domElement );


function createCilinder() {
    let geometry = new THREE.CylinderGeometry( 5, 5, 20, 32 );
    let material = new THREE.MeshBasicMaterial( {color: 0xffff00} );
    let cylinder = new THREE.Mesh( geometry, material );
    scene.add(cylinder);
    cylinder.position.z -= 0
}

function createCube() {
    let geometry = new THREE.BoxGeometry( 6, 6, 6 );
    let material = new THREE.MeshBasicMaterial( {color: 0x00ff00} );
    let cube = new THREE.Mesh( geometry, material );
    
    cube.position.z += 30,
    scene.add( cube );
}

function createToroide() {
    let geometry = new THREE.TorusGeometry( 10, 3, 16, 100 );
    let material = new THREE.MeshBasicMaterial( { color: 0x0000FF } );
    let torus = new THREE.Mesh( geometry, material );
    
    torus.position.z -= 30;
    scene.add( torus );


}

// Render Loop
let t = 0;
var render = function () {
  stats.begin();
  requestAnimationFrame( render );
  var speed = Date.now() * 0.00025;
  
  //mover hacia adelenate
  camera.position.z -= 0.2;

  //rotar
  camera.position.x = 20*Math.cos(t) + 0;
  t += 0.025;
  stats.end();
  renderer.render(scene, camera);
};

createCilinder();
createCube();
createToroide();
render();
