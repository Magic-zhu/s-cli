import React,{ Component } from "react";
import {BrowserRouter , Route, Switch} from 'react-router-dom';
import WeApp from "./views/weapp/index";
import Home from './views/home/index';
import WeAppConfig from "./modules/weapp/config/index";

const App = ()=>(
    <BrowserRouter >
        <Switch>
            <Route exact path='/' component={Home}></Route>
            <Route exact path='/weapp' component={WeApp} ></Route>
            <Route exact path='/weapp/config' component={WeAppConfig} ></Route>
            <Route exact path='/d2' component={WeApp} ></Route>
        </Switch>
    </BrowserRouter >
)

export default App