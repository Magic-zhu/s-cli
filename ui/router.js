import React,{ Component } from "react";
import {BrowserRouter , Route, Switch} from 'react-router-dom';
import WeApp from "./views/weapp/index";

const App = ()=>(
    <BrowserRouter >
        <Switch>
            <Route exact path='/'></Route>
            <Route exact path='/weapp' component={WeApp} ></Route>
        </Switch>
    </BrowserRouter >
)
// class App extends Component {
//     constructor(props){
//         super(props)
//     }
//     render(){
//         return (

//         )
//     }
// }

export default App