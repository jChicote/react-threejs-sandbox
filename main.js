// Example is copied from https://threejs.org/docs/index.html#manual/en/introduction/Creating-a-scene
import React, { Component } from 'react';
import * as THREE from "./node_modules/three/build/three.module.js";

// The GameManager exists to emulate the class encapsulating the scene.
class GameManager {
    constructor() {
        this.scene = new THREE.Scene();
        this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        this.render = new THREE.WebGLRenderer();
        this.cube = null;
    }

    SetupScene(container) {
        this.scene = new THREE.Scene();
        this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

        this.renderer = new THREE.WebGLRenderer();
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        document.body.appendChild(this.renderer.domElement);

        container.appendChild(this.renderer.domElement);

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
        console.log("Is Updating");

        this.renderer.render(this.scene, this.camera);
    }
}

class ThreeContainer extends Component {
    componentDidMount() {
        this.gameManager = new GameManager();
        this.gameManager.SetupScene(this.mount);
        this.gameManager.Update();
    }

    render() {
        return (
            <div ref={ref => (this.mount = ref)} style={{ width: '100%', height: '100vh' }} />
        );
    }
}

function OverlayUI() {
    return (
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none' }}>
            {/* Your overlay content here */}
            <div style={{ pointerEvents: 'auto' }}>
                {/* Interactive elements here */}
                <button style={{ margin: '10px' }}>Click Me</button>
            </div>
        </div>
    );
}

function App() {
    return (
        <div style={{ position: 'relative' }}>
            <ThreeContainer />
            <OverlayUI />
        </div>
    );
}

export default App;

// const gameManager = new GameManager();
// gameManager.SetupScene();

// function animate() {
//     gameManager.Update();
// }

// animate();