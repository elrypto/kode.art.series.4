import React from "react";
import ReactDOM from "react-dom";
import { Router, RouteComponentProps } from "@reach/router";
import './bootstrap.min.css';
import './fixed.css';
import './style.css';
import 'antd/dist/antd.css';

import App from "./App";
import Main from "./views/Main";
import Test from './views/Test';
import GettingStarted from './views/GettingStarted';
import NotFound from './views/NotFound';



const RouterPage = (props: { pageComponent: JSX.Element } & RouteComponentProps) => props.pageComponent;

ReactDOM.render(
      <Router>
          <App path="/">      
            <RouterPage pageComponent={<Main />} path="/" />
            <RouterPage pageComponent={<Test />} path="/test" />  
            <RouterPage pageComponent={<GettingStarted />} path="/gettingStarted" />  
          </App>
      </Router>
 ,
  document.getElementById("root")
);

/*
<RouterPage pageComponent={<NotFound />} default />
*/