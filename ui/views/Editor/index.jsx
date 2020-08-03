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