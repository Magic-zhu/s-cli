import React ,{ Component } from "react";
import { Button } from 'antd';
export default class WeApp extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return (
            <div>
                <div>
                    <Button>读取</Button>
                    <Button>生成</Button>
                    <Button>更新</Button>
                </div>
                <div></div>
            </div>
        )
    }
}
