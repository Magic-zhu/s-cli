import React ,{ Component } from "react";
import "./index.less";
import  socket from "socket.io-client";
class FileSystem extends Component {
    constructor(props){
        super(props);
        this.state ={
            fileList:[],
        };
    }
    componentDidMount() {

    }

    render() {
        return (
            <div className={'FileSystem'}>

            </div>
        )
    }
}