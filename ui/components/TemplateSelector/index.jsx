import React, { Component } from 'react'
import "./index.less";
import { Radio ,Button} from 'antd';

export default class TemplateSelector extends Component {
    constructor(props){
        super(props)
        this.state={
            value:"",
        }
        this.confirm.bind(this)
        this.onChange = this.onChange.bind(this);
    }
    onChange(e){
        this.setState({
            value:e.target.value
        })
    }
    confirm(){
        this.props.onConfirm(this.state.value)
    }
    render() {
        return (
            <div className='TemplateSelector'>
                <div className='box'>
                    <Radio.Group onChange={this.onChange}>
                        {this.props.list.map((item,index)=>{
                            return  <Radio value={item.value} key={index}>{item.name}</Radio>
                        }) }     
                    </Radio.Group> 
                </div>
                <footer>
                    <Button type='primary' onClick={()=>{this.confirm()}}>确认</Button>
                </footer>
            </div>
        )
    }
}
