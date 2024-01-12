// Example is copied from https://threejs.org/docs/index.html#manual/en/introduction/Creating-a-scene
import * as THREE from "./node_modules/three/build/three.module.js";

// The GameManager exists to emulate the class encapsulating the scene.
class GameManager {
    constructor() {
        this.scene = new THREE.Scene();
        this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        this.render = new THREE.WebGLRenderer();
        this.cube = null;
    }

    SetupScene() {
        this.scene = new THREE.Scene();
        this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

        this.renderer = new THREE.WebGLRenderer();
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        document.body.appendChild(this.renderer.domElement);

        const geometry = new THREE.BoxGeometry(1, 1, 1);
        const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
        this.cube = new THREE.Mesh(geometry, material);
        this.scene.add(this.cube);

        this.camera.position.z = 5;
    }

    Update() {
        requestAnimationFrame(animate);

        this.cube.rotation.x += 0.01;
        this.cube.rotation.y += 0.01;

        this.renderer.render(this.scene, this.camera);
    }
}

const gameManager = new GameManager();
gameManager.SetupScene();

function animate() {
    gameManager.Update();
}

animate();