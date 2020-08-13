import React from "react";
import "./index.less";
import * as spritejs from 'spritejs';
const { Scene, Sprite ,Group} = spritejs;
import { install } from 'next-draggable'
install(spritejs);
class Editor extends React.Component {
    constructor(props) {
        super(props)
    }
    componentDidMount() {
        this.init();
    }
    init() {
        const container = document.getElementById('paper');
        const scene = new Scene({ container, width: 375, height: 720 });
        const layer = scene.layer();
        let group = new Group();
        group.attr({
            size: [100, 100],
            pos: [50, 50],
            anchor: [0.5, 0.5],
            bgcolor: '#cec',
            zIndex:5,
          });
        group.draggable();
        group.addEventListener('drag', (evt) => {
            group.getAttribute('pos')[0]
        });
        let group2 = new Group();
        group2.attr({
            size: [100, 100],
            pos: [150, 50],
            anchor: [0.5, 0.5],
            bgcolor: '#ff00ff',
            zIndex:5,
        });
        group2.draggable();
        group2.addEventListener('drag', (evt) => {
            group2.getAttribute('pos')[0]
        });
        layer.append(group);   
        layer.append(group2);
        group.addEventListener('mouseenter', (evt) => {
            group.attr('border', [2, 'blue']);
        });
        group2.addEventListener('mouseenter', (evt) => {
            group2.attr('border', [2, 'blue']);
        });
        group.addEventListener('mouseleave', (evt) => {
            group.attr('border', [0]);
        });        
        group2.addEventListener('mouseleave', (evt) => {
            group2.attr('border', [0]);
        });
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