import React, { Component } from "react";
import "./index.less";
import axios from "axios"
import { Icon, Button } from "antd"
export default class FileSystem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fileList: [],
            nowPath: "",
            pathArray: [],//路径数组
        };
    }
    componentDidMount() {
        this.getFileTree("/")
    }
    getFileTree(path) {
        axios.post('http://localhost:4066/getFileTree', { path }).then(res => {
            this.setState({
                fileList: res.data,
                nowPath: path === "/" ? "" : path,
            });
        })
    }
    chooseFolder(dir, name ) {
        if (!dir) { return }
        let path = this.state.nowPath + "/" + name;
        let temp = [];
        temp = temp.concat(this.state.pathArray);
        temp.push("/" + name);
        this.setState({
            pathArray: temp
        })
        this.getFileTree(path);
    }
    back() {
        let t = this.state.pathArray.concat([]);
        if (t.length <= 1) {
            this.jumpRoot()
            return
        }
        t.pop();
        let path = "";
        t.forEach(i => {
            path = path + i
        })
        this.setState({
            pathArray: t,
            nowPath: path,
        })
        this.getFileTree(path)
    }

    jumpPath(index) {
        if (index==null) {
            this.jumpRoot();
        } else {
            let t = this.state.pathArray.concat([]);
            t = t.slice(0, index + 1)
            let path = "";
            t.forEach(i => {
                path = path + i
            })
            this.setState({
                pathArray: t,
                nowPath: path,
            })
            this.getFileTree(path)
        }
    }

    jumpRoot() {
        this.setState({
            pathArray: [],
            nowPath: "",
        })
        this.getFileTree("/")
    }

    render() {
        return (
            <div className={'FileSystem'}>
                <div className="nowPath">
                    当前路径:
                <span className='pathTab' onClick={() => { this.jumpPath(null) }}>root</span>
                    {this.state.pathArray.map((item, index) => {
                        return (
                            <span
                                key={item}
                                className='pathTab'
                                onClick={() => { this.jumpPath(index) }}
                            >{item}</span>
                        )
                    })}
                </div>
                <div className="content">
                    {this.state.fileList.map((item, index) => {
                        return (
                            <div
                                key={item.name + index} className='item'
                                onDoubleClick={() => { this.chooseFolder(item.dir, item.name) }}
                            >
                                {item.dir ? <Icon type="folder" theme="twoTone" /> : <Icon type="file" />}
                                {"  "}
                                {item.name}
                            </div>
                        )
                    })}
                </div>
                <div className='btns'>
                    <Button type='default' onClick={() => { this.back() }} className='mr20'>返回</Button>
                    <Button type='primary'>选择</Button>
                </div>
            </div>
        )
    }
}