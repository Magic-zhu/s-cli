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
        const scene = new Scene({ container, width: 750, height: 1440 });
        const layer = scene.layer();   
    }
    updateBackground(){
        const vertex =`
            attribute vec2 a_vertexPosition;
            attribute vec2 uv;
            varying vec2 vUv;

            void main() {
                gl_PointSize = 1.0;
                vUv = uv;
                gl_Position = vec4(a_vertexPosition, 1, 1);
            }

            #ifdef GL_ES
            precision mediump float;
            #endif
            varying vec2 vUv;
            uniform float rows;

            void main() {
                vec2 st = fract(vUv * rows);
                float d1 = step(st.x, 0.9);
                float d2 = step(0.1, st.y);
                gl_FragColor.rgb = mix(vec3(0.8), vec3(1.0), d1 * d2);
                gl_FragColor.a = 1.0;
            }
        `
        const program = layer.createProgram({
            vertex,
            fragment,
            cullFace: null,
          }, {
            uniforms: {
                rows: 64,
            },
        });
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