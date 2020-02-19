import React, { Component } from "react";
import "./index.less";
import axios from "axios"
import { Icon ,Button} from "antd"
export default class FileSystem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fileList: [],
            nowPath: "",
            pathArray:[],//路径数组
        };
        this.chooseFolder.bind(this);
        this.back.bind(this);
    }
    componentDidMount() {
        this.getFileTree("/")
    }
    getFileTree(path) {
        axios.post('http://localhost:4066/getFileTree', { path }).then(res => {
            this.setState({
                fileList: res.data,
                nowPath:path==="/"?"":path,
            });
        })
    }
    chooseFolder(dir,name) {
        if(!dir){return}
        let path = this.state.nowPath + "/" + name;
        let temp = [];
        temp = temp.concat(this.state.pathArray);
        temp.push("/" + name);
        this.setState({
            pathArray:temp
        })
        this.getFileTree(path);
    }
    back(){
        let t = this.state.pathArray.concat([]);
        if(t.length<=1){
            this.setState({
                pathArray : [],
                nowPath:"",
            })
            this.getFileTree("/")
        }
        t.pop();
        let path = "";
        t.forEach(i=>{
            path = path + i
        })
        this.setState({
            pathArray : t,
            nowPath:path,
        })
        this.getFileTree(path)
    }
    render() {
        return (
            <div className={'FileSystem'}>
                <div className="nowPath">当前路径: 
                <span>根目录</span> 
                {this.state.pathArray.map(item=>{
                    return(
                        <span>{item}</span>
                    )
                })}</div>
                <div className="content">
                    {this.state.fileList.map((item, index) => {
                        return (
                            <div
                                key={index} className='item'
                                onClick={() => { this.chooseFolder(item.dir,item.name) }}
                            >
                                {item.dir ? <Icon type="folder" theme="twoTone" /> : <Icon type="file" />}
                                {item.name}
                            </div>
                        )
                    })}
                </div>
                <div>
                    <Button type='default' onClick={()=>{this.back()}}>返回</Button>
                    <Button type='primary'>选择</Button>
                </div>
            </div>
        )
    }
}