import React from "react";
import "./index.less";
import * as spritejs from 'spritejs';
const { Scene, Sprite } = spritejs;
class Editor extends React.Component {
    constructor(props) {
        super(props)
    }
    componentDidMount() {
        this.init();
    }
    init() {
        const container = document.getElementById('paper');
        console.log(container)
        const scene = new Scene({ container, width: 3080, height: 1080 });
        const layer = scene.layer();
        const robot = new Sprite('https://p5.ssl.qhimg.com/t01c33383c0e168c3c4.png');

        robot.attr({
            anchor: [0, 0.5],
            pos: [0, 0],
        });

        robot.animate([
            { pos: [0, 0] },
            { pos: [0, 300] },
            { pos: [2700, 300] },
            { pos: [2700, 0] },
        ], {
            duration: 5000,
            iterations: Infinity,
            direction: 'alternate',
        });

        layer.append(robot);    
    }
    render() {
        return (
            <div className='editor-wrapper'>
                <div className='editor-container' id='paper'></div>
            </div>
        )
    }
}
export default Editor