import React from "react";
import "./index.less";
import WeappCli from '../../assets/weapp-cli.png';
import D2 from "../../assets/d2.jpg";
import Editor from '../../assets/microapp-editor.png';
import chalk from 'chalk';
export default class Home extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            Menus :[
                {
                    coverImg:WeappCli,
                    title:"微信小程序脚手架",
                    path:"/weapp",
                    id:1,
                },
                {
                    coverImg:D2,
                    title:"D2Admin脚手架",
                    path:"/d2",
                    id:2,
                },
                {
                    coverImg:Editor,
                    title:"小程序可视化编辑器",
                    path:"/microapp-editor",
                    id:3, 
                }
            ]
        }
        this.navigate.bind(this)
    }
    navigate(path){
        this.props.history.push(path)
    }
    componentDidMount(){
        console.log(chalk.red('红色'))
    }
    render(){
        return (
            <div className="home">
                {
                    this.state.Menus.map(item=>{
                        return (
                            <div className="menu" onClick={()=>{this.navigate(item.path)}} key={item.id}>
                                <header>
                                    <img src={item.coverImg} alt=""/>
                                </header>
                                <footer>
                                    <span>{item.title}</span>
                                </footer>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}
