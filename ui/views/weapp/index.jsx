import React, { Component } from "react";
import { Button, List, Typography, Input, Switch, Anchor, Icon, Radio } from 'antd';
const { Link } = Anchor;
import './index.less'
export default class WeApp extends Component {
    constructor(props) {
        super(props);
        this.state ={

        }
    }
    render() {
        return (
            <div className='weapp'>
                <div className="pannel">
                    <Button type='primary' className={'mr20'} icon={'thunderbolt'}>初始化项目</Button>
                    <Button type='primary' className={'mr20'} icon={'file-add'}>新建页面</Button>
                    <Button type='primary' className={'mr20'} icon={'file-add'}>新建组件</Button>
                    <Button type='primary' className={'mr20'} icon={'setting'}>全局配置</Button>
                    <Button type='primary' icon={'setting'}>页面配置</Button>
                </div>
            </div>
        )
    }
}
