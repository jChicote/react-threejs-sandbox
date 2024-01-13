import { Component } from 'react';
import { GameManager } from './GameManager';

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

export { ThreeContainer };
