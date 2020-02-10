import React, { Component } from "react";
import { Button, List, Typography, Input, Switch } from 'antd';
import './index.less'
export default class WeApp extends Component {
    constructor(props) {
        super(props)
        this.state = {
            type: 0,
            pages: ['/page/index/index']
        }
    }
    render() {
        return (
            <div className='weapp'>
                <div className='leftside'>
                    <div>
                        全局/页面<Switch defaultChecked className='ml20' />
                    </div>
                    <div>
                        <Button type='primary'>读取</Button>
                    </div>
                    <div>
                        <Button type='primary'>生成</Button>
                    </div>
                    <div>
                        <Button type='primary'>更新</Button>
                    </div>
                </div>
                <div className='rightside'>
                    <header>配置表</header>
                    <article>
                        <List
                            header={<div><h1>pages</h1>用于指定小程序由哪些页面组成，每一项都对应一个页面的 路径（含文件名） 信息。</div>}
                            footer={
                                <div>
                                    <Button type='default'>增加</Button>
                                </div>
                            }
                            bordered
                            dataSource={this.state.pages}
                            renderItem={item => (
                                <List.Item>
                                    <Typography.Text mark>[页面路径]</Typography.Text> {item} <Button type='danger'>删除</Button>
                                </List.Item>
                            )}
                        />
                        <div className="windows">
                            <div>
                                <span>navigationBarBackgroundColor:导航栏背景颜色，如 #000000</span>
                                <div>
                                    <Input placeholder="#000000" className='w200' />
                                </div>
                            </div>
                        </div>
                    </article>
                </div>
            </div>
        )
    }
}
