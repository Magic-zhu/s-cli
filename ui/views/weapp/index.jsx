import React, { Component } from "react";
import { Button, Steps } from 'antd';
const { Step } = Steps;
import './index.less';
import FileSystem from "../../components/FileSystem/index";

export default class WeApp extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
        this.navigate.bind(this);
        this.createProject.bind(this);
        this.importProject.bind(this);
    }
    navigate() {
        this.props.history.push('/weapp/config')
    }
    render() {

        return (
            <div className='weapp'>
                <div className='layout-left'>
                    <div>

                    </div>
                </div>
                <div className='layout-right'>
                    <header>
                        <div className="pannel">
                            <div></div>
                            <div>
                                <Button type='primary' className={'mr20'} icon={'thunderbolt'} onClick={this.createProject}>新建项目</Button>
                                <Button type='primary' className={'mr20'} icon={'import'} onClick={this.importProject}>导入项目</Button>
                            </div> 
                        </div>
                    </header>
                    <div className='body'>
                        <div className='stepBar'>
                            <Steps current={0}>
                                <Step title="选择模板" />
                                <Step title="初始化" />
                                <Step title="完成" />
                            </Steps>
                        </div>
                    </div>
                </div>
                <div className='layout-bottom'>

                </div>


                <div className={'viewport'}>

                </div>

            </div>

        )
    }
}
