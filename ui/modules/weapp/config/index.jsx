import React from 'react';
import './index.less';
import { Button, List, Typography, Input, Switch, Anchor, Icon, Radio, Tooltip } from 'antd';
const { Link } = Anchor;
export default class WeappConfig extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            type: 0,
            pages: ['/page/index/index'],
            config: {
                window: {
                    backgroundTextStyle: "dark",
                }
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
    render() {
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
                            header={<div><h1 id='pages'>pages</h1>用于指定小程序由哪些页面组成，每一项都对应一个页面的 路径（含文件名） 信息。</div>}
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
                            <h1 id='window'>window</h1>
                            <div className='windows_item'>
                                <div><Icon type="edit" theme="filled" /> navigationBarBackgroundColor:导航栏背景颜色，如 #000000</div>
                                <div>
                                    <Input placeholder="#000000" className='w200' />
                                </div>
                            </div>
                            <div className='windows_item'>
                                <div><Icon type="edit" theme="filled" /> navigationBarTextStyle:导航栏标题颜色</div>
                                <div>
                                    <Radio.Group >
                                        <Radio value={'black'}>black</Radio>
                                        <Radio value={'white'}>white</Radio>
                                    </Radio.Group>
                                </div>
                            </div>
                            <div className='windows_item'>
                                <div><Icon type="edit" theme="filled" /> navigationBarTitleText:导航栏标题文字内容</div>
                                <div>
                                    <Input placeholder="" className='w200' />
                                </div>
                            </div>
                            <div className='windows_item'>
                                <div><Icon type="edit" theme="filled" /> navigationStyle:导航栏样式，仅支持以下值：default 默认样式 custom 自定义导航栏，只保留右上角胶囊按钮。</div>
                                <div>
                                    <Radio.Group >
                                        <Radio value={'default'}>default</Radio>
                                        <Radio value={'custom'}>custom</Radio>
                                    </Radio.Group>
                                </div>
                            </div>
                            <div className='windows_item'>
                                <div><Icon type="edit" theme="filled" /> backgroundColor:窗口的背景色</div>
                                <div>
                                    <Input placeholder="#ffffff" className='w200' />
                                </div>
                            </div>
                            <div className='windows_item'>
                                <div><Icon type="edit" theme="filled" /> enablePullDownRefresh:是否开启全局的下拉刷新</div>
                                <div>
                                    <Switch checkedChildren="true" unCheckedChildren="false" />
                                </div>
                            </div>
                            <div className='windows_item'>
                                <div><Icon type="edit" theme="filled" /> onReachBottomDistance:页面上拉触底事件触发时距页面底部距离，单位为 px</div>
                                <div>
                                    <Input placeholder="" className='w200' />
                                </div>
                            </div>
                            <div className='windows_item'>
                                <div><Icon type="edit" theme="filled" /> pageOrientation:屏幕旋转设置，支持 auto / portrait / landscape</div>
                                <div>
                                    <Radio.Group >
                                        <Radio value={'auto'}>auto</Radio>
                                        <Radio value={'portrait'}>portrait</Radio>
                                        <Radio value={'custom'}>landscape</Radio>
                                    </Radio.Group>
                                </div>
                            </div>
                        </div>
                        <div className={'tabBar'}>
                            <h1 id='tabBar'>tabBar</h1>
                            <div className='windows_item'>
                                <div><Icon type="edit" theme="filled" /> color: tab 上的文字默认颜色，仅支持十六进制颜色</div>
                                <div>
                                    <Input placeholder="" className='w200' />
                                </div>
                            </div>
                            <div className='windows_item'>
                                <div><Icon type="edit" theme="filled" /> selectedColor: tab 上的文字选中时的颜色，仅支持十六进制颜色</div>
                                <div>
                                    <Input placeholder="" className='w200' />
                                </div>
                            </div>
                            <div className='windows_item'>
                                <div><Icon type="edit" theme="filled" /> backgroundColor: tab 的背景色，仅支持十六进制颜色</div>
                                <div>
                                    <Input placeholder="" className='w200' />
                                </div>
                            </div>
                            <div className='windows_item'>
                                <div><Icon type="edit" theme="filled" /> tabbar 上边框的颜色， 仅支持 black / white</div>
                                <div>
                                    <Radio.Group >
                                        <Radio value={'black'}>black</Radio>
                                        <Radio value={'white'}>white</Radio>
                                    </Radio.Group>
                                </div>
                            </div>
                            <div className='windows_item'>
                                <div><Icon type="edit" theme="filled" /> list tab 的列表，详见 list 属性说明，最少 2 个、最多 5 个 tab</div>
                                <div>
                                    <div className='tabListItem'>
                                        <div >
                                            <Tooltip title='页面路径，必须在 pages 中先定义'><span>pagePath</span></Tooltip> <Input placeholder="" className='w400' />
                                        </div>
                                        <div>
                                            <Tooltip title='tab 上按钮文字'><span>text</span></Tooltip> <Input placeholder="" className='w400' />
                                        </div>
                                        <div>
                                            <Tooltip title='图片路径，icon 大小限制为 40kb，建议尺寸为 81px * 81px，不支持网络图片。当 position 为 top 时，不显示 icon。'>
                                                <span>iconPath</span></Tooltip> <Input placeholder="" className='w400' />
                                        </div>
                                        <div>
                                            <Tooltip title='选中时的图片路径，icon 大小限制为 40kb，建议尺寸为 81px * 81px，不支持网络图片。当 position 为 top 时，不显示 icon。'>
                                                <span>selectedIconPath</span></Tooltip> <Input placeholder="" className='w400' />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </article>
                </div>
                <div className='float_menu'>
                    <Anchor>
                        {this.state.float_menu.map((item,index) => {
                            return (
                                <Link
                                    href={'#' + item.name}
                                    title={item.name}
                                    key={index}
                                />
                            )
                        })}
                    </Anchor>
                </div>
            </div>
        )
    }
}