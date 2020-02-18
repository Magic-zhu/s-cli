import React, { Component } from "react";
import { Button } from 'antd';
import './index.less';
import FileSystem from "../../components/FileSystem/index";

export default class WeApp extends Component {
    constructor(props) {
        super(props);
        this.state ={

        }
        this.navigate.bind(this);
    }
    navigate(){
        this.props.history.push('/weapp/config')
    }
    render() {
        return (
            <div className='weapp'>
                <div className="pannel">
                    <Button type='primary' className={'mr20'} icon={'thunderbolt'}>初始化项目</Button>
                    <Button type='primary' className={'mr20'} icon={'file-add'}>新建页面</Button>
                    <Button type='primary' className={'mr20'} icon={'file-add'}>新建组件</Button>
                    <Button type='primary' className={'mr20'} icon={'setting'} onClick={()=>{this.navigate()}}>全局配置</Button>
                    <Button type='primary' icon={'setting'}>页面配置</Button>
                </div>
                <div className={'viewport'}>
                    <div>
                        <FileSystem></FileSystem>
                    </div>
                </div>
            </div>

        )
    }
}
