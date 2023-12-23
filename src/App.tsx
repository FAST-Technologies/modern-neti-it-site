// @ts-ignore
import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import AppRoutes, {routes} from './AppRoutes';



export interface authorization {
    route: routes
    index: number
}
export default class App extends Component {
  render() {
    return (
        <Router>
          <Routes>
            {AppRoutes.map((route, index) => {
              const { element, requireAuth, ...rest } = route;
              return <Route key={index} path={route.path} element={route.element} {...rest}/>;
            })}
          </Routes>
        </Router>
    );
  }
}