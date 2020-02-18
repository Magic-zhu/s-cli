import React from 'react';
import './index.less';
import { Button, List, Typography, Input, Switch, Anchor, Icon, Radio } from 'antd';
const { Link } = Anchor;
export default class WeappConfig extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            type: 0,
            pages: ['/page/index/index'],
            config: {

            },
            float_menu: [
                { name: 'pages' },
                { name: 'window' },
                { name: 'tabBar' },
                { name: 'networkTimeout' },
                { name: 'debug' },
                { name: 'funtionalPages' },
                { name: 'subpackages' },
                { name: 'workers' },
                { name: 'requiredBackgroundModes' },
                { name: 'plugins' },
                { name: 'preloadRule' },
                { name: 'resizable' },
                { name: 'navigateToMiniProgramAppidList' },
                { name: 'usingComponents' },
                { name: 'permission' },
                { name: 'sitemapLocation' },
                { name: 'style' },
                { name: 'useExtendedLib' },
            ],
        }
    }
    render(){
        return (
            <div className={'WeappConfig'}>
                <div className='leftside'>
                    <div>
                        <Button type='primary'>返回</Button>
                    </div>
                    <div>
                        <Button type='default'>读取</Button>
                    </div>
                    <div>
                        <Button type='default'>生成</Button>
                    </div>
                    <div>
                        <Button type='default'>更新</Button>
                    </div>
                </div>
                <div className='rightside'>
                    <header>配置表 </header>
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
                            <h1 name='window'>window</h1>
                            <div className='windows_item'>
                                <div><Icon type="edit" theme="filled" /> navigationBarBackgroundColor:导航栏背景颜色，如 #000000</div>
                                <div>
                                    <Input placeholder="#000000" className='w200' />
                                </div>
                            </div>
                            <div className='windows_item'>
                                <div><Icon type="edit" theme="filled" /> 导航栏标题颜色</div>
                                <div>
                                    <Radio.Group >
                                        <Radio value={'black'}>black</Radio>
                                        <Radio value={'white'}>white</Radio>
                                    </Radio.Group>
                                </div>
                            </div>
                        </div>
                    </article>
                </div>
                <div className='float_menu'>
                    <Anchor>
                        {this.state.float_menu.map((item) => {
                            return (
                                <Link
                                    href={'#' + item.name}
                                    title={item.name}
                                />
                            )
                        })}
                    </Anchor>
                </div>
            </div>
        )
    }
}