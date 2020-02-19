import React,{ Component } from "react";
import {BrowserRouter , Route, Switch} from 'react-router-dom';
// 微信小程序相关
import WeApp from "./views/weapp/index";
import WeAppConfig from "./modules/weapp/config/index";

import Home from './views/home/index';
import D2 from "./views/D2/index";


const App = ()=>(
    <BrowserRouter >
        <Switch>
            <Route exact path='/' component={Home}></Route>
            <Route exact path='/weapp' component={WeApp} ></Route>
            <Route exact path='/weapp/config' component={WeAppConfig} ></Route>
            <Route exact path='/d2' component={D2} ></Route>
        </Switch>
    </BrowserRouter >
)

export default App