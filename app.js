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
var plane = new THREE.Mesh( geometry, material );
scene.add( plane );

// Create a basic perspective camera
var camera = new THREE.PerspectiveCamera( 120, window.innerWidth/window.innerHeight, 0.1, 1000 );
camera.position.z = 25;
camera.position.y = 10;
camera.position.x = 10




// Create a renderer with Antialiasing
var renderer = new THREE.WebGLRenderer({antialias:true});

// Configure renderer clear color
renderer.setClearColor("#000000");

// Configure renderer size
renderer.setSize( window.innerWidth, window.innerHeight );

// Append Renderer to DOM
document.body.appendChild( renderer.domElement );


// Render Loop
var render = function () {
  stats.begin();
  requestAnimationFrame( render );
  var speed = Date.now() * 0.00025;
  
  stats.end();
  renderer.render(scene, camera);
};

render();

window.onload = init;

  function init(){
    var botonAgregar = document.getElementById('btn-agregar').addEventListener("click", addFunction);
  }

  function addFunction() {

    let randomColor = "#000000".replace(/0/g,function(){return (~~(Math.random()*16)).toString(16);});
    console.log('click');

    let geometry = new THREE.BoxGeometry( 1 , Math.random() * (15 -1) + 1, 1 );
    let material = new THREE.MeshBasicMaterial( {color: randomColor});
    let cube =  new THREE.Mesh( geometry, material );
    cube.position.x = Math.random() * (25 ) + 1;
    cube.position.z = Math.random() * (25 ) + 1;
    scene.add(cube)
  }
