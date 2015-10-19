(function() {
  var ChemistrySceneView;
  var scene, camera, renderer;
  var geometry, material, mesh;

  module.exports = ChemistrySceneView = (function() {
    function ChemistrySceneView(serializedState) {
      this.element = document.createElement('div');
      // this.element.classList.add('chemistry');

      scene = new THREE.Scene();

      camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 1, 10000 );
      camera.position.z = 1000;

      geometry = new THREE.BoxGeometry( 200, 200, 200 );
      material = new THREE.MeshBasicMaterial( { color: 0xff0000, wireframe: true } );

      mesh = new THREE.Mesh( geometry, material );
      scene.add( mesh );

      renderer = new THREE.WebGLRenderer();
      renderer.setSize( window.innerWidth, window.innerHeight );

      this.element.appendChild( renderer.domElement );
    }
    ChemistrySceneView.prototype.render = function() {
      mesh.rotation.x += 0.01;
      mesh.rotation.y += 0.02;
      renderer.render( scene, camera );
    }

    ChemistrySceneView.prototype.serialize = function() {};

    ChemistrySceneView.prototype.destroy = function() {
      return this.element.remove();
    };

    ChemistrySceneView.prototype.getElement = function() {
      return this.element;
    };

    return ChemistrySceneView;

  })();

}).call(this);
