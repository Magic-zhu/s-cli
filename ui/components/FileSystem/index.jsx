import React, { Component } from "react";
import "./index.less";
import axios from "axios"
import { Icon, Button, Modal, Input } from "antd"
export default class FileSystem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fileList: [],
            nowPath: "",
            pathArray: [],//路径数组
            selectIndex: null,
            isWindows: true,
            windowsDiskName: 'c:',
            visible: false,
            selfPathValue: '',
        };
    }
    componentDidMount() {
        this.getFileTree("/");
        this.getPlatform();
    }
    getFileTree(path) {
        axios.post('http://localhost:8889/getFileTree', { path })
            .then(res => {
                this.setState({
                    fileList: res.data,
                    nowPath: path === "/" ? "" : path,
                    selectIndex: null,
                });
            })
    }
    getPlatform() {
        axios.get('http://localhost:8889/platform')
            .then(r => {
                if (r == 'win32') {
                    this.setState({
                        isWindows: true
                    })
                }
            })
    }
    nextFolder(dir, name) {
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
    chooseFolder(index) {
        this.setState({ selectIndex: index })
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
        if (index == null) {
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
            if(this.state.isWindows){
                path = this.state.windowsDiskName + path;
            }
            this.getFileTree(path)
        }
    }

    jumpRoot() {
        this.setState({
            pathArray: [],
            nowPath: "",
        })
        let root = '/';
        if(this.state.isWindows){
            root = this.state.windowsDiskName
        }
        this.getFileTree(root+'/');
    }

    select() {
        console.log(this.state.nowPath)
    }
    openModal() {
        this.setState({
            visible: true
        })
    }
    //自定义路径
    selfDefinePath() {
        let temp,windowsDiskName,pathArray;
        if(this.state.isWindows){
            if(this.state.selfPathValue.indexOf(':')!=-1){
                windowsDiskName = this.state.selfPathValue.split(':')[0]+':';
                temp = this.state.selfPathValue.split(':')[1];
            }else{
                windowsDiskName = this.state.windowsDiskName;
            }
        }
        pathArray = this.state.selfPathValue.split('/');
        pathArray.shift();
        pathArray = pathArray.map(ele=>{
            return '/' + ele
        })
        this.getFileTree(this.state.selfPathValue+"/");
        this.setState({
            visible:false,
            windowsDiskName,
            pathArray,
            nowPath:this.state.selfPathValue,
        })
    }
    closeModal() {
        this.setState({
            visible: false
        })
    }
    handleInput(e) {
        this.setState({
            selfPathValue: e.target.value
        })
    }
    render() {
        return (
            <div className={'FileSystem'}>
                <div className="nowPath">
                    当前路径:
                    <span className='pathTab' onClick={() => { this.jumpPath(null) }}>{this.state.isWindows ? this.state.windowsDiskName : 'root'}</span>
                    {this.state.pathArray.map((item, index) => {
                        return (
                            <span
                                key={item}
                                className='pathTab'
                                onClick={() => { this.jumpPath(index) }}
                            >{item}</span>
                        )
                    })}
                    <div className="pathPannel">
                        <Icon type='edit' theme='twoTone' onClick={() => { this.openModal() }}></Icon>
                    </div>
                </div>
                <div className="content">
                    {this.state.fileList.map((item, index) => {
                        return (
                            <div
                                key={item.name + index} className={this.state.selectIndex == index ? 'item onactive' : 'item'}
                                onDoubleClick={() => { this.nextFolder(item.dir, item.name) }}
                                onClick={() => { this.chooseFolder(index) }}
                            >
                                {item.dir ? <Icon type="folder" theme="twoTone" /> : <Icon type="file" />}
                                {"  "}
                                {item.name}
                            </div>
                        )
                    })}
                </div>
                <div className='btns'>
                    <Button type='primary' onClick={() => { this.back() }} className='mr20'>返回</Button>
                    <Button type='primary' onClick={() => { this.select() }}>选择</Button>
                </div>
                <Modal
                    title="自定义路径"
                    visible={this.state.visible}
                    onOk={() => { this.selfDefinePath() }}
                    onCancel={() => { this.closeModal() }}
                >
                    <Input placeholder="绝对路径 windows下带上盘符 例如 e: e:/testdir" value={this.state.selfPathValue} onChange={this.handleInput.bind(this)} />
                </Modal>
            </div>
        )
    }
}