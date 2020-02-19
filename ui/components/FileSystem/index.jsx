import React ,{ Component } from "react";
import "./index.less";
import io from "socket.io-client";

const socket = io("http://47.105.210.34:8086/", {
    transports: ["websocket", "xhr-polling", "jsonp-polling"],
    autoConnect: false
}); //顺带解决本地的跨域

export default class FileSystem extends Component {
    constructor(props){
        super(props);
        this.state ={
            fileList:[],
        };
    }
    componentDidMount() {
        console.log(1)
        socket.on('connect',()=>{
            console.log('对接ok')
        })
        socket.on('_getFileTree',data=>{
            this.setState({
                fileList:data
            })
        })
        socket.on('disconnect', function(err){
            console.log(222)
        });
        socket.emit('getFileTree')
    }

    render() {
        return (
            <div className={'FileSystem'}>
                {this.state.fileList.map((item,index)=>{
                    return (
                        <div key={index}>{item.name}</div>
                    )
                })}
            </div>
        )
    }
}