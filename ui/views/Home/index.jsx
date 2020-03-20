import React from "react";
import "./index.less";
import Weapp from '../../assets/weapp.jpg';
import D2 from "../../assets/d2.jpg";
export default class Home extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            Menus :[
                {
                    coverImg:Weapp,
                    title:"微信小程序",
                    path:"/weapp",
                    id:1,
                },
                {
                    coverImg:D2,
                    title:"D2Admin",
                    path:"/d2",
                    id:2,
                }
            ]
        }
        this.navigate.bind(this)
    }
    navigate(path){
        this.props.history.push(path)
    }
    componentDidMount(){

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
