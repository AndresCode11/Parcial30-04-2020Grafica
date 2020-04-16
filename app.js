// ------------------------------------------------
// BASIC SETUP
// ------------------------------------------------

// Create an empty scene
var scene = new THREE.Scene();


// Create a basic perspective camera
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );
camera.position.z = 4;

var control = new THREE.OrbitControls(camera);

// Create a renderer with Antialiasing
var renderer = new THREE.WebGLRenderer({antialias:true});

// Configure renderer clear color
renderer.setClearColor("#000000");

// Configure renderer size
renderer.setSize( window.innerWidth, window.innerHeight );

// Append Renderer to DOM
document.body.appendChild( renderer.domElement );

// ------------------------------------------------
// FUN STARTS HERE
// ------------------------------------------------


function getCube(color, dimension) {
    //dimension la definimos como : {x:'', y: '', z:''}
    // Create a Cube Mesh with basic material
    let geometry = new THREE.BoxGeometry( dimension.x , dimension.y, dimension.z );
    let material = new THREE.MeshBasicMaterial( { color } );
    
    return new THREE.Mesh( geometry, material );
}

function getCircle(color, dimension) {
    let geometry = new THREE.CylinderGeometry( dimension.x , dimension.y, dimension.z );
    let material = new THREE.MeshBasicMaterial( { color } );
    
    return new THREE.Mesh( geometry, material );
}

function translate(object ,dimension) {
    object.position.x += dimension.x;
    object.position.y += dimension.y;
    object.position.z += dimension.z;
}

function rotate(object, dimension) {
    object.rotate.x += dimension.x;
    object.rotate.y += dimension.y;
    object.rotate.z += dimension.z;
}

let cube1 = this.getCube('#63bea7', {x: 1, y: 1.4 , z: 1});
let cube2 = this.getCube('#dffff0', {x: 0.7, y: 0.6 , z: 1.1});
let leftEye = this.getCube('#000000', {x: 0.05, y: 0.05 , z: 1.2});
let rigthEye = this.getCube('#000000', {x: 0.05, y: 0.05 , z: 1.2});
let mouth = this.getCube('#000000', {x: 0.3, y: 0.04 , z: 1.2});

//	#63afb6
let leftArm = this.getCube('#63afb6', {x: 0.7, y: 0.1 , z: 0.1});
let rigthArm = this.getCube('#63afb6', {x: -0.7, y: 0.1 , z: 0.1});

let leftLeg = this.getCube('#63afb6', {x: 0.1, y: 1 , z: 0.1});
let rigthLeg = this.getCube('#63afb6', {x: 0.1, y: 1 , z: 0.1});

let letfFeet = this.getCube('#63afb6', {x: 0.2, y: 0.2 , z: 0.2});
let rigthFeet = this.getCube('#63afb6', {x: 0.2, y: 0.2 , z: 0.2});

translate(cube2, {x: 0, y:0.2, z: 0});
translate(leftEye, {x: -0.2, y: 0.3, z: 0});
translate(rigthEye, {x: 0.2, y: 0.3, z: 0});
translate(mouth, {x: 0, y: 0.1, z: 0});
translate(leftArm, {x: 0.9, y: 0, z: 0});
translate(rigthArm, {x: -0.9, y: 0, z: 0});

translate(leftLeg, {x: 0.4, y: -0.8, z: 0});
translate(rigthLeg, {x: -0.4, y: -0.8, z: 0});

translate(letfFeet, {x: 0.4, y: -1.2, z: 0.2});
translate(rigthFeet, {x: -0.4, y: -1.2, z: 0.2});

// Add 
scene.add( cube1 );
scene.add( cube2 );
scene.add( leftEye );
scene.add( rigthEye );
scene.add( mouth );


scene.add( leftArm );
scene.add( rigthArm );

scene.add( leftLeg );
scene.add( rigthLeg );

scene.add( letfFeet );
scene.add( rigthFeet )

// Render Loop
var render = function () {
  requestAnimationFrame( render );
  control.update();
  /*
  //cube1.rotation.x += 0.01;
  cube1.rotation.y += 0.01;

  //cube2.rotation.x += 0.01;
  cube2.rotation.y += 0.01;

  //leftEye.rotation.x += 0.01;
  leftEye.rotation.y += 0.01;

  //rigthEye.rotation.x += 0.01;
  rigthEye.rotation.y += 0.01;
  
  //mouth.rotation.x += 0.01;
  mouth.rotation.y += 0.01;

  //leftArm.rotation.x += 0.01;
  leftArm.rotation.y += 0.01;

  //rigthtArm.rotation.x += 0.01;
  rigthArm.rotation.y += 0.01;

  leftLeg.rotation.y += 0.01;
   
  rigthLeg.rotation.y += 0.01;

  letfFeet.rotation.y += 0.01;

  rigthFeet.rotation.y = 0.01;

  // Render the scene
  */
  renderer.render(scene, camera);
};

render();