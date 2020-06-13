import React, { Component } from "react";
import { Button, Steps,Icon} from 'antd';
const { Step } = Steps;
import './index.less';
import FileSystem from "../../components/FileSystem/index";
import TemplateSelector from "../../components/TemplateSelector/index";
import weappImage from '../../assets/weapp.jpg';
export default class WeApp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mode:'',
            stepBarCurrent:0,
            templates:[
                {
                    name:'原生小程序基础模板',
                    value:'1'
                },
                // {
                //     name:'敬请期待',
                //     value:'2'
                // },
                // {
                //     name:'敬请期待',
                //     value:'3'
                // },
            ],
        }
        this.navigate = this.navigate.bind(this);
        this.createProject = this.createProject.bind(this);
        this.importProject = this.importProject.bind(this);
        this.selectTemplate = this.selectTemplate.bind(this);
    }
    navigate() {
        this.props.history.push('/weapp/config')
    }
    createProject(){
        this.setState({mode:'create_mode'})
    }
    importProject(){
        this.setState({mode:'import_mode'})
    }
    selectTemplate(value){
        value = parseInt(value);
        this.setState({
            stepBarCurrent:value,
        })
    }
    render() {

        const CreateStepBar = (
            <div className='stepBar'>
                <Steps current={this.state.stepBarCurrent}>
                    <Step title="选择模板" />
                    <Step title="选择文件夹" />
                    <Step title="初始化" />
                    <Step title="完成" />
                </Steps>
            </div>
        );

        const ImportModule = (
            <div className='importModule'>
                <div className='title'>选择导入的项目文件夹</div>
                <FileSystem></FileSystem>
            </div>
        )

        return (
            <div className='weapp'>
                <div className='layout-left'>
                    <div className='logo'>
                        <img src={weappImage} />
                    </div>
                </div>
                <div className='layout-right'>
                    <header>
                        <div className="pannel">
                            <div></div>
                            <div>
                                <Button type='primary' className={'mr20'} icon={'thunderbolt'} onClick={()=>{this.createProject()}}>新建项目</Button>
                                <Button type='primary' className={'mr20'} icon={'import'} onClick={()=>{this.importProject()}}>导入项目</Button>
                            </div> 
                        </div>
                    </header>
                    <div className='body'>
                        {this.state.mode=='create_mode'&& CreateStepBar}
                        {this.state.mode=='create_mode' && this.state.stepBarCurrent == 0 && <TemplateSelector list={this.state.templates} onConfirm={this.selectTemplate} />}
                        {this.state.mode=='create_mode' && this.state.stepBarCurrent == 1 && <FileSystem></FileSystem>}
                        {this.state.mode=='import_mode' && ImportModule}
                    </div>
                </div>
                <div className='layout-bottom'>
                    <div className='version'>
                        <Icon type="tag" /> Version 1.0.0
                    </div>
                </div>


                <div className={'viewport'}>

                </div>

            </div>

        )
    }
}
